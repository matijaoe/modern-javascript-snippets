export const arrayMethods = {
  fe: {
    name: "Array.forEach()",
    body: "$1.forEach((${2:item}) => {\n\t$0\n})",
  },
  map: {
    name: "Array.map()",
    body: "$1.map((${2:item}) => ${3})$0",
  },
  reduce: {
    name: "Array.reduce()",
    body: "$1.reduce((${2:acc}, ${3:curr}) => {\n\t$0\n}, ${4:initial})",
  },
  "reduce-right": {
    name: "Array.reduceRight()",
    body: "$1.reduceRight((${2:acc}, ${3:curr}) => {\n\t$0\n}, ${4:initial})",
  },
  filter: {
    name: "Array.filter()",
    body: "$1.filter((${2:item}) => ${3})$0",
  },
  find: {
    name: "Array.find()",
    body: "$1.find((${2:item}) => ${3})$0",
  },
  every: {
    name: "Array.every()",
    body: "$1.every((${2:item}) => ${3})$0",
  },
  some: {
    name: "Array.some()",
    body: "$1.some((${2:item}) => ${3})$0",
  },
  reverse: {
    name: "Array.reverse()",
    body: "$1.reverse()$0",
  },
  "map-string": {
    name: "Array.map() as string",
    body: "$1.map(String)$0",
  },
  "map-number": {
    name: "Array.map() as number",
    body: "$1.map(Number)$0",
  },
  "filter-true": {
    name: "Array.filter() for truthy values",
    body: "$1.filter(Boolean)$0",
  },
};
