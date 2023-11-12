import { XSnippetDefinition } from '../../models/app.ts'

export const dom: XSnippetDefinition = {
  meta: {
    title: 'DOM',
  },
  snippets: {
    qst: {
      name: 'query selector (typed)',
      body:
        '${1:document}.querySelector<${2|HTMLElement,HTMLDivElement,HTMLInputElement,HTMLTextAreaElement,HTMLSelectElement|}>(\'$3\')',
    },
    qsat: {
      name: 'query selector all (typed)',
      body:
        '${1:document}.querySelectorAll<${2|HTMLElement,HTMLDivElement,HTMLInputElement,HTMLTextAreaElement,HTMLSelectElement|}>(\'$3\')',
    },
    qsaat: {
      name: 'query selector all as array (typed)',
      body:
        '[...${1:document}.querySelectorAll<${2|HTMLElement,HTMLDivElement,HTMLInputElement,HTMLTextAreaElement,HTMLSelectElement|}>(\'$3\')]',
    },
    gidt: {
      name: 'get element by id (typed)',
      body:
        '${1:document}.getElementById<${2|HTMLElement,HTMLDivElement,HTMLInputElement,HTMLTextAreaElement,HTMLSelectElement|}>(\'$3\')',
    },
  },
}
