export const declarations = {
  cat: {
    name: "const assignment (typed)",
    body: "const ${1:name}: ${2:string} = ${3:value}",
  },
  lat: {
    name: "let assignment (typed)",
    body: "let ${1:name}: ${2:string} = ${3:value}",
  },
  caat: {
    name: "const array (typed)",
    body: "const ${1:items}: ${2:string}[] = [$0]",
  },
  caot: {
    name: "const object (typed)",
    body: "const ${1:name}: ${2:object} = { $0 }",
  },
};
