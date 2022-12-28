import { XSnippetDefinition } from "../../models/app.ts";

export const node: XSnippetDefinition = {
  meta: {
    title: "Node",
  },
  snippets: {
    re: {
      name: "require",
      body: "require('${1:module}')",
    },
    req: {
      name: "require assignment",
      body: "const ${1} = require('${1:module}');",
    },
  },
};
