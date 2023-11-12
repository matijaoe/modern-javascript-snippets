import { XSnippetDefinition } from '../../models/app.ts'

export const json: XSnippetDefinition = {
  meta: {
    title: 'JSON',
  },
  snippets: {
    jp: {
      name: 'JSON parse',
      body: 'JSON.parse(${1:json})',
    },
    js: {
      name: 'JSON stringify',
      body: 'JSON.stringify(${1:value})',
    },
    jsf: {
      name: 'JSON stringify (formatted)',
      body: 'JSON.stringify(${1:value}, null, 2)',
    },
    jss: {
      name: 'JSON.stringify if not string',
      body: 'typeof $1 === \'string\' ? $1 : JSON.stringify($1)',
    },
  },
}
