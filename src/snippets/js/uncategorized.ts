import { XSnippetDefinition } from "../../models/app.ts";

export const uncategorized: XSnippetDefinition = {
  meta: {
    title: "Uncategorized",
    description: "Will be sorted into appropriate categories in the future.",
  },
  snippets: {
    am: {
      name: "array merge",
      body: "[...$1]",
    },
    om: {
      name: "object merge",
      body: "{ ...$1 }",
    },
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
    seq: {
      name: "sequence of 0..n",
      body: "[...Array(${1:length}).keys()]",
    },
    te: {
      name: "throw error",
      body: "throw new ${1|Error,TypeError,RangeError|}($0)",
    },
    cp: {
      name: "copy to clipboard",
      body: "navigator.clipboard.writeText($1);",
    },
    // TODO: work in progress
    nur: {
      name: "new URL",
      body: "new URL($1)",
    },
    usp: {
      name: "url search params",
      body: "new URL($1).searchParams",
    },
    spg: {
      name: "get search param",
      body: "$1.searchParams.get($2)",
    },
    sps: {
      name: "set search param",
      body: "$1.searchParams.set($2, $3)",
    },
  },
};
