import { XSnippetDefinition } from '../../models/app.ts'

export const types: XSnippetDefinition = {
  meta: {
    title: 'Types',
  },
  snippets: {
    int: {
      name: 'interface',
      body: 'interface ${1:Model} {\n\t$0\n}',
    },
    inte: {
      name: 'interface extends',
      body: 'interface ${1:Model} extends ${2:Base} {\n\t$0\n}',
    },
    tp: {
      name: 'type',
      body: 'type ${1:Model} = $0',
    },
    tpu: {
      name: 'type union',
      body: 'type ${1:Model} = $2 | $3',
    },
    tpi: {
      name: 'type intersection',
      body: 'type ${1:Model} = $2 & $3',
    },
  },
}
