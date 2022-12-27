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
  return joinByNewLine(["", "<!-- ROW -->", "<tr>", s, "</tr>"]);
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

const snippetRow = (
  { prefix, name, body }: {
    prefix: string;
    name: string;
    body: string | string[];
  },
) => {
  const cols = joinByNewLine([
    $colCode(prefix),
    $col(name),
    $colCodeBlock(Array.isArray(body) ? body.join("\n") : body),
  ]);

  return $row(cols);
};

const $table = (header: string, rows: string[]) => {
  return joinByNewLine([
    "<table>",
    header,
    joinByNewLine(rows),
    "</table>",
  ]);
};

const headerRow = (headers: string[]) => {
  const cols = joinByNewLine(headers.map((header) => $col(header)));

  return $row(cols);
};

// Custom for single snippet
const testcase = [
  {
    prefix: "c",
    name: "const",
    body: "const $0",
  },
  {
    prefix: "l",
    name: "let",
    body: "let $0",
  },
  {
    prefix: "ifei",
    name: "if/else-if statement",
    body: "if ($1) {\n\t$2\n} else if ($3) {\n\t$4\n}",
  },
  {
    prefix: "csc",
    name: "class with constructor",
    body: [
      "class $1 {",
      "\tconstructor($2) {",
      "\t\t$0",
      "\t}",
      "}",
    ],
  },
];
const snippetTableHeader = headerRow(["Prefix", "Name", "Body"]);
const snippetRows = testcase.map(snippetRow);

const singleSnippetTable = $table(snippetTableHeader, snippetRows);

Deno.writeFileSync(
  "./dist/test.md",
  new TextEncoder().encode(singleSnippetTable),
);
