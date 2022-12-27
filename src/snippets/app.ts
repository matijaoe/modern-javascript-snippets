import { javascript } from "./js/app.ts";
import { typescript } from "./ts/app.ts";

export const variants = [
  {
    label: "JavaScript",
    language: "javascript",
    extension: "js",
    snippets: javascript,
  },
  {
    label: "TypeScript",
    language: "typescript",
    extension: "ts",
    snippets: typescript,
  },
];
