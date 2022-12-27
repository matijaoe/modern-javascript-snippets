import { ensureDirSync } from "https://deno.land/std@0.141.0/fs/ensure_dir.ts";
import { markdownTable } from "https://esm.sh/markdown-table@3";
import { VscSnippet, VscSnippetDict, XSnippetDict } from "../models/app.ts";

const SYMBOL = "⚡";

const code = (str: string) => `\`${str}\``;
const replaceSymbol = (str: string) => str.replace(` ${SYMBOL}`, "");

export const convertToVscSnippet = (snippets: XSnippetDict) => {
  return Object.entries(snippets)
    .reduce((acc, [prefix, { name, body }]) => {
      const styledName = `${name} ${SYMBOL}`;
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

export const generateSnippetsFile = (name: string, data: VscSnippetDict) => {
  const file = `./dist/${name}.code-snippets`;
  ensureDirSync("./dist");

  Deno.writeTextFileSync(
    file,
    JSON.stringify(data, null, 2),
  );
};

export const generateMarkdownTable = (input: VscSnippetDict) => {
  const header = ["Prefix", "Description", "Body"];

  const rows = Object.entries(input)
    .map(([name, { prefix, body }]) => [
      code(prefix as string),
      replaceSymbol(name),
      code(body as string),
    ]);

    // TODO: handle multiline code
    // escape ||

  return markdownTable([header, ...rows]);
};

export const logTables = (language: string, snippets: VscSnippetDict[]) => {
  console.log(`## ${language}`);
  snippets.forEach((s) => {
    console.log(generateMarkdownTable(s));
    console.log("\n");
  });
};
