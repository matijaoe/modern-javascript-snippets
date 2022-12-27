// TODO: categorrize
export const operatorsExpressionsLiterals = {
  or: {
    name: "OR (||)",
    body: "|| $0",
  },
  and: {
    name: "AND (&&)",
    body: "&& $0",
  },
  nc: {
    name: "Nullish coalescing (??)",
    body: "?? $0",
  },
  eq: {
    name: "strict equality (===)",
    body: "=== $0",
  },
  ore: {
    name: "logical OR expression",
    body: "${1:value} || ${0:value}",
  },
  ande: {
    name: "logical AND expression",
    body: "${1:value} && ${0:value}",
  },
  nce: {
    name: "Nullish coalescing expression (??)",
    body: "${1:item} ?? ${0:default}",
  },
  eqe: {
    name: "strict equality expression",
    body: "${1:value} === ${2:value}",
  },
  ora: {
    name: "Logical OR assignment (||=)",
    body: "${1:name} ||= ${0:default}",
  },
  nca: {
    name: "Nullish coalescing assignment (??=)",
    body: "${1:name} ??= ${0:default}",
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
    body: "`$1${$2}$0`",
  },
};
