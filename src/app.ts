import { parse } from "https://deno.land/std@0.168.0/flags/mod.ts";
import { variants } from "./snippets/app.ts";
import {
  convertToVscSnippet,
  generateSnippetsFile,
  groupSnippets,
  logTables,
} from "./utils/app.ts";

const flags = parse(Deno.args, {
  boolean: ["table", "snippets"],
  default: { snippets: true },
});

if (!flags.table && !flags.snippets) {
  console.log("Please specify at least one flag: --table or --snippets");
} else {
  variants.forEach((variant) => {
    const categorizedVscSnippets = variant.snippets.map(convertToVscSnippet);
    if (flags.table) {
      logTables(variant.label, categorizedVscSnippets);
    }
    if (flags.snippets) {
      const variantVscSnippet = groupSnippets(categorizedVscSnippets);
      generateSnippetsFile(variant.extension, variantVscSnippet);
    }
  });
}


