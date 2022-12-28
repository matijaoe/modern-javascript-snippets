import { XSnippetDefinition } from "../../models/app.ts";

export const modules: XSnippetDefinition = {
  meta: {
    title: "Modules",
  },
  snippets: {
    im: {
      name: "import from module",
      body: "import { $2 } from '${1:module}';",
    },
    imd: {
      name: "import default",
      body: "import $2 from '${1:module}';",
    },
    ima: {
      name: "import as",
      body: "import ${2:*} as ${3:name} from '${1:module}';",
    },
    imf: {
      name: "import file",
      body: "import '$1';",
    },
    // TODO: decide on snippet prefix
    imp: {
      name: "import dynamic",
      body: "import('$0')",
    },
    impa: {
      name: "await import dynamic",
      body: "await import('$0')",
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
      body: "export { $0 } from '${1:module}';",
    },
    exa: {
      name: "export all from",
      body: "export * from '${1:module}';",
    },
    exo: {
      name: "export object",
      body: "export const ${1:name} = { $0 }",
    },
    efn: {
      name: "export function",
      body: [
        "export function ${1:name}($2) {",
        "\t$0",
        "}",
      ],
    },
    edfn: {
      name: "export default function",
      body: "export default function ${1:name}($2) {\n\t$0\n}",
    },
    enfn: {
      name: "export named arrow function",
      body: "export const ${1:name} = ($2) => {$0}",
    },
  },
};
