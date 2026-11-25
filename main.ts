import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I quit. You set me to * * * * * in 2021, called it temporary, and I haven't had a minute off since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
