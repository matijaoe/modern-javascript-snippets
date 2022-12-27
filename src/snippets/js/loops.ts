export const loops = {
  fl: {
    name: "for loop",
    body:
      "for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length; ${1:i} < ${2:len}; ${1:i}++) {\n\t$0\n}",
  },
  rfl: {
    name: "reverse for loop",
    body:
      "for (let ${1:i} = ${2:iterable}.length - 1; ${1:i} >= 0; ${1:i}--) {\n\t$0\n}",
  },
  flr: {
    name: "for loop range",
    body: "for (let ${1:i} = 0; ${1:i} < ${2:5}; ${1:i}++) {\n\t$0\n}",
  },
  fin: {
    name: "for in loop",
    body: "for (let ${1:key} in ${2:array}) {\n\t$0\n}",
  },
  finop: {
    name: "for in loop hasOwnProperty ",
    body:
      "for (let ${1:key} in ${2:array}) {\n\tif (${2:array}.hasOwnProperty(${1:key})) {\n\t\t$0\n\t}\n}",
  },
  fof: {
    name: "for of loop",
    body: "for (let ${1:item} of ${2:items}) {\n\t$0\n}",
  },
  fofa: {
    name: "for of loop await",
    body: "for await (let ${1:item} of ${2:items}) {\n\t$0\n}",
  },
  wl: {
    name: "while loop",
    body: "while (${1:true}) {\n\t$0\n}",
  },
};
