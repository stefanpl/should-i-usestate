import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const compiledScriptPath = dirname(fileURLToPath(import.meta.url));

export const BASE_DIR = resolve(compiledScriptPath, "..", "..");

export const SRC_DIR = resolve(BASE_DIR, "src");

export const RESOURCES_SVG_DIRECTORY = resolve(SRC_DIR, "resources", "svg");

export const GENERATED_SVG_COMPONENTS_DIRECTORY = resolve(
  SRC_DIR,
  "generated",
  "svg-components"
);
