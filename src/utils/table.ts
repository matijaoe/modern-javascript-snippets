import { VscSnippetDefinition } from "../models/app.ts";

const joinByNewLine = (s: string[]) => s.join("\n");
const joinByDoubleNewLine = (s: string[]) => s.join("\n\n");
const indent = (s: string) => `  ${s}`;
const escape = (s: string) => s.replace(/`/g, "\`");

const code = (s: string) => {
  return escape("`" + s + "`");
};

const codeBlock = (s: string, lang = "javascript") => {
  return joinByNewLine([
    `${indent(escape("```" + lang))}`,
    s,
    `${indent(escape("```"))}`,
  ]);
};

const $row = (s: string) => {
  return joinByNewLine(["", "<tr>", s, "</tr>"]);
};

const $colDoubleNewLine = (s: string, cb?: (input: string) => string) => {
  return joinByDoubleNewLine(["<td>", cb?.(s) ?? s, "</td>"]);
};

const $col = (s: string) => {
  return `<td>${s}</td>`;
};
const $colCode = (s: string) => {
  return $colDoubleNewLine(s, code);
};
const $colCodeBlock = (s: string) => {
  return $colDoubleNewLine(s, codeBlock);
};

const $headerRow = (headers: string[]) => {
  const cols = joinByNewLine(headers.map($col));
  return $row(cols);
};

const $table = (headings: string[], rows: string[]) => {
  return joinByNewLine([
    "<table>",
    $headerRow(headings),
    joinByNewLine(rows),
    "</table>",
  ]);
};

// Snippet specific login

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

export const generateSnippetTable = (items: SnippetRow[]) => {
  const headings = ["Prefix", "Name", "Body"];
  const rows = items.map(snippetRow);

  return $table(headings, rows);
};

export const generateSnippetSection = (
  { meta, snippets }: VscSnippetDefinition,
) => {
  const title = `### ${meta.title}`;
  const description = meta.description ? meta.description : "";
  const table = generateSnippetTable(
    Object.entries(snippets).map(([name, { prefix, body }]) => ({
      name,
      prefix: prefix as string,
      body,
    })),
  );

  return joinByNewLine([title, description, table]);
};

export const writeSectionToFile = (table: string) => {
  Deno.writeFileSync(
    "./dist/test.md",
    new TextEncoder().encode(table),
  );
};

// Testcase
const section = generateSnippetSection({
  meta: {
    title: "Test",
  },
  snippets: {
    "const": {
      "prefix": "c",
      "body": "const $0",
    },
    "let": {
      "prefix": "l",
      "body": "let $0",
    },
    "const assignment": {
      "prefix": "ca",
      "body": "const $1 = $0",
    },
    "let assignment": {
      "prefix": "la",
      "body": "let $1 = $0",
    },
    "const string assignment": {
      "prefix": "cas",
      "body": "const $1 = '$0'",
    },
    "const array assignment": {
      "prefix": "car",
      "body": "const $1 = [$0]",
    },
    "const object assignment": {
      "prefix": "cao",
      "body": "const $1 = { $0 }",
    },
    "object destructuring": {
      "prefix": "dob",
      "body": "const { $0 } = ${1:object}",
    },
    "array destructuring": {
      "prefix": "dar",
      "body": "const [$0] = ${1:array}",
    },
  },
});
writeSectionToFile(section);
