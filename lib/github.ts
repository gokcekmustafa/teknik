const REPO = process.env.GITHUB_REPO || "gokcekmustafa/teknik";
const BRANCH = process.env.GITHUB_BRANCH || "main";
const TOKEN = process.env.GITHUB_TOKEN || "";

function headers() {
  return {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };
}

export async function getFileSha(path: string): Promise<string | null> {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}?ref=${BRANCH}`, { headers: headers(), cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`getFileSha failed ${res.status}`);
  const data = await res.json();
  return data.sha as string;
}

export async function getFileContent(path: string): Promise<{ content: string; sha: string } | null> {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}?ref=${BRANCH}`, { headers: headers(), cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`getFileContent failed ${res.status}`);
  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return { content, sha: data.sha };
}

export async function putFile(path: string, base64Content: string, message: string, sha?: string) {
  const body: Record<string, unknown> = { message, content: base64Content, branch: BRANCH };
  if (sha) body.sha = sha;
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`putFile failed ${res.status} ${t}`);
  }
  return res.json();
}

export async function deleteFile(path: string, message: string, sha: string) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    method: "DELETE",
    headers: headers(),
    body: JSON.stringify({ message, sha, branch: BRANCH }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`deleteFile failed ${res.status} ${t}`);
  }
  return res.json();
}
