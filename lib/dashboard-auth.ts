import { cookies } from "next/headers";

const COOKIE_NAME = "r2g_admin_session";
const SESSION_DAYS = 7;

/** Create an HMAC-SHA256 signature */
async function sign(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Verify credentials and set session cookie */
export async function createSession(password: string): Promise<boolean> {
  const correctPassword = process.env.DASHBOARD_PASSWORD;
  const secret = process.env.DASHBOARD_SECRET;

  if (!correctPassword || !secret) {
    console.error("DASHBOARD_PASSWORD or DASHBOARD_SECRET not set");
    return false;
  }

  if (password !== correctPassword) return false;

  const timestamp = Date.now().toString();
  const hmac = await sign(timestamp, secret);
  const cookieValue = `${timestamp}.${hmac}`;

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
    path: "/",
  });

  return true;
}

/** Verify the session cookie is valid */
export async function verifySession(): Promise<boolean> {
  const secret = process.env.DASHBOARD_SECRET;
  if (!secret) return false;

  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME);
  if (!cookie?.value) return false;

  const [timestamp, hmac] = cookie.value.split(".");
  if (!timestamp || !hmac) return false;

  // Verify HMAC
  const expectedHmac = await sign(timestamp, secret);
  if (hmac !== expectedHmac) return false;

  // Check expiry
  const created = parseInt(timestamp, 10);
  const maxAge = SESSION_DAYS * 24 * 60 * 60 * 1000;
  if (Date.now() - created > maxAge) return false;

  return true;
}

/** Clear the session cookie */
export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
