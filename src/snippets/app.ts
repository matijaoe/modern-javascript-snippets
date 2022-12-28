import { XSnippetVariant } from "../models/app.ts";
import { javascript } from "./js/app.ts";
import { typescript } from "./ts/app.ts";

export const languages: XSnippetVariant[] = [
  {
    label: "Snippets",
    language: "javascript",
    fileExtension: "js",
    snippetDefinitions: javascript,
  },
  {
    label: "TypeScript specific",
    description: "Only applied to .ts and .tsx files",
    language: "typescript",
    fileExtension: "ts",
    snippetDefinitions: typescript,
  },
];
