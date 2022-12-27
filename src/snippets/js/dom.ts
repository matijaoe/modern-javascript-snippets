export const dom = {
  qs: {
    name: "query selector",
    body: "${1:document}.querySelector('$2')",
  },
  qsa: {
    name: "query selector all",
    body: "${1:document}.querySelectorAll('$2')",
  },
  qsaa: {
    name: "query selector all array",
    body: "[...${1:document}.querySelectorAll('$2')]",
  },
  ael: {
    name: "add event listener",
    body: "${1:document}.addEventListener('${2:click}', (e$3) => $0)",
  },
  qsae: {
    name: "query selector event listener",
    body:
      "${1:document}.querySelector('$2')?.addEventListener('${3:click}', (e$4) => $0)",
  },
  gid: {
    name: "get element by id",
    body: "${1:document}.getElementById('$2')",
  },
  on: {
    name: "event handler",
    body: "${1:emitter}.on('${2:event}', (${3:arguments}) => {\n\t$0\n})",
  },
};