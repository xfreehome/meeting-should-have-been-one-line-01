// Entry for the make.fun "The Meeting That Should Have Been One Line" bounty.
// Writes one single-line joke (1-200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "After forty-five minutes, eight people, and one shared screen, the meeting ended with the sentence it should have started with: nothing changes, and everyone already knew it.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
