import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const next = join(root, ".next");
const standalone = join(next, "standalone");
const dist = join(root, "dist");

if (!existsSync(standalone)) {
  throw new Error("Standalone build output is missing. Run next build before packaging dist.");
}

mkdirSync(dist, { recursive: true });
cpSync(standalone, dist, { recursive: true, force: true });
cpSync(join(root, "public"), join(dist, "public"), { recursive: true, force: true });
mkdirSync(join(dist, ".next"), { recursive: true });
cpSync(join(next, "static"), join(dist, ".next", "static"), { recursive: true, force: true });
