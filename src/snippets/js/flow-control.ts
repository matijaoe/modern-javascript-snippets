import { XSnippetDefinition } from '../../models/app.ts'

export const flowControl: XSnippetDefinition = {
  meta: {
    title: 'Flow control',
  },
  snippets: {
    iff: {
      name: 'if statement',
      body: 'if ($1) {$2}',
    },
    ifel: {
      name: 'if/else statement',
      body: 'if ($1) {$2} else {$3}',
    },
    ifei: {
      name: 'if/else-if statement',
      body: 'if ($1) {$2} else if ($3) {$4}',
    },
    el: {
      name: 'else statement',
      body: 'else {\n\t$0\n}',
    },
    ei: {
      name: 'else if statement',
      body: 'else if ($1) {$2}',
    },
    ter: {
      name: 'ternary operator',
      body: '$1 ? $2 : $3',
    },
    tera: {
      name: 'ternary expression assignment',
      body: 'const $1 = $2 ? $3 : $4',
    },
    // TODO: better implementation
    sw: {
      name: 'switch',
      body: [
        'switch ($1) {\n\tcase $2 : $3\n\tdefault: $0\n}',
      ],
    },
    scase: {
      name: 'switch case',
      body: 'case $1 : $2',
    },
    tc: {
      name: 'try/catch',
      body: [
        'try {',
        '\t$1',
        '} catch (error) {',
        '\t$0',
        '}',
      ],
    },
    tcf: {
      name: 'try/catch/finally',
      body: [
        'try {',
        '\t$1',
        '} catch (error) {',
        '\t$2',
        '} finally {',
        '\t$3',
        '}',
      ],
    },
    tf: {
      name: 'try/finally',
      body: [
        'try {',
        '\t$1',
        '} finally {',
        '\t$2',
        '}',
      ],
    },
  },
}
