import { XSnippetDefinition } from '../../models/app.ts'

export const utilities: XSnippetDefinition = {
  meta: {
    title: 'Utilities',
  },
  snippets: {
    pi: {
      name: 'parse int',
      body: 'parseInt($1, ${2|10,2,8,16|})',
    },
    pf: {
      name: 'parse float',
      body: 'parseFloat($1)',
    },
    uniq: {
      name: 'array of unique values',
      body: '[...new Set($0)]',
    },
    seq: {
      name: 'sequence of 0..n',
      body: '[...Array(${1:length}).keys()]',
    },
    cp: {
      name: 'copy to clipboard',
      body: 'navigator.clipboard.writeText($1)',
    },
    nurl: {
      name: 'new URL',
      body: 'new URL($1)',
    },
    sp: {
      name: 'url search params',
      body: 'new URLSearchParams($1)',
    },
    spa: {
      name: 'url search params assignment',
      body: 'const ${1:params} = new URLSearchParams($2)',
    },
    spg: {
      name: 'get search param',
      body: '${1:params}.get($2)',
    },
    sps: {
      name: 'set search param',
      body: '${1:params}.set($2, $3)',
    },
  },
}
