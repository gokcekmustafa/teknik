import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const expUser = process.env.ADMIN_USERNAME;
  const expPass = process.env.ADMIN_PASSWORD;
  if (!expUser || !expPass) {
    return NextResponse.json({ error: "ADMIN_USERNAME/PASSWORD not set" }, { status: 500 });
  }
  if (username === expUser && password === expPass) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("admin_auth", expPass, { httpOnly: true, path: "/", maxAge: 60 * 60 * 8, sameSite: "lax" });
    return res;
  }
  return NextResponse.json({ error: "Hatalı kullanıcı adı veya şifre" }, { status: 401 });
}
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_auth", "", { maxAge: 0, path: "/" });
  return res;
}
