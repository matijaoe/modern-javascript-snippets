import { XSnippetDefinition } from "../../models/app.ts";

export const node: XSnippetDefinition = {
  meta: {
    title: "Node",
  },
  snippets: {
    req: {
      name: "require",
      body: "require('${1:module}')",
    },
    rqr: {
      name: "require assignment",
      body: "const $1 = require('${1:module}');",
    },
  },
};
