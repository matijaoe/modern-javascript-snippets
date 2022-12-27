export const modules = {
  im: {
    name: "import",
    body: "import { $2 } from '$1'$0",
  },
  imf: {
    name: "import file",
    body: "import '$1'",
  },
  imp: {
    name: "import dynamic",
    body: "import($0)",
  },
  imd: {
    name: "import default",
    body: "import $2 from '$1'$3;$0",
  },
  ima: {
    name: "import as",
    body: "import ${2:*} as {3:name} from '$1'",
  },
  ime: {
    name: "import meta env",
    body: "import.meta.env.$0",
  },
  ex: {
    name: "export",
    body: "export $0",
  },
  exd: {
    name: "export default",
    body: "export default $0",
  },
  exf: {
    name: "export from",
    body: "export { $2 } from '$1'",
  },
  exa: {
    name: "export all from",
    body: "export * from '$1'",
  },
  exo: {
    name: "export object",
    body: "export const ${1:name} = { $0 }",
  },
};
