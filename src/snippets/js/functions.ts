import { XSnippetDefinition } from "../../models/app.ts";

export const functions: XSnippetDefinition = {
  meta: {
    title: "Functions",
  },
  snippets: {
    fn: {
      name: "function",
      body: "function $1($2) {\n\t$0\n}",
    },
    fna: {
      name: "async function",
      body: "async function $1($2) {\n\t$0\n}",
    },
    nfn: {
      name: "named arrow function",
      body: "const ${1} = ($2) => {$0}",
    },
    nfna: {
      name: "async named arrow function",
      body: "const $1 = async ($2) => {$0}",
    },
    af: {
      name: "arrow function",
      body: "($1) => $0",
    },
    afa: {
      name: "async arrow function",
      body: "async ($1) => $0",
    },
    afb: {
      name: "arrow function with body",
      body: "($1) => {\n\t$0\n}",
    },
    afba: {
      name: "async arrow function with body",
      body: "async ($1) => {\n\t$0\n}",
    },
    iife: {
      name: "immediately-invoked function expression",
      body: "(($1) => {\n\t$0\n})($2)",
    },
  },
};
