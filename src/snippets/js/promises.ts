export const promises = {
  fet: {
    name: "native fetch",
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
    name: "promise resolve",
    body: "Promise.resolve($1)$0",
  },
  prj: {
    name: "promise reject",
    body: "Promise.reject($1)$0",
  },
  then: {
    name: "promise.then",
    body: "$1.then((${2:value}) => $0",
  },
  catch: {
    name: "promise.catch",
    body: "$1.catch((${2:err}) => $0",
  },
  thenc: {
    name: "promise.then.catch",
    body: "$1.then((${2:value}) => $3.catch((${4:err}) => $5",
  },
  pra: {
    name: "promise.all",
    body: "Promise.all($1)$0",
  },
  prsa: {
    name: "promise.allSettled",
    body: "Promise.allSettled($1)$0",
  },
  pran: {
    name: "promise.any",
    body: "Promise.any($1)$0",
  },
};
