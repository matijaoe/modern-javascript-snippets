import { XSnippetDefinition } from "../../models/app.ts";

export const flowControl: XSnippetDefinition = {
  meta: {
    title: "Flow control",
  },
  snippets: {
    if: {
      name: "if statement",
      body: "if ($1) {\n\t$2\n}",
    },
    ifel: {
      name: "if/else statement",
      body: "if ($1) {\n\t$2\n} else {\n\t$3\n}",
    },
    ifei: {
      name: "if/else-if statement",
      body: "if ($1) {\n\t$2\n} else if ($3) {\n\t$4\n}",
    },
    el: {
      name: "else statement",
      body: "else {\n\t$3\n}",
    },
    ei: {
      name: "else if statement",
      body: "else if ($1) {\n\t$2\n}",
    },
    ter: {
      name: "ternary operator",
      body: "$1 ? $2 : $3",
    },
    tera: {
      name: "ternary expression assignment",
      body: "const ${1:name} = $2 ? $3 : $4",
    },
    // TODO: better implementation
    sw: {
      name: "switch",
      body: [
        "switch ($1) {\n\tcase $2 : $3\n\tdefault: $0\n}",
      ],
    },
    cas: {
      name: "case",
      body: [
        "case ${1:value}:",
        "\t$0",
        "\tbreak;",
      ],
    },
    tc: {
      name: "try/catch",
      body: [
        "try {",
        "\t$1",
        "} catch (error) {",
        "\t$0",
        "}",
      ],
    },
    tcf: {
      name: "try/catch/finally",
      body: [
        "try {",
        "\t$1",
        "} catch (error) {",
        "\t$2",
        "} finally {",
        "\t$3",
        "}",
      ],
    },
    tf: {
      name: "try/finally",
      body: [
        "try {",
        "\t$1",
        "} finally {",
        "\t$2",
        "}",
      ],
    },
  },
};
