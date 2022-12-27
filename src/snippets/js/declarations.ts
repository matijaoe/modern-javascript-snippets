export const declarations = {
  c: {
    name: "const",
    body: "const $0",
  },
  l: {
    name: "let",
    body: "let $0",
  },
  ca: {
    name: "const assignment",
    body: "const $1 = $0",
  },
  la: {
    name: "let assignment",
    body: "let $1 = $0",
  },
  cas: {
    name: "const string",
    body: "const $1 = '$0'",
  },
  car: {
    name: "const array",
    body: "const $1 = [$0]",
  },
  cao: {
    name: "const object",
    body: "const $1 = { $0 }",
  },
  dob: {
    name: "destructure object",
    body: "const { $0 } = ${1:object}",
  },
  dar: {
    name: "destructure array",
    body: "const [$0] = ${1:array}",
  },
};
