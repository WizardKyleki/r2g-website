import { NextResponse } from "next/server";
import {
  verifyPassword,
  createSessionToken,
  getSessionCookieName,
  getSessionMaxAge,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const validUsername = (process.env.ADMIN_USERNAME || "ADMIN").toUpperCase();
    if (!username || username.toUpperCase() !== validUsername) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (!password || !(await verifyPassword(password))) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await createSessionToken();
    const response = NextResponse.json({ success: true });

    response.cookies.set(getSessionCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: getSessionMaxAge(),
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
