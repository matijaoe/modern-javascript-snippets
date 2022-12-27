import { variants } from "./snippets/app.ts";
import { convertToVscSnippet, logTables } from "./utils/app.ts";

variants.forEach((option) => {
  const snippetSections = option.snippets.map(convertToVscSnippet);
  logTables(option.language, snippetSections);
});
