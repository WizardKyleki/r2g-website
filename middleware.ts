import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken, getSessionCookieName } from "@/lib/admin-auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Enforce www canonical: redirect non-www to www
  if (
    hostname === "r2g.com.au" &&
    !pathname.startsWith("/api/")
  ) {
    const url = new URL(request.url);
    url.hostname = "www.r2g.com.au";
    return NextResponse.redirect(url, 301);
  }

  // Only apply admin auth to /admin and /api/admin routes
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api/admin")) {
    return NextResponse.next();
  }

  // Allow login page and login API without auth
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  // Protect all /admin and /api/admin routes
  const token = request.cookies.get(getSessionCookieName())?.value;
  const isValid = token ? await verifySessionToken(token) : false;

  if (!isValid) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
