export const operatorsExpressionsLiterals = {
  meta: {
    title: 'Literals, operators, expressions',
    description: 'Grouping them all together for now',
  },
  snippets: {
    arr: {
      name: 'array literal',
      body: '[$0]',
    },
    ob: {
      name: 'object literal',
      body: '{ }',
    },
    tl: {
      name: 'template literal',
      body: '`$0`',
    },
    tle: {
      name: 'template literal operation',
      body: '${${1:name}}$0',
    },
    ns: {
      name: 'new Set',
      body: 'new Set($1)',
    },
    nm: {
      name: 'new Map',
      body: 'new Map($1)',
    },
    am: {
      name: 'array merge',
      body: '[...$1]',
    },
    om: {
      name: 'object merge',
      body: '{ ...$1 }',
    },
    or: {
      name: 'OR (||)',
      body: '|| $0',
    },
    and: {
      name: 'AND (&&)',
      body: '&& $0',
    },
    lt: {
      name: 'less than (<)',
      body: '< $0',
    },
    lte: {
      name: 'less than or equal to (<=)',
      body: '<= $0',
    },
    gt: {
      name: 'greater than (>)',
      body: '> $0',
    },
    gte: {
      name: 'greater than or equal to (>=)',
      body: '>= $0',
    },
    nc: {
      name: 'nullish coalescing (??)',
      body: '?? $0',
    },
    neq: {
      name: 'strict non-equality (===)',
      body: '!== $0',
    },
    eq: {
      name: 'strict equality (===)',
      body: '=== $0',
    },
    ora: {
      name: 'logical OR assignment (||=)',
      body: '||= $0',
    },
    nca: {
      name: 'nullish coalescing assignment (??=)',
      body: '??= $0',
    },
    plus: {
      name: 'addition',
      body: '+ $0',
    },
    minus: {
      name: 'subtraction',
      body: '- $0',
    },
    mul: {
      name: 'multiplication',
      body: '* $0',
    },
    div: {
      name: 'division',
      body: '/ $0',
    },
    mod: {
      name: 'modulo',
      body: '% $0',
    },
    inc: {
      name: 'addition assignment',
      body: '+= ${0:1}',
    },
    sub: {
      name: 'subtraction assignment',
      body: '-= ${0:1}',
    },
    mula: {
      name: 'multiplication assignment',
      body: '*= ${0:1}',
    },
    diva: {
      name: 'division assignment',
      body: '/= ${0:1}',
    },
    col: {
      name: 'colon',
      body: ': ',
    },
  },
}
