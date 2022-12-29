import { XSnippetDefinition } from "../../models/app.ts";

export const arrayMethods: XSnippetDefinition = {
  meta: {
    title: "Array methods",
  },
  snippets: {
    aat: {
      name: "array.at",
      body: "$1.at(${2:0})",
    },
    fe: {
      name: "Array.forEach()",
      body: "$1.forEach((${2:item}) => {\n\t$0\n})",
    },
    map: {
      name: "Array.map()",
      body: "$1.map((${2:item}) => ${3})",
    },
    reduce: {
      name: "Array.reduce()",
      body: "$1.reduce((${2:acc}, ${3:curr}) => {\n\t$0\n}, ${4:initial})",
    },
    reduceRight: {
      name: "Array.reduceRight()",
      body: "$1.reduceRight((${2:acc}, ${3:curr}) => {\n\t$0\n}, ${4:initial})",
    },
    filter: {
      name: "Array.filter()",
      body: "$1.filter((${2:item}) => ${3})",
    },
    find: {
      name: "Array.find()",
      body: "$1.find((${2:item}) => ${3})",
    },
    every: {
      name: "Array.every()",
      body: "$1.every((${2:item}) => ${3})",
    },
    some: {
      name: "Array.some()",
      body: "$1.some((${2:item}) => ${3})",
    },
    reverse: {
      name: "Array.reverse()",
      body: "$1.reverse()",
    },
    mapStr: {
      name: "Array.map() as string",
      body: "$1.map(String)",
    },
    mapNum: {
      name: "Array.map() as number",
      body: "$1.map(Number)",
    },
    filterTrue: {
      name: "Array.filter() truthy",
      body: "$1.filter(Boolean)",
    },
  },
};
