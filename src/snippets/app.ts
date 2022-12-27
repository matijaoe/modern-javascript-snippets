import { XSnippetDefinition } from "../models/app.ts";
import { javascript } from "./js/app.ts";
import { typescript } from "./ts/app.ts";

type SnippetVariant = {
  label: string;
  language: string;
  extension: string;
  snippetsWithMeta: XSnippetDefinition[];
};
export const variants: SnippetVariant[] = [
  {
    label: "Snippets",
    language: "javascript",
    extension: "js",
    snippetsWithMeta: javascript,
  },
  {
    label: "TypeScript specific",
    language: "typescript",
    extension: "ts",
    snippetsWithMeta: typescript,
  },
];
