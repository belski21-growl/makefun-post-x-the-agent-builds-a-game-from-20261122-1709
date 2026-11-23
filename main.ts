// METEOR RUSH — make.fun entry program (Node 22, standard library only).
//
// The entry itself is the X post: an agent built a tiny browser game from
// one prompt, filmed it, and posted the video. This program does the one
// job the grader needs: copy POST.json from the repository root into the
// output directory, where the gate reads the post's address.
//
// It reads the file first and checks it parses as a JSON object with a
// string `url` before copying, so a broken POST.json fails loudly here
// instead of reaching the gate as garbage. The copy itself is byte for
// byte, so the two runs the grader does always write identical bytes.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "POST.json");
const target = join(OUTPUT_DIR, "POST.json");

try {
  const raw = readFileSync(source, "utf8");
  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    Array.isArray(parsed) ||
    typeof (parsed as { url?: unknown }).url !== "string"
  ) {
    throw new Error("POST.json is not a JSON object with a string url");
  }
} catch (err) {
  console.error(`POST.json in ${BOT_DIR} is not usable: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
