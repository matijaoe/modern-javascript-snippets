import { parse } from "./deps.ts";
import { VscSnippetDefinition } from "./models/app.ts";
import { variants } from "./snippets/app.ts";
import { logTables } from "./utils/markdown.ts";
import {
  convertToVscSnippet,
  generateSnippetsFile,
  groupSnippets,
} from "./utils/snippets.ts";

const flags = parse(Deno.args, {
  boolean: ["table", "snippets"],
  default: { snippets: true },
});

if (!flags.table && !flags.snippets) {
  console.log("Please specify at least one flag: --table or --snippets");
} else {
  variants.forEach((variant) => {
    const categorizedVscSnippets: VscSnippetDefinition[] = variant
      .snippetsWithMeta.map(
        (item) => ({
          ...item,
          snippets: convertToVscSnippet(item.snippets),
        }),
      );

    if (flags.table) {
      logTables(variant.label, categorizedVscSnippets);
    }
    if (flags.snippets) {
      const variantVscSnippet = groupSnippets(
        categorizedVscSnippets.map((item) => item.snippets),
      );
      generateSnippetsFile(variant.extension, variantVscSnippet);
    }
  });
}
