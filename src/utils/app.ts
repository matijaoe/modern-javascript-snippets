import { markdownTable } from "https://esm.sh/markdown-table@3";
import { VscSnippet, VscSnippetDict, XSnippetDict } from "../models/app.ts";

// only to move current code-snippets to my format
export const vscToCustom = (snippets: VscSnippetDict): XSnippetDict => {
  return Object.entries(snippets).reduce((acc, [name, { prefix, body }]) => {
    acc[prefix as string] = { name: name.replace(` ⚡`, ""), body };
    return acc;
  }, {} as XSnippetDict);
};

export const convertToVscSnippet = (snippets: XSnippetDict): VscSnippetDict => {
  return Object.entries(snippets)
    .reduce((acc, [prefix, { name, body }]) => {
      const styledName = `${name} ⚡`;
      acc[styledName] = { prefix, body } as VscSnippet;
      return acc;
    }, {} as VscSnippetDict);
};

export const groupSnippets = (dicts: VscSnippetDict[]) => {
  return dicts.reduce((acc, curr) => ({
    ...acc,
    ...curr,
  }));
};

export const writeSnippetFile = (name: string, data: VscSnippetDict) => {
  Deno.writeTextFileSync(
    `./${name}.code-snippets`,
    JSON.stringify(data, null, 2),
  );
};

export const generateMarkdownTable = (input: VscSnippetDict) => {
  const header = ["Prefix", "Description", "Body"];

  const symbol = "⚡";
  const replaceSymbol = (str: string) => str.replace(` ${symbol}`, "");
  const code = (str: string) => `\`${str}\``;

  const rows = Object.entries(input)
    .map(([name, { prefix, body }]) => [
      code(prefix as string),
      replaceSymbol(name),
      code(body as string),
    ]);

  return markdownTable([header, ...rows]);
};

export const logTables = (language: string, snippets: VscSnippetDict[]) => {
  console.log(`## ${language}`);
  snippets.forEach((s) => {
    console.log(generateMarkdownTable(s));
    console.log("\n");
  });
};
