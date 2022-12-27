import { XSnippetDefinition } from "../../models/app.ts";

export const types: XSnippetDefinition = {
  meta: {
    title: "Types",
  },
  snippets: {
    aia: {
      name: "is array",
      body: "Array.isArray($0)",
    },
    tof: {
      name: "typeof",
      body:
        "typeof ${1:value} === '${2|bigint,boolean,function,number,object,symbol,undefined|}'",
    },
    iof: {
      name: "instanceof",
      body: "${1:object} instanceof ${0:Class}",
    },
    isnil: {
      name: "is nil",
      body: "${1:value} == null",
    },
    nnil: {
      name: "is not nil",
      body: "${1:value} != null",
    },
    isnan: {
      name: "is NaN",
      body: "isNan($0)",
    },
    nnan: {
      name: "is not NaN",
      body: "!isNan($0)",
    },
  },
};
