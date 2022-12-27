export const json = {
  jp: {
    name: "JSON parse",
    body: "JSON.parse(${1:json})",
  },
  js: {
    name: "JSON stringify",
    body: "JSON.stringify(${1:value})",
  },
  jsp: {
    name: "JSON stringify (pretty)",
    body: "JSON.stringify(${1:value}, null, 2)",
  },
  jss: {
    name: "JSON.stringify if not string",
    body: "typeof ${1:value} === 'string' ? value : JSON.stringify($1)",
  },
};
