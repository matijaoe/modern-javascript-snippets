import { replaceInFile } from "../deps.ts";
import { VscSnippetDefinition, VscSnippetVariant } from "../models/app.ts";
import { parseMultiline, replaceSymbol } from "../utils/general.ts";
import {
  $col,
  $colCode,
  $colCodeBlock,
  $row,
  $table,
  htmlComment,
  joinByDoubleNewLine,
  joinByNewLine,
} from "./table-html.ts";

type SnippetRow = {
  prefix: string;
  name: string;
  body: string | string[];
};

const snippetRow = ({ prefix, name, body }: SnippetRow) => {
  const cols = joinByNewLine([
    $colCode(prefix),
    $col(name),
    $colCodeBlock(parseMultiline(body)),
  ]);

  return $row(cols);
};

const generateSnippetTable = (items: SnippetRow[]) => {
  const headings = ["Prefix", "Name", "Body"];
  const rows = items.map(snippetRow);

  return $table(headings, rows);
};

const generateSnippetSection = ({ meta, snippets }: VscSnippetDefinition) => {
  const title = `### ${meta.title}`;
  const description = meta.description ?? "";
  const table = generateSnippetTable(
    Object.entries(snippets).map(([name, { body, prefix, description }]) => ({
      name: replaceSymbol(name),
      body,
      prefix: parseMultiline(prefix),
      description,
    })),
  );

  return joinByNewLine([title, description, table, ""]);
};

const generateVariantSection = (variant: VscSnippetVariant) => {
  const title = `## ${variant.label}`;
  const description = variant.description ?? "";
  const sections = variant.snippetDefinitions.map(generateSnippetSection);

  return joinByNewLine([title, description, "", ...sections]);
};

export const generateDocs = (variants: VscSnippetVariant[]) => {
  return joinByDoubleNewLine(variants.map(generateVariantSection));
};

const docsGenId = "docs-gen";
const docsGen = {
  start: htmlComment(`START:${docsGenId}`),
  end: htmlComment(`END:${docsGenId}`),
};

const docsBlock = (s: string) => {
  return joinByNewLine([docsGen.start, s, docsGen.end]);
};

export const populateDocsBlock = async (input: string) => {
  const regex = new RegExp(
    `${docsGen.start}[\\s\\S]*?${docsGen.end}`,
    "g",
  );

  const file = "./README.md";
  const options = {
    files: file,
    from: regex,
    to: docsBlock(input),
  };

  try {
    const results = await replaceInFile(options);
    const readmeResult = results.find((r) => r.file === file);

    if (readmeResult?.hasChanged) {
      console.log("✅ README updated");
    } else {
      console.log("👍 README already up to date");
    }
  } catch (error) {
    console.error("Error while updating README:", error);
  }
};
