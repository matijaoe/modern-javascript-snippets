import { parse } from "./deps.ts";
import { generateDocs, populateDocsBlock } from "./docs-gen/snippets.ts";
import { languages } from "./snippets/app.ts";
import {
  convertToVscSnippet,
  generateSnippets,
  groupSnippets,
} from "./utils/snippets.ts";

const flags = parse(Deno.args, {
  boolean: ["snippets", "docs"],
  default: { snippets: false, docs: false },
});

if (!flags.snippets && !flags.docs) {
  console.log("Please specify at least one flag: --snippets or --docs");
} else {
  if (flags.snippets) {
    console.log("\nGenerating snippets...");
    languages.forEach((language) => {
      const categorizedVscSnippets = language
        .snippetDefinitions.map(
          (item) => {
            const snippets = convertToVscSnippet(item.snippets);
            return { ...item, snippets };
          },
        );

      const variantVscSnippet = groupSnippets(
        categorizedVscSnippets.map((item) => item.snippets),
      );
      generateSnippets(language.fileExtension, variantVscSnippet);
    });
  }

  // TODO: probably better to make it generate from vsc json
  // pass in meta, and snippets converted to vsc format
  if (flags.docs) {
    console.log("\nGenerating docs...");
    const docs = generateDocs(languages);
    populateDocsBlock(docs);
  }
}
