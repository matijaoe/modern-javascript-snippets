import { XSnippetDefinition } from '../../models/app.ts'

export const arrayMethods: XSnippetDefinition = {
  meta: {
    title: 'Array methods',
  },
  snippets: {
    aat: {
      name: 'array.at',
      body: '$1.at(${2:0})',
    },
    fe: {
      name: 'Array.forEach()',
      body: '$1.forEach((${2:item}) => {\n\t$0\n})',
    },
    map: {
      name: 'Array.map()',
      body: '$1.map((${2:item}) => ${3})',
    },
    fmap: {
      name: 'Array.flatMap()',
      body: '$1.flatMap((${2:item}) => ${3})',
    },
    reduce: {
      name: 'Array.reduce()',
      body: '$1.reduce((${2:acc}, ${3:curr}) => {\n\t$0\n}, ${4:initial})',
    },
    reduceRight: {
      name: 'Array.reduceRight()',
      body: '$1.reduceRight((${2:acc}, ${3:curr}) => {\n\t$0\n}, ${4:initial})',
    },
    filter: {
      name: 'Array.filter()',
      body: '$1.filter((${2:item}) => ${3})',
    },
    find: {
      name: 'Array.find()',
      body: '$1.find((${2:item}) => ${3})',
    },
    findl: {
      name: 'Array.findLast()',
      body: '$1.findLast((${2:item}) => ${3})',
    },
    findi: {
      name: 'Array.findIndex()',
      body: '$1.findIndex((${2:item}) => ${3})',
    },
    findli: {
      name: 'Array.findLastIndex()',
      body: '$1.findLastIndex((${2:item}) => ${3})',
    },
    every: {
      name: 'Array.every()',
      body: '$1.every((${2:item}) => ${3})',
    },
    some: {
      name: 'Array.some()',
      body: '$1.some((${2:item}) => ${3})',
    },
    reverse: {
      name: 'Array.reverse()',
      body: '$1.reverse()',
    },
    sort: {
      name: 'Array.sort(',
      body: '$1.sort((${2:a}, ${3:b}) => $4)',
    },
    group: {
      name: 'Array.group()',
      body: '$1.group((${2:item}) => $3)',
    },
    groupMap: {
      name: 'Array.groupToMap()',
      body: '$1.groupToMap((${2:item}) => $3)',
    },
    mapStr: {
      name: 'Array.map() to string',
      body: '$1.map(String)',
    },
    mapNum: {
      name: 'Array.map() to number',
      body: '$1.map(Number)',
    },
    mapBool: {
      name: 'Array.map() to boolean',
      body: '$1.map(Boolean)',
    },
    filterTruthy: {
      name: 'Array.filter() truthy',
      body: '$1.filter(Boolean)',
    },
    arfr: {
      name: 'Array.from',
      body: 'Array.from($1)',
    },
  },
}
