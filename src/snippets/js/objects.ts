import { XSnippetDefinition } from '../../models/app.ts'

// TODO: find a better category for this
export const objects: XSnippetDefinition = {
  meta: {
    title: 'Objects',
  },
  snippets: {
    oe: {
      name: 'Object.entries',
      body: 'Object.entries($0)',
    },
    ofe: {
      name: 'Object.fromEntries',
      body: 'Object.fromEntries($0)',
    },
    ok: {
      name: 'Object.keys',
      body: 'Object.keys($0)',
    },
    ov: {
      name: 'Object.values',
      body: 'Object.values($0)',
    },
  },
}
