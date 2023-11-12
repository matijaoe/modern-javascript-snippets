export const dates = {
  meta: {
    title: 'Dates',
  },
  snippets: {
    nd: {
      name: 'new Date()',
      body: 'new Date($1)',
    },
    nds: {
      name: 'new Date() with date string',
      body:
        'new Date(\'${1:2023}-${2:|01,02,03,04,05,06,07,08,09,10,11,12|}-${3:31}\')',
    },
    now: {
      name: 'Date.now()',
      body: 'Date.now()',
    },
    tls: {
      name: 'Date.toLocaleString()',
      body:
        '$1.toLocaleString(\'${2|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP,hr-HR|}\'$3)',
    },
  },
}
