import { ensureDirSync } from "../deps.ts";
import { XSnippetDefinition, XSnippetVariant } from "../models/app.ts";
import {
  $col,
  $colCode,
  $colCodeBlock,
  $row,
  $table,
  joinByDoubleNewLine,
  joinByNewLine,
} from "./table-html.ts";

type SnippetRow = {
  prefix: string;
  name: string;
  body: string | string[];
};

const snippetRow = ({ prefix, name, body }: SnippetRow) => {
  const parsedBody = Array.isArray(body) ? body.join("\n") : body;
  const cols = joinByNewLine([
    $colCode(prefix),
    $col(name),
    $colCodeBlock(parsedBody),
  ]);

  return $row(cols);
};

const generateSnippetTable = (items: SnippetRow[]) => {
  const headings = ["Prefix", "Name", "Body"];
  const rows = items.map(snippetRow);

  return $table(headings, rows);
};

const generateSnippetSection = (
  { meta, snippets }: XSnippetDefinition,
) => {
  const title = `### ${meta.title}`;
  const description = meta.description ?? "";
  const table = generateSnippetTable(
    Object.entries(snippets).map(([prefix, value]) => ({
      ...value,
      prefix,
    })),
  );

  return joinByNewLine([title, description, table, ""]);
};

const generateVariantSection = (variant: XSnippetVariant) => {
  const title = `## ${variant.label}`;
  const description = variant.description ?? "";
  const sections = variant.snippetDefinitions.map(generateSnippetSection);

  return joinByNewLine([title, description, "", ...sections]);
};

export const generateVariantSections = (variants: XSnippetVariant[]) => {
  return joinByDoubleNewLine(variants.map(generateVariantSection));
};

export const generateSnippetDocs = (table: string) => {
  const path = "./dist";
  ensureDirSync(path);
  const file = `${path}/docs.md`;

  Deno.writeFileSync(
    file,
    new TextEncoder().encode(table),
  );
};
