import { variants } from "./snippets/app.ts";
import {
  convertToVscSnippet,
  groupSnippets,
  writeSnippetFile,
} from "./utils/app.ts";

variants.forEach((variant) => {
  const snippetSections = variant.snippets.map(convertToVscSnippet);
  const snippetSingle = groupSnippets(snippetSections);
  writeSnippetFile(variant.language.toLowerCase(), snippetSingle);
});
