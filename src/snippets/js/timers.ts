import { XSnippetDefinition } from '../../models/app.ts'

export const timers: XSnippetDefinition = {
  meta: {
    title: 'Timers',
  },
  snippets: {
    si: {
      name: 'set interval',
      body: 'setInterval(() => {\n\t$0\n}, ${1:1000})',
    },
    st: {
      name: 'set timeout',
      body: 'setTimeout(() => {\n\t$0\n}, ${1:1000})',
    },
    sim: {
      name: 'set immediate',
      body: 'setImmediate(() => {\n\t$0\n})',
    },
    prnt: {
      name: 'process next tick',
      body: 'process.nextTick(() => {\n\t$0\n})',
    },
  },
}
