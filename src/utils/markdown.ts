import { VscSnippetDefinition, VscSnippetDict } from "../models/app.ts";
import { markdownTable } from "../deps.ts";
import { replaceSymbol } from "./general.ts";

export const code = (str: string) => `\`${str}\``;

export const serializeForMarkdown = (str: string) => {
  if (str.includes("\n")) {
    return str
      .replace(/`/, "<code>")
      .replace(/`/, "</code>")
      .replace(/\n/g, "<br>")
      .replace(/\t/g, "&nbsp;&nbsp;")
      .replace(/\|/g, "\\|");
  }
  // TODO: dont remove | when it is in ``
  return str.replace(/\|/g, "\\|");
};

export const generateMarkdownTable = (input: VscSnippetDict) => {
  const header = ["Prefix", "Description", "Body"];

  const parseMultiLine = (input: string | string[]) =>
    Array.isArray(input) ? input.join("\n") : input;

  const rows = Object.entries(input)
    .map(([name, { prefix, body }]) => {
      const row = [
        code(prefix as string),
        replaceSymbol(name),
        code(parseMultiLine(body)),
      ];
      const serializedRow = row.map(serializeForMarkdown);
      return serializedRow;
    });

  return markdownTable([header, ...rows]);
};

export const logTables = (
  language: string,
  snippetsWithMeta: VscSnippetDefinition[],
) => {
  console.log(`## ${language}`);
  snippetsWithMeta.forEach(({ snippets, meta }) => {
    console.log(`### ${meta.title}`);
    if (meta.description) {
      console.log(meta.description);
    }
    console.log(generateMarkdownTable(snippets));
    console.log("\n");
  });
};
