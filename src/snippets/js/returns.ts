import { XSnippetDefinition } from '../../models/app.ts'

export const returns: XSnippetDefinition = {
  meta: {
    title: 'Returns and exceptions',
  },
  snippets: {
    ret: {
      name: 'return',
      body: 'return $0',
    },
    reo: {
      name: 'return object',
      body: 'return {\n\t$0\n}',
    },
    rei: {
      name: 'return object inline',
      body: 'return ({$0})',
    },
    terr: {
      name: 'throw error',
      body: 'throw new ${1|Error,TypeError,RangeError|}($0)',
    },
  },
}
