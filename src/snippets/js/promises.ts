import { XSnippetDefinition } from "../../models/app.ts";

export const promises: XSnippetDefinition = {
  meta: {
    title: "Promises",
  },
  snippets: {
    fet: {
      name: "fetch",
      body: "fetch('$1').then(res => res.json())",
    },
    feta: {
      name: "fetch assignment",
      body:
        "const ${2|data,{ data }|} = await fetch('$1').then(res => res.json())",
    },
    pr: {
      name: "promise",
      body: "new Promise((resolve, reject) => {\n\t$0\n})",
    },
    prs: {
      name: "Promise.resolve",
      body: "Promise.resolve($1)",
    },
    prj: {
      name: "Promise.reject",
      body: "Promise.reject($1)",
    },
    then: {
      name: "promise .then",
      body: "$1.then((${2:value}) => $0",
    },
    catch: {
      name: "promise .catch",
      body: "$1.catch((${2:err}) => $0",
    },
    thenc: {
      name: "promise .then.catch",
      body: "$1.then((${2:value}) => $3.catch((${4:err}) => $5",
    },
    pra: {
      name: "Promise.all",
      body: "Promise.all($1)",
    },
    prsa: {
      name: "Promise.allSettled",
      body: "Promise.allSettled($1)",
    },
    pran: {
      name: "Promise.any",
      body: "Promise.any($1)",
    },
  },
};
