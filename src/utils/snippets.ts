import { ensureDirSync } from "../deps.ts";
import { VscSnippet, VscSnippetDict, XSnippetDict } from "../models/app.ts";
import { addSymbol } from "./general.ts";

export const convertToVscSnippet = (snippets: XSnippetDict) => {
  return Object.entries(snippets)
    .reduce((acc, [prefix, { name, body }]) => {
      acc[addSymbol(name)] = { prefix, body } as VscSnippet;
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
  const path = "./dist";
  ensureDirSync(path);
  const file = `${path}/${name}.code-snippets`;

  Deno.writeTextFileSync(
    file,
    JSON.stringify(data, null, 2),
  );
};
