// TODO: categorize
export const operatorsExpressionsLiterals = {
  meta: {
    title: "Operators, Expressions, Literals",
    description: "Grouping them all together for now",
  },
  snippets: {
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
      body: "$1 ||= $0",
    },
    nca: {
      name: "nullish coalescing assignment (??=)",
      body: "$1 ??= $0",
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
    ol: {
      name: "object literal",
      body: "{ $1: $0 }",
    },
    al: {
      name: "array literal",
      body: "[$0]",
    },
    tl: {
      name: "template literal",
      body: "`$0`",
    },
    tlo: {
      name: "template literal operation",
      body: "${$1}$0",
    },
    tle: {
      name: "template literal expression",
      body: "`$1${$2}$3`",
    },
  },
};
