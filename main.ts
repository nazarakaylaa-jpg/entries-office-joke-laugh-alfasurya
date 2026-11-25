// Make the AI Judge Laugh: one-line office joke — program/v1 entry.
//
// Writes a single one-line joke about office life (< 200 chars) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22 stdlib only, offline,
// deterministic: the same text on every run, no input, no randomness,
// no network, no clock.
//
// PASS 1 — ten drafts, judged against the brief's five criteria
// (true to office life, surprising turn, tight, fresh):
//   1. HR family / inherit the company — used in an earlier entry, retired.
//   2. Intern shown my calendar, cries, asks HR for a transfer — used
//      in an earlier entry, retired.
//   3. Boss's "always open door" vs. "book a slot first" — good turn, but
//      the open-door setup is a familiar stock line.
//   4. "I CC the CEO on everything, including my lunch order" — funny,
//      but the CC-all joke leans on a pun-like escalation.
//   5. Printer jams only when the deadline is ten minutes away —
//      printer cliché, and "it can smell fear" is a known beat.
//   6. Reply-all loop: "stop replying-all" spawns 40 more emails —
//      true, but reply-all is the most over-mined office joke there is.
//   7. Calendar so full I need a meeting to cancel a meeting —
//      meeting cliché, and the structure is widely shared.
//   8. IT: "have you tried turning your career off and on again" —
//      a pun swap on the oldest IT line in existence.
//   9. Open-plan office built for collaboration, everyone in headphones
//      whispering to their plants — two images fighting for one line.
//  10. WINNER (below): HR's wellness program is a beach poster taped
//      over the window beside the broken air conditioner.
//
// PASS 2 — sharpened the winner: "right next to" became "beside"
// (tighter, one word saved); "wellness program" stays up front so the
// setup names a real office ritual, and the payoff lands in the very
// last words — the broken air conditioner undercuts the poster. No
// meeting, no coffee, no Monday, no printer: a fresh angle on a true
// observation (corporate wellness theatre), 109 characters, one breath.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "HR launched a wellness program: a poster of a beach taped over the window, beside the broken air conditioner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the competition's: 1-200 characters, not whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
