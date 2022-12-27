export const console = {
  meta: {
    title: "Console",
  },
  snippets: {
    cl: {
      name: "console.log",
      body: "console.log($0)",
    },
    ci: {
      name: "console.info",
      body: "console.info($1)",
    },
    cdi: {
      name: "console.dir",
      body: "console.dir($1)",
    },
    ce: {
      name: "console.error",
      body: "console.error($1)",
    },
    cw: {
      name: "console.warn",
      body: "console.warn($1)",
    },
    ct: {
      name: "console.time",
      body: [
        "console.time('$1')",
        "$0",
        "console.timeEnd('$1')",
      ],
    },
    ctb: {
      name: "console.table",
      body: "console.table($1)",
    },
    clr: {
      name: "console.clear",
      body: "console.clear()",
    },
    clm: {
      name: "console.log message",
      body: "console.log('$0')",
    },
    clo: {
      name: "console.log object",
      body: "console.log({ $0 })",
    },
    clc: {
      name: "console.log clipboard",
      body: "console.log({ $CLIPBOARD })",
    },
    cll: {
      name: "console.log (labeled)",
      body: "console.log('$1 ->', $1$2)",
    },
    cel: {
      name: "console.error (labeled)",
      body: "console.error('$1 ->', $1$2)",
    },
    cwl: {
      name: "console.warn (labeled)",
      body: "console.warn('$1 ->', ${2:$1})",
    },
  },
};
