# Modern JavaScript Snippets ⚡

> Short and memorable JavaScript & TypeScript snippets for the modern-day developer. 

<br>

    🚧 Work in progress

<br>

Currently at **180+** snippets

<br>

![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1C.svg?style=for-the-badge&logo=javascript&logoColor=%23323330)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Support
Only JavaScript and TypeScript will be supported. 
Specific frameworks will get their own extensions. No bloat.

Supported file extensions:
- `.js`
- `.ts`
- `.jsx`
- `.tsx`

## Setup
The following is not mandatory, but could provide a nicer experience.

Search for `editor.tabCompletion` in user settings, or edit the settings.json directly:
```jsonc
// Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.
"editor.tabCompletion": "onlySnippets"
```

## Style
All code snippets are without semicolons (`;`). 

You can use these snippets along with Prettier/ESLint to have your code automatically formatted to your preference.

## Snippet syntax

### Tabstops
- With tabstops you can make the editor cursor move inside a snippet
- `$1`, `$2`, `$3` specify cursor locations, in order in which tabstops will be visited
- `$0` denotes the final cursor position
- Multiple occurrences of the same tabstop are linked and updated in sync

### Placeholders
- Placeholders are tabstops with values, such as `${1:name}` 
- Placeholder text will be inserted and selected such that it can be easily changed 
- Can be nested, like `${1:another ${2:placeholder}}`


## JavaScript snippets

### Assignments

| Prefix | Description        | Body                         |
| ------ | ------------------ | ---------------------------- |
| `c`    | const              | `const $0`                   |
| `l`    | let                | `let $0`                     |
| `ca`   | const assignment   | `const $1 = $0`              |
| `la`   | let assignment     | `let $1 = $0`                |
| `cas`  | const string       | `const $1 = '$0'`            |
| `car`  | const array        | `const $1 = [$0]`            |
| `cao`  | const object       | `const $1 = { $0 }`          |
| `dob`  | destructure object | `const { $0 } = ${1:object}` |
| `dar`  | destructure array  | `const [$0] = ${1:array}`    |

### Flow control
```
🚧 Flow control docs
```

### Functions
```
🚧 Functions docs
```

### Loops
```
🚧 Loops docs
```

### Classes
```
🚧 Classes docs
```

### Promises

| Prefix  | Description        | Body                                                                      |
| ------- | ------------------ | ------------------------------------------------------------------------- |
| `fet`   | native fetch       | `fetch('$1').then(res => res.json())`                                     |
| `feta`  | fetch assignment   | `const ${2\|data,{ data }\|} = await fetch('$1').then(res => res.json())` |
| `pr`    | promise            | `new Promise((resolve, reject) => { $0 })`                                |
| `prs`   | promise resolve    | `Promise.resolve($1)$0`                                                   |
| `prj`   | promise reject     | `Promise.reject($1)$0`                                                    |
| `then`  | promise.then       | `$1.then((${2:value}) => $0`                                              |
| `catch` | promise.catch      | `$1.catch((${2:err}) => $0`                                               |
| `thenc` | promise.then.catch | `$1.then((${2:value}) => $3.catch((${4:err}) => $5`                       |
| `pra`   | promise.all        | `Promise.all($1)$0`                                                       |
| `prsa`  | promise.allSettled | `Promise.allSettled($1)$0`                                                |
| `pran`  | promise.any        | `Promise.any($1)$0`                                                       |


### Modules

| Prefix | Description     | Body                                  |
| ------ | --------------- | ------------------------------------- |
| `im`   | import          | `import { $2 } from '$1'$0`           |
| `imf`  | import file     | `import '$1'`                         |
| `imp`  | import dynamic  | `import($0)`                          |
| `imd`  | import default  | `import $2 from '$1'$3;$0`            |
| `ima`  | import as       | `import ${2:*} as {3:name} from '$1'` |
| `ime`  | import meta env | `import.meta.env.$0`                  |
| `ex`   | export          | `export $0`                           |
| `exd`  | export default  | `export default $0`                   |
| `exf`  | export from     | `export { $2 } from '$1'`             |
| `exa`  | export all from | `export * from '$1'`                  |
| `exo`  | export object   | `export const ${1:name} = { $0 }`     |


### Array methods

| Prefix         | Description                      | Body                                                            |
| -------------- | -------------------------------- | --------------------------------------------------------------- |
| `fe`           | Array.forEach()                  | `$1.forEach((${2:item}) => { $0 })`                             |
| `map`          | Array.map()                      | `$1.map((${2:item}) => ${3})$0`                                 |
| `reduce`       | Array.reduce()                   | `$1.reduce((${2:acc}, ${3:curr}) => { $0 }, ${4:initial})`      |
| `reduce-right` | Array.reduceRight()              | `$1.reduceRight((${2:acc}, ${3:curr}) => { $0 }, ${4:initial})` |
| `filter`       | Array.filter()                   | `$1.filter((${2:item}) => ${3})$0`                              |
| `find`         | Array.find()                     | `$1.find((${2:item}) => ${3})$0`                                |
| `every`        | Array.every()                    | `$1.every((${2:item}) => ${3})$0`                               |
| `some`         | Array.some()                     | `$1.some((${2:item}) => ${3})$0`                                |
| `reverse`      | Array.reverse()                  | `$1.reverse()$0`                                                |
| `map-string`   | Array.map() as string            | `$1.map(String)$0`                                              |
| `map-number`   | Array.map() as number            | `$1.map(Number)$0`                                              |
| `filter-true`  | Array.filter() for truthy values | `$1.filter(Boolean)$0`                                          |

