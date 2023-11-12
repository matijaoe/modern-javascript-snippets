import { XSnippetDefinition } from '../../models/app.ts'

export const assignments: XSnippetDefinition = {
  meta: {
    title: 'Assignments',
  },
  snippets: {
    ca: {
      name: 'const assignment',
      body: 'const ${1:name} = $2',
    },
    la: {
      name: 'let assignment',
      body: 'let ${1:name} = $2',
    },
    cas: {
      name: 'const string assignment',
      body: 'const ${1:name} = \'$2\'',
    },
    las: {
      name: 'let string assignment',
      body: 'let ${1:name} = \'$2\'',
    },
    caa: {
      name: 'const array assignment',
      body: 'const ${1:arr} = [$0]',
    },
    cao: {
      name: 'const object assignment',
      body: 'const ${1:obj} = { $0 }',
    },
    dob: {
      name: 'object destructuring',
      body: 'const { $2 } = ${1:obj}$0',
    },
    dar: {
      name: 'array destructuring',
      body: 'const [$2] = ${1:arr}$0',
    },
  },
}
