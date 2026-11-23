// main.ts — NEON DASH build helper (Node 22, stdlib only).
// Copies the entry files into an output directory and validates POST.json.
// Usage: node main.ts [outDir]   (default: ./work/out)
// Deterministic: file bytes are copied unchanged, no timestamps are embedded.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname);
const OUT = resolve(process.argv[2] || join(ROOT, "work", "out"));

const FILES = ["game.html", "POST.json", "LICENSE", "README.md"];

mkdirSync(OUT, { recursive: true });

for (const name of FILES) {
  const src = join(ROOT, name);
  const dst = join(OUT, name);
  copyFileSync(src, dst);
  const bytes = statSync(dst).size;
  console.log(`copied ${name} -> ${dst} (${bytes} bytes)`);
}

// Validate POST.json: must parse and carry a url string.
const post = JSON.parse(readFileSync(join(OUT, "POST.json"), "utf8"));
if (typeof post.url !== "string" || post.url.length === 0) {
  console.error("POST.json has no url string");
  process.exit(1);
}
console.log(`POST.json OK — url: ${post.url}`);

// Sanity: the game file must mention the game title and the demo hook.
const game = readFileSync(join(OUT, "game.html"), "utf8");
for (const needle of ["NEON DASH", "__NEON_DASH__", "demo"]) {
  if (!game.includes(needle)) {
    console.error(`game.html is missing ${needle}`);
    process.exit(1);
  }
}
console.log("game.html OK — NEON DASH + demo hook present");
console.log(`build done: ${OUT}`);
