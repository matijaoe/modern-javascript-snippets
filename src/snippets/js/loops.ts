import { XSnippetDefinition } from '../../models/app.ts'

export const loops: XSnippetDefinition = {
  meta: {
    title: 'Loops',
  },
  snippets: {
    flr: {
      name: 'for loop (range)',
      body: 'for (let ${1:i} = 0; ${1:i} < ${2:5}; ${1:i}++) {\n\t$0\n}',
    },
    rfl: {
      name: 'reverse for loop',
      body:
        'for (let ${1:i} = ${2:iter}.length - 1; ${1:i} >= 0; ${1:i}--) {\n\t$0\n}',
    },
    fin: {
      name: 'for...in loop',
      body: 'for (let ${1:key} in ${2:array}) {\n\t$0\n}',
    },
    fof: {
      name: 'for...of loop',
      body: 'for (let ${1:item} of ${2:items}) {\n\t$0\n}',
    },
    fofa: {
      name: 'for await...of loop',
      body: 'for await (let ${1:item} of ${2:items}) {\n\t$0\n}',
    },
    wl: {
      name: 'while loop',
      body: 'while (${1:true}) {\n\t$0\n}',
    },
    dwl: {
      name: 'do while loop',
      body: 'do {\n\t$0\n} while ($1)',
    },
  },
}
