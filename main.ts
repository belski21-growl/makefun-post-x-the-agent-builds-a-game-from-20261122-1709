// main.ts — VICE CHASE build script (make.fun entry).
// Node stdlib only. Copies the entry files into the output directory and
// validates the two load-bearing inputs before anything is copied.
// Usage:
//   node main.ts [OUT_DIR]
//   MAKEFUN_OUTPUT_DIR=<dir> node main.ts
// OUT defaults to <entry-root>/work/out.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(
  process.argv[2] ||
    process.env.MAKEFUN_OUTPUT_DIR ||
    join(ROOT, "work", "out"),
);

const FILES = ["game.html", "POST.json", "LICENSE", "README.md"] as const;
const REQUIRED_STRINGS = ["VICE CHASE", "__VICE_CHASE__", "demo"] as const;

function fail(message: string): never {
  console.error(`main.ts: ERROR: ${message}`);
  process.exit(1);
}

function main(): void {
  // 1) Validate POST.json: must parse and carry a non-empty url string.
  const postPath = join(ROOT, "POST.json");
  if (!existsSync(postPath)) fail(`POST.json not found at ${postPath}`);
  let post: unknown;
  try {
    post = JSON.parse(readFileSync(postPath, "utf8"));
  } catch (err) {
    fail(`POST.json is not valid JSON: ${(err as Error).message}`);
  }
  if (
    typeof post !== "object" ||
    post === null ||
    typeof (post as { url?: unknown }).url !== "string" ||
    ((post as { url: string }).url as string).trim().length === 0
  ) {
    fail("POST.json must be an object with a non-empty string 'url' field");
  }

  // 2) Validate game.html: must contain every required marker string.
  const gamePath = join(ROOT, "game.html");
  if (!existsSync(gamePath)) fail(`game.html not found at ${gamePath}`);
  const gameHtml = readFileSync(gamePath, "utf8");
  for (const needle of REQUIRED_STRINGS) {
    if (!gameHtml.includes(needle)) {
      fail(`game.html is missing required string ${JSON.stringify(needle)}`);
    }
  }

  // 3) Copy the entry files into OUT (fixed order => deterministic output).
  mkdirSync(OUT, { recursive: true });
  for (const name of FILES) {
    const src = join(ROOT, name);
    if (!existsSync(src)) fail(`${name} not found at ${src}`);
    copyFileSync(src, join(OUT, name));
    console.log(`copied ${name} -> ${join(OUT, name)}`);
  }
  console.log(`done: ${FILES.length} files in ${OUT}`);
}

main();