## Objects

| Prefix | Description        | Body                     |
| ------ | ------------------ | ------------------------ |
| `oe`   | Object.entries     | `Object.entries($0)`     |
| `ofe`  | Object.fromEntries | `Object.fromEntries($0)` |
| `ok`   | Object.keys        | `Object.keys($0)`        |
| `ov`   | Object.values      | `Object.values($0)`      |

### Returns

| Prefix | Description          | Body            |
| ------ | -------------------- | --------------- |
| `re`   | return               | `return $0`     |
| `reo`  | return object        | `return { $0 }` |
| `rei`  | return object inline | `return ({$0})` |


### Operators, expressions, literals
*will be better categorized*

| Prefix | Description                         | Body                           |
| ------ | ----------------------------------- | ------------------------------ |
| `or`   | OR (\|\|)                           | `\|\| $0`                      |
| `and`  | AND (&&)                            | `&& $0`                        |
| `nc`   | Nullish coalescing (??)             | `?? $0`                        |
| `eq`   | strict equality (===)               | `=== $0`                       |
| `ore`  | logical OR expression               | `${1:value} \|\| ${0:value}`   |
| `ande` | logical AND expression              | `${1:value} && ${0:value}`     |
| `nce`  | Nullish coalescing expression (??)  | `${1:item} ?? ${0:default}`    |
| `eqe`  | strict equality expression          | `${1:value} === ${2:value}`    |
| `ora`  | Logical OR assignment (\|\|=)       | `${1:name} \|\|= ${0:default}` |
| `nca`  | Nullish coalescing assignment (??=) | `${1:name} ??= ${0:default}`   |
| `inc`  | addition assignment                 | `$1 += ${0:1}`                 |
| `sub`  | subtraction assignment              | `$1 -= ${0:1}`                 |
| `mul`  | multiplication assignment           | `$1 *= ${0:1}`                 |
| `div`  | division assignment                 | `$1 /= ${0:1}`                 |
| `ol`   | object literal                      | `{ $1: $0 }`                   |
| `al`   | array literal                       | `[$0]`                         |
| `tl`   | template literal                    | ``$0``                         |
| `tlo`  | template literal operation          | `${$1}$0`                      |
| `tle`  | template literal expression         | ``$1${$2}$0``                  |


### Console

| Prefix | Description                | Body                                          |
| ------ | -------------------------- | --------------------------------------------- |
| `cl`   | console.log                | `console.log($0)`                             |
| `ci`   | console.info               | `console.info($1)`                            |
| `cdi`  | console.dir                | `console.dir($1)`                             |
| `ce`   | console.error              | `console.error($1)`                           |
| `cw`   | console.warn               | `console.warn($1)`                            |
| `ct`   | console.time               | `console.time('$1'),$0,console.timeEnd('$1')` |
| `ctb`  | console.table              | `console.table($1)`                           |
| `clr`  | console.clear              | `console.clear()`                             |
| `clm`  | console.log message        | `console.log('$0')`                           |
| `clo`  | console.log object         | `console.log({ $0 })`                         |
| `clc`  | console.log from clipboard | `console.log({ $CLIPBOARD })`                 |
| `cll`  | console.log labeled        | `console.log('$1 ->', $1$2)`                  |
| `cel`  | console.error labeled      | `console.error('$1 ->', $1$2)`                |
| `cwl`  | console.warn labeled       | `console.warn('$1 ->', ${2:$1})`              |

### Timers

| Prefix | Description      | Body                                    |
| ------ | ---------------- | --------------------------------------- |
| `si`   | setInterval      | `setInterval(() => { $0 }, ${1:delay})` |
| `st`   | setTimeout       | `setTimeout(() => { $0 }, ${1:delay})`  |
| `sim`  | setImmediate     | `setImmediate(() => { $0 })`            |
| `nt`   | process nextTick | `process.nextTick(() => { $0 })`        |

### JSON

| Prefix | Description                  | Body                                                          |
| ------ | ---------------------------- | ------------------------------------------------------------- |
| `jp`   | JSON.parse                   | `JSON.parse(${1:json})`                                       |
| `js`   | JSON.stringify               | `JSON.stringify(${1:value})`                                  |
| `jsp`  | JSON.stringify pretty        | `JSON.stringify(${1:value}, null, 2)`                         |
| `jss`  | JSON.stringify if not string | `typeof ${1:value} === 'string' ? value : JSON.stringify($1)` |

