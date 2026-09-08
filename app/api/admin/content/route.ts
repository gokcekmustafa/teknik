import { NextResponse } from "next/server";
import { getFileContent, putFile } from "@/lib/github";
import { isAdmin } from "@/lib/auth";

export async function GET() {
  const cur = await getFileContent("data/siteContent.json");
  if (!cur) return NextResponse.json({});
  return NextResponse.json(JSON.parse(cur.content));
}
export async function PUT(req: Request) {
  if (!(await isAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const cur = await getFileContent("data/siteContent.json");
  const merged = cur ? { ...JSON.parse(cur.content), ...body } : body;
  // deep merge phones if present
  if (body.phones && cur) {
    const orig = JSON.parse(cur.content);
    merged.phones = { ...orig.phones, ...body.phones };
  }
  const newContent = Buffer.from(JSON.stringify(merged, null, 2)).toString("base64");
  await putFile("data/siteContent.json", newContent, "admin: update siteContent.json", cur?.sha);
  return NextResponse.json({ ok: true });
}
