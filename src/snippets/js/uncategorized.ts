import { XSnippetDefinition } from "../../models/app.ts";

export const uncategorized: XSnippetDefinition = {
  meta: {
    title: "Uncategorized",
    description: "Will be sorted into appropriate categories in the future.",
  },
  snippets: {
    uniq: {
      name: "array of unique values",
      body: "[...new Set($0)]",
    },
    pi: {
      name: "parse int",
      body: "parseInt($1, ${2|10,2,8,16|})",
    },
    pf: {
      name: "parse float",
      body: "parseFloat($1)",
    },
    am: {
      name: "array merge",
      body: "[...$1]",
    },
    om: {
      name: "object merge",
      body: "{ ...$1 }",
    },
    aat: {
      name: "array.at",
      body: "$1.at(${2:0})",
    },
    seq: {
      name: "sequence of 0..n",
      body: "[...Array(${1:length}).keys()]",
    },
  },
};
