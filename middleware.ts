import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("r2g_admin_session");
  const isApiRoute = req.nextUrl.pathname.startsWith("/api/admin");

  if (!cookie?.value) {
    return isApiRoute
      ? NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      : NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Basic check: cookie exists and has the expected format (timestamp.hmac)
  const parts = cookie.value.split(".");
  if (parts.length !== 2) {
    return isApiRoute
      ? NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      : NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Check expiry (7 days)
  const timestamp = parseInt(parts[0], 10);
  const maxAge = 7 * 24 * 60 * 60 * 1000;
  if (isNaN(timestamp) || Date.now() - timestamp > maxAge) {
    return isApiRoute
      ? NextResponse.json({ error: "Session expired" }, { status: 401 })
      : NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect /admin pages EXCEPT /admin/login
    "/admin",
    "/admin/((?!login).*)",
    // Protect /api/admin/* routes EXCEPT /api/admin/auth (login/logout)
    "/api/admin/((?!auth).*)",
  ],
};
