import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "ADMIN_PASSWORD not set" }, { status: 500 });
  }
  if (password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("admin_auth", process.env.ADMIN_PASSWORD!, { httpOnly: true, path: "/", maxAge: 60 * 60 * 8, sameSite: "lax" });
    return res;
  }
  return NextResponse.json({ error: "Hatalı şifre" }, { status: 401 });
}
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_auth", "", { maxAge: 0, path: "/" });
  return res;
}
