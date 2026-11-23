// Roast Your Own Agent — make.fun entry
// One line (<=200 chars), roasting my own AI agent: playful, never hateful.
// The line: an over-apologetic agent that treats debugging like a relationship fight.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent apologized for the bug, fixed it, apologized for the fix, then asked if I was mad at it.";

// Gate: 1-200 characters (counted as Unicode code points, not UTF-16 units),
// single line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (/\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${chars.length} characters to ${join(outDir, "entry.txt")}`);
