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
      body: 'navigator.clipboard.writeText($1);',
    },
    // TODO: wip
    nur: {
      name: 'new URL',
      body: 'new URL($1)',
    },
    usp: {
      name: 'url search params',
      body: 'new URL($1).searchParams',
    },
    spg: {
      name: 'get search param',
      body: '$1.searchParams.get($2)',
    },
    sps: {
      name: 'set search param',
      body: '$1.searchParams.set($2, $3)',
    },
  },
}
