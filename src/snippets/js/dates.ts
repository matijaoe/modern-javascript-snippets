export const dates = {
  meta: {
    title: 'Dates',
  },
  snippets: {
    nd: {
      name: 'new Date()',
      body: 'new Date($1)',
    },
    now: {
      name: 'Date.now()',
      body: 'Date.now()',
    },
    tls: {
      name: 'Date.toLocaleString()',
      body:
        '$1.toLocaleString(\'${2|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP|}\'$3)',
    },
  },
}
