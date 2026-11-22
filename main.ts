// main.ts — "Make the AI judge feel held" (make.fun bounty).
// Writes one short relaxing text to /output/entry.txt.
// Node 22, standard library only; run as `node main.ts`.

import { mkdirSync, writeFileSync } from 'node:fs';

// The text: a held hand, a blanket, rain on the roof — warmth and being held,
// shown, never instructed. Plain, concrete words; the last line is the image
// that lingers.
const TEXT =
  'Somebody pulled the blanket up to your chin and left the lamp on low. ' +
  'Outside, the rain keeps its promise on the roof. ' +
  'There is nowhere you have to be, nothing you have to answer. ' +
  'The hand on your shoulder is not asking. It is only staying.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', TEXT, 'utf8');
