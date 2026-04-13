import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken, getSessionCookieName } from "@/lib/admin-auth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
