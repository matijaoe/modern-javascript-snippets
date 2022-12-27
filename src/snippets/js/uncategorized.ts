export const uncategorized = {
  uniq: {
    name: "uniq",
    body: "[...new Set(${0:array})]",
  },
  pi: {
    name: "parse int",
    body: "parseInt(${1:value}, ${2|10,2,8,16|})",
  },
  pf: {
    name: "parse float",
    body: "parseFloat(${1:value})",
  },
  am: {
    name: "array me",
    body: "[...${1:arr}$2]$0",
  },
  om: {
    name: "object merge",
    body: "{ ...${1:object}$2 }$0",
  },
  aat: {
    name: "array at",
    body: "${1:items}.at(${2:0})",
  },
  seq: {
    name: "sequence of 0..n",
    body: "[...Array(${1:length}).keys()]$0",
  },
};
