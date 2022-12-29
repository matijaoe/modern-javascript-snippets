// TODO: categorize
export const operatorsExpressionsLiterals = {
  meta: {
    title: "Literals, operators, expressions",
    description: "Grouping them all together for now",
  },
  snippets: {
    al: {
      name: "array literal",
      body: "[$0]",
    },
    ol: {
      name: "object literal",
      body: "{ $1: $2,$0 }",
    },
    ole: {
      name: "object literal expanded",
      body: "{\n\t$1: $2,$0\n}",
    },
    tl: {
      name: "template literal",
      body: "`$0`",
    },
    tle: {
      name: "template literal expression",
      body: "`$1${$2}$3`",
    },
    tlo: {
      name: "template literal operation",
      body: "${$1}$0",
    },
    am: {
      name: "array merge",
      body: "[...$1]",
    },
    om: {
      name: "object merge",
      body: "{ ...$1 }",
    },
    or: {
      name: "OR (||)",
      body: "|| $0",
    },
    and: {
      name: "AND (&&)",
      body: "&& $0",
    },
    nc: {
      name: "nullish coalescing (??)",
      body: "?? $0",
    },
    eq: {
      name: "strict equality (===)",
      body: "=== $0",
    },
    ore: {
      name: "logical OR expression",
      body: "$1 || $0",
    },
    ande: {
      name: "logical AND expression",
      body: "$1 && $0",
    },
    nce: {
      name: "nullish coalescing expression (??)",
      body: "$1 ?? $0",
    },
    eqe: {
      name: "strict equality expression",
      body: "$1 === $0",
    },
    ora: {
      name: "logical OR assignment (||=)",
      body: "$1 ||= $0;",
    },
    nca: {
      name: "nullish coalescing assignment (??=)",
      body: "$1 ??= $0;",
    },
    inc: {
      name: "addition assignment",
      body: "$1 += ${0:1}",
    },
    sub: {
      name: "subtraction assignment",
      body: "$1 -= ${0:1}",
    },
    mul: {
      name: "multiplication assignment",
      body: "$1 *= ${0:1}",
    },
    div: {
      name: "division assignment",
      body: "$1 /= ${0:1}",
    },
  },
};
