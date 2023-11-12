import { XSnippetDefinition } from '../../models/app.ts'

export const misc: XSnippetDefinition = {
  meta: {
    title: 'Misc',
  },
  snippets: {
    us: {
      name: '\'use strict\' statement',
      body: '\'use strict\'',
    },
    prs: {
      name: 'process.server',
      body: 'process.server',
    },
    prc: {
      name: 'process.client',
      body: 'process.client',
    },
    env: {
      name: 'env variable',
      body: 'process.env.$0',
    },
    envv: {
      name: 'env variable (meta)',
      body: 'import.meta.env.$0',
    },
  },
}
