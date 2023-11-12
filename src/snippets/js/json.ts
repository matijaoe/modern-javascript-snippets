import { XSnippetDefinition } from '../../models/app.ts'

export const json: XSnippetDefinition = {
  meta: {
    title: 'JSON',
  },
  snippets: {
    jsp: {
      name: 'JSON parse',
      body: 'JSON.parse(${1:json})',
    },
    jss: {
      name: 'JSON stringify',
      body: 'JSON.stringify(${1:value})',
    },
    jssf: {
      name: 'JSON stringify (formatted)',
      body: 'JSON.stringify(${1:value}, null, 2)',
    },
  },
}
