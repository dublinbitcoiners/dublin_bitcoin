import type { APIRoute } from "astro";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const presentationDir = path.join(process.cwd(), "dublin_bitcoin_pres");

export async function getStaticPaths() {
  const files = await readdir(presentationDir);

  return files
    .filter((file) => file.endsWith(".html"))
    .map((file) => ({
      params: { slug: file.replace(/\.html$/, "") },
    }));
}

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;

  if (!slug || !/^[a-z0-9_-]+$/.test(slug)) {
    return new Response("Not found", { status: 404 });
  }

  const html = await readFile(path.join(presentationDir, `${slug}.html`), "utf-8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
};
