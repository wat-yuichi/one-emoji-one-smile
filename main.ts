import { mkdir, writeFile } from "node:fs/promises";

const warmGreeting = "😊";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", warmGreeting, "utf8");
