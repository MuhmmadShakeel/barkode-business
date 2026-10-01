import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SERVICES_MENU, CONSULTANCY_MENU } from "@/lib/site";

const PAGE_FILE = /^page\.(?:tsx|ts|js)$/;
const EXCLUDED_FOLDERS = new Set(["api", "fonts", "components"]);

function getAppDirectory(): string {
  const root = process.cwd();
  const candidates = [path.join(root, "src", "app"), path.join(root, "app")];
  const appDirectory = candidates.find((candidate) => existsSync(candidate));

  if (!appDirectory) {
    throw new Error("Could not find an app or src/app directory.");
  }

  return appDirectory;
}

function getStaticRoutes(directory: string, segments: string[] = []): string[] {
  const entries = readdirSync(directory, { withFileTypes: true });
  const routes: string[] = [];

  if (entries.some((entry) => entry.isFile() && PAGE_FILE.test(entry.name))) {
    routes.push(segments.length === 0 ? "/" : `/${segments.join("/")}`);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;
    if (
      name.startsWith("_") ||
      name.startsWith("@") ||
      name.startsWith("[") ||
      EXCLUDED_FOLDERS.has(name.toLowerCase())
    ) {
      continue;
    }

    const isRouteGroup = name.startsWith("(") && name.endsWith(")");
    if (name.startsWith("(") && !isRouteGroup) continue;

    routes.push(
      ...getStaticRoutes(
        path.join(directory, name),
        isRouteGroup ? segments : [...segments, name],
      ),
    );
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://barakodetechnologies.com")
    .replace(/\/+$/, "");
  const lastModified = new Date();
  const detailRoutes = [
    ...SERVICES_MENU.map(({ href }) => href),
    ...CONSULTANCY_MENU.map(({ href }) => href),
  ];

  return [...new Set([...getStaticRoutes(getAppDirectory()), ...detailRoutes])]
    .sort()
    .map((route) => ({
      url: `${siteUrl}${route === "/" ? "" : route}`,
      lastModified,
    }));
}
