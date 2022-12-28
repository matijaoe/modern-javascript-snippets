import { XSnippetDefinition } from "../../models/app.ts";

export const assignments: XSnippetDefinition = {
  meta: {
    title: "Assignments",
  },
  snippets: {
    c: {
      name: "const",
      body: "const $0",
    },
    l: {
      name: "let",
      body: "let $0",
    },
    ca: {
      name: "const assignment",
      body: "const $1 = $2;",
    },
    la: {
      name: "let assignment",
      body: "let $1 = $2;",
    },
    cas: {
      name: "const string assignment",
      body: "const $1 = '$2';",
    },
    car: {
      name: "const array assignment",
      body: "const $1 = [$0]",
    },
    cao: {
      name: "const object assignment",
      body: "const $1 = { $0 }",
    },
    dob: {
      name: "object destructuring",
      body: "const { $0 } = ${1:object}",
    },
    dar: {
      name: "array destructuring",
      body: "const [$0] = ${1:array}",
    },
  },
};
