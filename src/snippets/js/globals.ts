import { XSnippetDefinition } from '../../models/app.ts'

export const globals: XSnippetDefinition = {
  meta: {
    title: 'Globals',
  },
  snippets: {
    wlo: {
      name: 'window.location',
      body: 'window.location',
    },
    wlh: {
      name: 'window.location.href',
      body: 'window.location.href',
    },
  },
}
