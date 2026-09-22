import { readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = join(root, "public");
const sourceExtensions = new Set([".jpg", ".jpeg", ".png"]);
const textExtensions = new Set([".css", ".js", ".mjs", ".ts", ".tsx"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }));
  return files.flat();
}

function extension(path) {
  const index = path.lastIndexOf(".");
  return index === -1 ? "" : path.slice(index).toLowerCase();
}

function webpPath(path) {
  return path.slice(0, path.lastIndexOf(".")) + ".webp";
}

const imageFiles = (await walk(publicDir)).filter((path) => sourceExtensions.has(extension(path)));
const replacements = new Map();

for (const input of imageFiles) {
  const output = webpPath(input);
  try {
    await stat(output);
  } catch {
    await sharp(input).rotate().webp({ quality: 80, effort: 6 }).toFile(output);
  }

  const sourceUrl = `/${relative(publicDir, input).split(sep).join("/")}`;
  const outputUrl = `/${relative(publicDir, output).split(sep).join("/")}`;
  replacements.set(sourceUrl, outputUrl);
}

const sourceDir = join(root, "src");
const sourceFiles = (await walk(sourceDir)).filter((path) => textExtensions.has(extension(path)));

for (const file of sourceFiles) {
  const original = await readFile(file, "utf8");
  let updated = original;
  for (const [from, to] of replacements) updated = updated.replaceAll(from, to);
  if (updated !== original) await writeFile(file, updated, "utf8");
}

for (const input of imageFiles) await rm(input);

console.log(`Converted ${imageFiles.length} raster assets to WebP and updated their references.`);
