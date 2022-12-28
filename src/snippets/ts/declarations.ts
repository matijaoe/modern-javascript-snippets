import { XSnippetDefinition } from "../../models/app.ts";

export const declarations: XSnippetDefinition = {
  meta: {
    title: "Declarations",
  },
  snippets: {
    cat: {
      name: "const assignment (typed)",
      body: "const $1: ${2:string} = $3",
    },
    lat: {
      name: "let assignment (typed)",
      body: "let $1: ${2:string} = $3",
    },
    caat: {
      name: "array assignment (typed)",
      body: "const $1: ${2:string}[] = [$0]",
    },
    caot: {
      name: "object assignment (typed)",
      body: "const $1: ${2:object} = { $0 }",
    },
  },
};
