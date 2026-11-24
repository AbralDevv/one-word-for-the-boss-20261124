import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word for the Boss — the entry is exactly one word.
const WORD = "Decorative";

function outputDir(): string {
  const fromArgv = process.argv[2];
  if (fromArgv) return fromArgv;
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv) return fromEnv;
  return "/output";
}

function main(): void {
  let dir = outputDir();
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), WORD, "utf8");
  } catch {
    // Fall back to a local ./output when the primary dir is not writable.
    dir = "./output";
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), WORD, "utf8");
  }
}

main();
