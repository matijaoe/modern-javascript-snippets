export const classes = {
  cs: {
    name: "class",
    body: "class $1 {\n\t$0\n}",
  },
  cse: {
    name: "class extends",
    body: "class $1 extends ${2:Base} {\n\t$0\n}",
  },
  csc: {
    name: "class with constructor",
    body: [
      "class $1 {",
      "\tconstructor($2) {",
      "\t\t$0",
      "\t}",
      "}",
    ],
  },
  csec: {
    name: "class extends with constructor",
    body: [
      "class $1 extends ${2:Base} {",
      "\tconstructor($3) {",
      "\t\t$0",
      "\t}",
      "}",
    ],
  },
  ctor: {
    name: "class constructor",
    body: "constructor($1) {$0}",
  },
  get: {
    name: "getter",
    body: "get ${1:property}() {\n\t$0\n}",
  },
  set: {
    name: "setter",
    body: "set ${1:property}(${2:value}) {\n\t$0\n}",
  },
  gs: {
    name: "getter and setter",
    body:
      "get ${1:property}() {\n\t$0\n}\nset ${1:property}(${2:value}) {\n\t\n}",
  },
  met: {
    name: "method",
    body: "${1:name}($2) {\n\t$0\n}",
  },
  meta: {
    name: "async method",
    body: "async ${1:name}($2) {\n\t$0\n}",
  },
};
