export const flowControl = {
  if: {
    name: "if",
    body: "if (${1}) {\n\t${2}\n}$0",
  },
  ifel: {
    name: "if-else",
    body: "if (${1}) {\n\t${2}\n} else {\n\t${3}\n}",
  },
  ifei: {
    name: "if-else-if",
    body: "if (${1}) {\n\t${2}\n} else if (${3}) {\n\t${4}\n}",
  },
  el: {
    name: "else",
    body: "else {\n\t${3}\n}",
  },
  ei: {
    name: "else if",
    body: "else if (${1}) {\n\t${2}\n}",
  },
  ter: {
    name: "Ternary expression",
    body: "${1} ? ${2} : ${3}",
  },
  tera: {
    name: "Ternary expression assignment",
    body: "const ${1:name} = ${2} ? ${3} : ${4}",
  },
  switch: {
    name: "switch",
    body: [
      "switch ($1) {\n\tcase $2 : $3\n\tdefault: $0\n}",
    ],
  },
  case: {
    name: "case",
    body: [
      "case ${1:value}:",
      "\t$0",
      "\tbreak;",
    ],
  },
  tc: {
    name: "try-catch",
    body: [
      "try {",
      "\t$1",
      "} catch (error) {",
      "\t$0",
      "}",
    ],
  },
  tcf: {
    name: "try-catch-finally",
    body: [
      "try {",
      "\t$1",
      "} catch (error) {",
      "\t$2",
      "} finally {",
      "\t$3",
      "}",
    ],
  },
  tf: {
    name: "try-finally",
    body: [
      "try {",
      "\t$1",
      "} finally {",
      "\t$2",
      "}",
    ],
  },
};
