import { XSnippetVariant } from "../models/app.ts";
import { javascript } from "./js/app.ts";
import { typescript } from "./ts/app.ts";

export const variants: XSnippetVariant[] = [
  {
    label: "Snippets",
    language: "javascript",
    fileExtension: "js",
    snippetDefinitions: javascript,
  },
  {
    label: "TypeScript",
    description: "Available only in .ts and .tsx files",
    language: "typescript",
    fileExtension: "ts",
    snippetDefinitions: typescript,
  },
];
