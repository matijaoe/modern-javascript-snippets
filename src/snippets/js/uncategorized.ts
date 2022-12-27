import { XSnippetDefinition } from "../../models/app.ts";

export const uncategorized: XSnippetDefinition = {
  meta: {
    title: "Uncategorized",
    description: "Will be sorted into appropriate categories in the future.",
  },
  snippets: {
    uniq: {
      name: "array of unique values",
      body: "[...new Set(${0:array})]",
    },
    pi: {
      name: "parse int",
      body: "parseInt(${1:value}, ${2|10,2,8,16|})",
    },
    pf: {
      name: "parse float",
      body: "parseFloat(${1:value})",
    },
    am: {
      name: "array merge",
      body: "[...${1:arr}$2]",
    },
    om: {
      name: "object merge",
      body: "{ ...${1:object}$2 }",
    },
    aat: {
      name: "array.at",
      body: "${1:items}.at(${2:0})",
    },
    seq: {
      name: "sequence of 0..n",
      body: "[...Array(${1:length}).keys()]",
    },
  },
};
