import { parse } from "./deps.ts";
import {
  generateSnippetDocs,
  generateVariantSections,
} from "./docs-gen/snippets.ts";
// import { logMdTables } from "./docs-gen/table-md.ts";
import { languages } from "./snippets/app.ts";
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
  if (flags.snippets) {
    // Snippets generation
    languages.forEach((language) => {
      const categorizedVscSnippets = language
        .snippetDefinitions.map(
          (item) => ({
            ...item,
            snippets: convertToVscSnippet(item.snippets),
          }),
        );

      const variantVscSnippet = groupSnippets(
        categorizedVscSnippets.map((item) => item.snippets),
      );
      generateSnippetsFile(language.fileExtension, variantVscSnippet);
    });
  }

  if (flags.table) {
    const sections = generateVariantSections(languages);
    generateSnippetDocs(sections);
  }
}