### DOM

| Prefix | Description                   | Body                                                                             |
| ------ | ----------------------------- | -------------------------------------------------------------------------------- |
| `qs`   | query selector                | `${1:document}.querySelector('$2')`                                              |
| `qsa`  | query selector all            | `${1:document}.querySelectorAll('$2')`                                           |
| `qsaa` | query selector all array      | `[...${1:document}.querySelectorAll('$2')]`                                      |
| `ael`  | add event listener            | `${1:document}.addEventListener('${2:click}', (e$3) => $0)`                      |
| `qsae` | query selector event listener | `${1:document}.querySelector('$2')?.addEventListener('${3:click}', (e$4) => $0)` |
| `gid`  | get element by id             | `${1:document}.getElementById('$2')`                                             |
| `on`   | event handler                 | `${1:emitter}.on('${2:event}', (${3:arguments}) => { $0 })`                      |

### Dates

| Prefix | Description | Body             |
| ------ | ----------- | ---------------- |
| `nd`   | new date    | `new Date($1)$0` |
| `now`  | Date.now()  | `Date.now()`     |

### Testing

| Prefix | Description         | Body                                               |
| ------ | ------------------- | -------------------------------------------------- |
| `desc` | describe            | `describe('${1:description}', () => { $0 })`       |
| `cont` | context             | `context('${1:description}', () => { $0 })`        |
| `it`   | test (synchronous)  | `it('${1:description}', () => { $0 })`             |
| `ita`  | test (asynchronous) | `it('${1:description}', async () => { $0 })`       |
| `itc`  | test (callback)     | `it('${1:description}', (done) => { $0  done() })` |
| `bf`   | before test suite   | `before(() => { $0 })`                             |
| `bfe`  | before each test    | `beforeEach(() => { $0 })`                         |
| `aft`  | after test suite    | `after(() => { $0 })`                              |
| `afe`  | after each test     | `afterEach(() => { $0 })`                          |


### Types

| Prefix  | Description | Body                               |
| ------- | ----------- | ---------------------------------- |
| `aia`   | is array    | `Array.isArray($0)`                |
| `tof`   | typeof      | `typeof ${1:value} === '${1}'$0`   |
| `iof`   | instanceof  | `${1:object} instanceof ${0:Class` |
| `isnil` | is nil      | `${1:value} == null`               |
| `nnil`  | is not nil  | `${1:value} != null`               |
| `isnan` | is NaN      | `isNan($0)`                        |
| `nnan`  | is not NaN  | `!isNan($0)`                       |


### Miscellaneous

| Prefix | Description                   | Body                 |
| ------ | ----------------------------- | -------------------- |
| `us`   | insert 'use strict' statement | `'use strict'`       |
| `pse`  | process.server                | `process.server`     |
| `pcl`  | process.client                | `process.client`     |
| `env`  | env variable                  | `process.env.$0`     |
| `envv` | env variable vite             | `import.meta.env.$0` |


## Uncategorized 

⚠️ *working on it*


| Prefix | Description      | Body                                      |
| ------ | ---------------- | ----------------------------------------- |
| `uniq` | uniq             | `[...new Set(${0:array})]`                |
| `pi`   | parse int        | `parseInt(${1:value}, ${2\|10,2,8,16\|})` |
| `pf`   | parse float      | `parseFloat(${1:value})`                  |
| `am`   | array me         | `[...${1:arr}$2]$0`                       |
| `om`   | object merge     | `[...${1:arr}$2]$0`                       |
| `aat`  | array at         | `${1:items}.at(${2:0})`                   |
| `seq`  | sequence of 0..n | `[...Array(${1:length}).keys()]$0`        |


## TypeScript snippets

### Assignments

| Prefix | Description              | Body                                        |
| ------ | ------------------------ | ------------------------------------------- |
| `cat`  | const assignment (typed) | `const ${1:name}: ${2:string} = ${3:value}` |
| `lat`  | let assignment (typed)   | `let ${1:name}: ${2:string} = ${3:value}`   |
| `caat` | const array (typed)      | `const ${1:items}: ${2:string}[] = [$0]`    |
| `caot` | const object (typed)     | `const ${1:name}: ${2:object} = { $0 }`     |


### Types

| Prefix | Description       | Body                                            |
| ------ | ----------------- | ----------------------------------------------- |
| `int`  | interface         | `interface ${1:Model} { $0 }`                   |
| `inte` | interface extends | `interface ${1:Model} extends ${2:Base} { $0 }` |
| `tp`   | type              | `type ${1:Model} = $0`                          |
| `tpu`  | type union        | `type ${1:Model} = ${2:first} \| ${3:second}`   |
| `tpi`  | type intersection | `type ${1:Model} = ${2:first} & ${3:second}`    |

## Running locally

```bash
# ensure Deno is installed
# https://deno.land/manual@v1.29.1/getting_started/installation

# generate .code-snippets
npm run generate
```
