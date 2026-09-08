import { cookies } from "next/headers";

export async function isAdmin(req?: Request) {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return false;
  // Check cookie from next/headers (server) or from Request header
  try {
    const c = await cookies();
    if (c.get("admin_auth")?.value === pwd) return true;
  } catch {}
  if (req) {
    const cookieHeader = req.headers.get("cookie") || "";
    if (cookieHeader.includes(`admin_auth=${pwd}`)) return true;
    const auth = req.headers.get("authorization");
    if (auth === `Bearer ${pwd}`) return true;
  }
  return false;
}
