import { XSnippetDefinition } from '../../models/app.ts'

export const types: XSnippetDefinition = {
  meta: {
    title: 'Types',
  },
  snippets: {
    aia: {
      name: 'is array',
      body: 'Array.isArray($0)',
    },
    tof: {
      name: 'typeof',
      body: 'typeof $1',
    },
    tofc: {
      name: 'typeof check',
      body:
        'typeof $1 === \'${2|undefined,string,number,object,function,boolean,symbol,bigint|}\'',
    },
    iof: {
      name: 'instanceof',
      body: '$1 instanceof ${0:Class}',
    },
    isnil: {
      name: 'is nil',
      body: '$1 == null',
    },
    nnil: {
      name: 'is not nil',
      body: '$1 != null',
    },
    isnan: {
      name: 'is NaN',
      body: 'isNaN($0)',
    },
    nnan: {
      name: 'is not NaN',
      body: '!isNaN($0)',
    },
  },
}
