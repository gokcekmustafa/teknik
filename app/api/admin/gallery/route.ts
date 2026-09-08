import { NextResponse } from "next/server";
import { getFileContent, putFile, deleteFile, getFileSha } from "@/lib/github";
import { isAdmin } from "@/lib/auth";

export async function GET() {
  const data = await getFileContent("data/gallery.json");
  if (!data) return NextResponse.json([]);
  try { return NextResponse.json(JSON.parse(data.content)); } catch { return NextResponse.json([]); }
}

export async function POST(req: Request) {
  if (!(await isAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { filename, base64, category, title } = await req.json();
  if (!filename || !base64) return NextResponse.json({ error: "filename/base64 required" }, { status: 400 });
  const safeName = Date.now() + "-" + filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path = `public/uploads/gallery/${safeName}`;
  // 1) upload image
  await putFile(path, base64, `admin: add gallery ${safeName}`);
  // 2) update gallery.json
  const cur = await getFileContent("data/gallery.json");
  const list = cur ? JSON.parse(cur.content) : [];
  list.unshift({ id: safeName, src: `/uploads/gallery/${safeName}`, category: category || "Genel", title: title || safeName, uploadedAt: new Date().toISOString() });
  const newContent = Buffer.from(JSON.stringify(list, null, 2)).toString("base64");
  await putFile("data/gallery.json", newContent, `admin: update gallery.json add ${safeName}`, cur?.sha);
  return NextResponse.json({ ok: true, src: `/uploads/gallery/${safeName}` });
}

export async function PUT(req: Request) {
  if (!(await isAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, category } = await req.json();
  if (!id || !category) return NextResponse.json({ error: "id/category required" }, { status: 400 });
  const cur = await getFileContent("data/gallery.json");
  if (!cur) return NextResponse.json({ error: "gallery not found" }, { status: 404 });
  const list = JSON.parse(cur.content);
  const idx = list.findIndex((x: { id: string }) => x.id === id);
  if (idx === -1) return NextResponse.json({ error: "not found" }, { status: 404 });
  list[idx].category = category;
  const newContent = Buffer.from(JSON.stringify(list, null, 2)).toString("base64");
  await putFile("data/gallery.json", newContent, `admin: update gallery.json category ${id} -> ${category}`, cur.sha);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  if (!(await isAdmin(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  // delete image file
  const sha = await getFileSha(`public/uploads/gallery/${id}`);
  if (sha) await deleteFile(`public/uploads/gallery/${id}`, `admin: delete gallery ${id}`, sha);
  // remove from gallery.json
  const cur = await getFileContent("data/gallery.json");
  if (cur) {
    const list = JSON.parse(cur.content).filter((x: { id: string }) => x.id !== id);
    const newContent = Buffer.from(JSON.stringify(list, null, 2)).toString("base64");
    await putFile("data/gallery.json", newContent, `admin: update gallery.json delete ${id}`, cur.sha);
  }
  return NextResponse.json({ ok: true });
}
