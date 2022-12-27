# Modern JavaScript Snippets ⚡

> Short and memorable JavaScript & TypeScript snippets for the modern-day developer. 

<br>

  🚧 *Still a work in progress. Some snippets may be changed or removed, and many more will be added.*

## Features
- Contains over **180** snippets
- Modern JavaScript syntax
- Strategically placed tabstops
- ... 

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


## Snippets
### Assignments
| Prefix | Description             | Body                         |
| ------ | ----------------------- | ---------------------------- |
| `c`    | const                   | `const $0`                   |
| `l`    | let                     | `let $0`                     |
| `ca`   | const assignment        | `const $1 = $0`              |
| `la`   | let assignment          | `let $1 = $0`                |
| `cas`  | const string assignment | `const $1 = '$0'`            |
| `car`  | const array assignment  | `const $1 = [$0]`            |
| `cao`  | const object assignment | `const $1 = { $0 }`          |
| `dob`  | object destructuring    | `const { $0 } = ${1:object}` |
| `dar`  | array destructuring     | `const [$0] = ${1:array}`    |


### Flow control
| Prefix   | Description                   | Body                                                                                                              |
| -------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `if`     | if statement                  | <code>if ($1) {<br>&nbsp;&nbsp;$2<br>}</code>                                                                     |
| `ifel`   | if/else statement             | <code>if ($1) {<br>&nbsp;&nbsp;$2<br>} else {<br>&nbsp;&nbsp;$3<br>}</code>                                       |
| `ifei`   | if/else-if statement          | <code>if ($1) {<br>&nbsp;&nbsp;$2<br>} else if ($3) {<br>&nbsp;&nbsp;$4<br>}</code>                               |
| `el`     | else statement                | <code>else {<br>&nbsp;&nbsp;$3<br>}</code>                                                                        |
| `ei`     | else if statement             | <code>else if ($1) {<br>&nbsp;&nbsp;$2<br>}</code>                                                                |
| `ter`    | ternary operator              | `$1 ? $2 : $3`                                                                                                    |
| `tera`   | ternary expression assignment | `const ${1:name} = $2 ? $3 : $4`                                                                                  |
| `switch` | switch                        | <code>switch ($1) {<br>&nbsp;&nbsp;case $2 : $3<br>&nbsp;&nbsp;default: $0<br>}</code>                            |
| `case`   | case                          | <code>case ${1:value}:<br>&nbsp;&nbsp;$0<br>&nbsp;&nbsp;break;</code>                                             |
| `tc`     | try/catch                     | <code>try {<br>&nbsp;&nbsp;$1<br>} catch (error) {<br>&nbsp;&nbsp;$0<br>}</code>                                  |
| `tcf`    | try/catch/finally             | <code>try {<br>&nbsp;&nbsp;$1<br>} catch (error) {<br>&nbsp;&nbsp;$2<br>} finally {<br>&nbsp;&nbsp;$3<br>}</code> |
| `tf`     | try/finally                   | <code>try {<br>&nbsp;&nbsp;$1<br>} finally {<br>&nbsp;&nbsp;$2<br>}</code>                                        |


### Functions
| Prefix | Description                             | Body                                                                        |
| ------ | --------------------------------------- | --------------------------------------------------------------------------- |
| `fn`   | function                                | <code>function ${1:name}($2) {<br>&nbsp;&nbsp;$0<br>}</code>                |
| `fna`  | async function                          | <code>async function ${1:name}($2) {<br>&nbsp;&nbsp;$0<br>}</code>          |
| `nfn`  | named arrow function                    | `const ${1:name} = ($2) => {$0}`                                            |
| `nfna` | async named arrow function              | `const ${1:name} = async ($2) => {$0}`                                      |
| `af`   | arrow function                          | `($1) => $0`                                                                |
| `afa`  | async arrow function                    | `async ($1) => $0`                                                          |
| `afb`  | arrow function with body                | <code>($1) => {<br>&nbsp;&nbsp;$0<br>}</code>                               |
| `afba` | async arrow function with body          | <code>async ($1) => {<br>&nbsp;&nbsp;$0<br>}</code>                         |
| `efn`  | export function                         | <code>export function ${1:name}($2) {<br>&nbsp;&nbsp;$0<br>}</code>         |
| `edfn` | export default function                 | <code>export default function ${1:name}($2) {<br>&nbsp;&nbsp;$0<br>}</code> |
| `enfn` | export named arrow function             | `export const ${1:name} = ($2) => {$0}`                                     |
| `iife` | immediately-invoked function expression | <code>((${1:arguments}) => {<br>&nbsp;&nbsp;$0<br>})($2)</code>             |


### Loops
| Prefix | Description         | Body                                                                                                                     |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `fl`   | for loop            | <code>for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length; ${1:i} < ${2:len}; ${1:i}++) {<br>&nbsp;&nbsp;$0<br>}</code> |
| `rfl`  | reverse for loop    | <code>for (let ${1:i} = ${2:iterable}.length - 1; ${1:i} >= 0; ${1:i}--) {<br>&nbsp;&nbsp;$0<br>}</code>                 |
| `flr`  | for loop (range)    | <code>for (let ${1:i} = 0; ${1:i} < ${2:5}; ${1:i}++) {<br>&nbsp;&nbsp;$0<br>}</code>                                    |
| `fin`  | for...in loop       | <code>for (let ${1:key} in ${2:array}) {<br>&nbsp;&nbsp;$0<br>}</code>                                                   |
| `fof`  | for...of loop       | <code>for (let ${1:item} of ${2:items}) {<br>&nbsp;&nbsp;$0<br>}</code>                                                  |
| `fofa` | for await...of loop | <code>for await (let ${1:item} of ${2:items}) {<br>&nbsp;&nbsp;$0<br>}</code>                                            |
| `wl`   | while loop          | <code>while (${1:true}) {<br>&nbsp;&nbsp;$0<br>}</code>                                                                  |


### Classes
| Prefix | Description                    | Body                                                                                                                           |
| ------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `cs`   | class                          | <code>class $1 {<br>&nbsp;&nbsp;$0<br>}</code>                                                                                 |
| `cse`  | class extends                  | <code>class $1 extends ${2:Base} {<br>&nbsp;&nbsp;$0<br>}</code>                                                               |
| `csc`  | class with constructor         | <code>class $1 {<br>&nbsp;&nbsp;constructor($2) {<br>&nbsp;&nbsp;&nbsp;&nbsp;$0<br>&nbsp;&nbsp;}<br>}</code>                   |
| `csec` | class extends with constructor | <code>class $1 extends ${2:Base} {<br>&nbsp;&nbsp;constructor($3) {<br>&nbsp;&nbsp;&nbsp;&nbsp;$0<br>&nbsp;&nbsp;}<br>}</code> |
| `ctor` | class constructor              | `constructor($1) {$0}`                                                                                                         |
| `get`  | getter                         | <code>get ${1:property}() {<br>&nbsp;&nbsp;$0<br>}</code>                                                                      |
| `set`  | setter                         | <code>set ${1:property}(${2:value}) {<br>&nbsp;&nbsp;$0<br>}</code>                                                            |
| `gs`   | getter and setter              | <code>get ${1:property}() {<br>&nbsp;&nbsp;$0<br>}<br>set ${1:property}(${2:value}) {<br>&nbsp;&nbsp;<br>}</code>              |
| `met`  | method                         | <code>${1:name}($2) {<br>&nbsp;&nbsp;$0<br>}</code>                                                                            |
| `meta` | async method                   | <code>async ${1:name}($2) {<br>&nbsp;&nbsp;$0<br>}</code>                                                                      |


### Promises
| Prefix  | Description         | Body                                                                      |
| ------- | ------------------- | ------------------------------------------------------------------------- |
| `fet`   | fetch               | `fetch('$1').then(res => res.json())`                                     |
| `feta`  | fetch assignment    | `const ${2\|data,{ data }\|} = await fetch('$1').then(res => res.json())` |
| `pr`    | promise             | <code>new Promise((resolve, reject) => {<br>&nbsp;&nbsp;$0<br>})</code>   |
| `prs`   | Promise.resolve     | `Promise.resolve($1)`                                                     |
| `prj`   | Promise.reject      | `Promise.reject($1)`                                                      |
| `then`  | promise .then       | `$1.then((${2:value}) => $0`                                              |
| `catch` | promise .catch      | `$1.catch((${2:err}) => $0`                                               |
| `thenc` | promise .then.catch | `$1.then((${2:value}) => $3.catch((${4:err}) => $5`                       |
| `pra`   | Promise.all         | `Promise.all($1)`                                                         |
| `prsa`  | Promise.allSettled  | `Promise.allSettled($1)`                                                  |
| `pran`  | Promise.any         | `Promise.any($1)`                                                         |


### Modules
| Prefix | Description        | Body                                  |
| ------ | ------------------ | ------------------------------------- |
| `im`   | import from module | `import { $2 } from '$1'$0`           |
| `imf`  | import file        | `import '$1'`                         |
| `imp`  | import dynamic     | `import($0)`                          |
| `imd`  | import default     | `import $2 from '$1'$3;$0`            |
| `ima`  | import as          | `import ${2:*} as {3:name} from '$1'` |
| `ime`  | import meta env    | `import.meta.env.$0`                  |
| `ex`   | export             | `export $0`                           |
| `exd`  | export default     | `export default $0`                   |
| `exf`  | export from        | `export { $2 } from '$1'`             |
| `exa`  | export all from    | `export * from '$1'`                  |
| `exo`  | export object      | `export const ${1:name} = { $0 }`     |


### Array methods
| Prefix         | Description           | Body                                                                                         |
| -------------- | --------------------- | -------------------------------------------------------------------------------------------- |
| `fe`           | Array.forEach()       | <code>$1.forEach((${2:item}) => {<br>&nbsp;&nbsp;$0<br>})</code>                             |
| `map`          | Array.map()           | `$1.map((${2:item}) => ${3})`                                                                |
| `reduce`       | Array.reduce()        | <code>$1.reduce((${2:acc}, ${3:curr}) => {<br>&nbsp;&nbsp;$0<br>}, ${4:initial})</code>      |
| `reduce-right` | Array.reduceRight()   | <code>$1.reduceRight((${2:acc}, ${3:curr}) => {<br>&nbsp;&nbsp;$0<br>}, ${4:initial})</code> |
| `filter`       | Array.filter()        | `$1.filter((${2:item}) => ${3})`                                                             |
| `find`         | Array.find()          | `$1.find((${2:item}) => ${3})`                                                               |
| `every`        | Array.every()         | `$1.every((${2:item}) => ${3})`                                                              |
| `some`         | Array.some()          | `$1.some((${2:item}) => ${3})`                                                               |
| `reverse`      | Array.reverse()       | `$1.reverse()`                                                                               |
| `map-string`   | Array.map() as string | `$1.map(String)`                                                                             |
| `map-number`   | Array.map() as number | `$1.map(Number)`                                                                             |
| `filter-true`  | Array.filter() truthy | `$1.filter(Boolean)`                                                                         |


### Objects
| Prefix | Description        | Body                     |
| ------ | ------------------ | ------------------------ |
| `oe`   | Object.entries     | `Object.entries($0)`     |
| `ofe`  | Object.fromEntries | `Object.fromEntries($0)` |
| `ok`   | Object.keys        | `Object.keys($0)`        |
| `ov`   | Object.values      | `Object.values($0)`      |


### Returns
| Prefix | Description          | Body                                         |
| ------ | -------------------- | -------------------------------------------- |
| `re`   | return               | `return $0`                                  |
| `reo`  | return object        | <code>return {<br>&nbsp;&nbsp;$0<br>}</code> |
| `rei`  | return object inline | `return ({$0})`                              |


### Operators, Expressions, Literals
Grouping them all together for now
| Prefix | Description                         | Body                           |
| ------ | ----------------------------------- | ------------------------------ |
| `or`   | OR (\|\|)                           | `\|\| $0`                      |
| `and`  | AND (&&)                            | `&& $0`                        |
| `nc`   | nullish coalescing (??)             | `?? $0`                        |
| `eq`   | strict equality (===)               | `=== $0`                       |
| `ore`  | logical OR expression               | `${1:value} \|\| ${0:value}`   |
| `ande` | logical AND expression              | `${1:value} && ${0:value}`     |
| `nce`  | nullish coalescing expression (??)  | `${1:item} ?? ${0:default}`    |
| `eqe`  | strict equality expression          | `${1:value} === ${2:value}`    |
| `ora`  | logical OR assignment (\|\|=)       | `${1:name} \|\|= ${0:default}` |
| `nca`  | nullish coalescing assignment (??=) | `${1:name} ??= ${0:default}`   |
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
| Prefix | Description             | Body                                                           |
| ------ | ----------------------- | -------------------------------------------------------------- |
| `cl`   | console.log             | `console.log($0)`                                              |
| `ci`   | console.info            | `console.info($1)`                                             |
| `cdi`  | console.dir             | `console.dir($1)`                                              |
| `ce`   | console.error           | `console.error($1)`                                            |
| `cw`   | console.warn            | `console.warn($1)`                                             |
| `ct`   | console.time            | <code>console.time('$1')<br>$0<br>console.timeEnd('$1')</code> |
| `ctb`  | console.table           | `console.table($1)`                                            |
| `clr`  | console.clear           | `console.clear()`                                              |
| `clm`  | console.log message     | `console.log('$0')`                                            |
| `clo`  | console.log object      | `console.log({ $0 })`                                          |
| `clc`  | console.log clipboard   | `console.log({ $CLIPBOARD })`                                  |
| `cll`  | console.log (labeled)   | `console.log('$1 ->', $1$2)`                                   |
| `cel`  | console.error (labeled) | `console.error('$1 ->', $1$2)`                                 |
| `cwl`  | console.warn (labeled)  | `console.warn('$1 ->', ${2:$1})`                               |


### Timers
| Prefix | Description       | Body                                                                 |
| ------ | ----------------- | -------------------------------------------------------------------- |
| `si`   | set interval      | <code>setInterval(() => {<br>&nbsp;&nbsp;$0<br>}, ${1:delay})</code> |
| `st`   | set timeout       | <code>setTimeout(() => {<br>&nbsp;&nbsp;$0<br>}, ${1:delay})</code>  |
| `sim`  | set immediate     | <code>setImmediate(() => {<br>&nbsp;&nbsp;$0<br>})</code>            |
| `nt`   | process next tick | <code>process.nextTick(() => {<br>&nbsp;&nbsp;$0<br>})</code>        |


### JSON
| Prefix | Description                  | Body                                                          |
| ------ | ---------------------------- | ------------------------------------------------------------- |
| `jp`   | JSON parse                   | `JSON.parse(${1:json})`                                       |
| `js`   | JSON stringify               | `JSON.stringify(${1:value})`                                  |
| `jsp`  | JSON stringify (pretty)      | `JSON.stringify(${1:value}, null, 2)`                         |
| `jss`  | JSON.stringify if not string | `typeof ${1:value} === 'string' ? value : JSON.stringify($1)` |


### DOM
| Prefix | Description                        | Body                                                                                     |
| ------ | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| `qs`   | query selector                     | `${1:document}.querySelector('$2')`                                                      |
| `qsa`  | query selector all                 | `${1:document}.querySelectorAll('$2')`                                                   |
| `qsaa` | query selector all as array        | `[...${1:document}.querySelectorAll('$2')]`                                              |
| `ael`  | event listener                     | `${1:document}.addEventListener('${2:click}', (e$3) => $0)`                              |
| `qsae` | query selector with event listener | `${1:document}.querySelector('$2')?.addEventListener('${3:click}', (e$4) => $0)`         |
| `gid`  | get element by id                  | `${1:document}.getElementById('$2')`                                                     |
| `on`   | event handler                      | <code>${1:emitter}.on('${2:event}', (${3:arguments}) => {<br>&nbsp;&nbsp;$0<br>})</code> |


### Dates
| Prefix | Description | Body           |
| ------ | ----------- | -------------- |
| `nd`   | new Date()  | `new Date($1)` |
| `now`  | Date.now()  | `Date.now()`   |


### Testing
| Prefix | Description         | Body                                                                                          |
| ------ | ------------------- | --------------------------------------------------------------------------------------------- |
| `desc` | describe            | <code>describe('${1:description}', () => {<br>&nbsp;&nbsp;$0<br>})</code>                     |
| `cont` | context             | <code>context('${1:description}', () => {<br>&nbsp;&nbsp;$0<br>})</code>                      |
| `it`   | test (synchronous)  | <code>it('${1:description}', () => {<br>&nbsp;&nbsp;$0<br>})</code>                           |
| `ita`  | test (asynchronous) | <code>it('${1:description}', async () => {<br>&nbsp;&nbsp;$0<br>})</code>                     |
| `itc`  | test (callback)     | <code>it('${1:description}', (done) => {<br>&nbsp;&nbsp;$0<br>&nbsp;&nbsp;done()<br>})</code> |
| `bf`   | before test suite   | <code>before(() => {<br>&nbsp;&nbsp;$0<br>})</code>                                           |
| `bfe`  | before each test    | <code>beforeEach(() => {<br>&nbsp;&nbsp;$0<br>})</code>                                       |
| `aft`  | after test suite    | <code>after(() => {<br>&nbsp;&nbsp;$0<br>})</code>                                            |
| `afe`  | after each test     | <code>afterEach(() => {<br>&nbsp;&nbsp;$0<br>})</code>                                        |


### Types
| Prefix  | Description | Body                                                                                     |
| ------- | ----------- | ---------------------------------------------------------------------------------------- |
| `aia`   | is array    | `Array.isArray($0)`                                                                      |
| `tof`   | typeof      | `typeof ${1:value} === '${2\|bigint,boolean,function,number,object,symbol,undefined\|}'` |
| `iof`   | instanceof  | `${1:object} instanceof ${0:Class}`                                                      |
| `isnil` | is nil      | `${1:value} == null`                                                                     |
| `nnil`  | is not nil  | `${1:value} != null`                                                                     |
| `isnan` | is NaN      | `isNan($0)`                                                                              |
| `nnan`  | is not NaN  | `!isNan($0)`                                                                             |


### Misc
| Prefix | Description            | Body                 |
| ------ | ---------------------- | -------------------- |
| `us`   | 'use strict' statement | `'use strict'`       |
| `pse`  | process.server         | `process.server`     |
| `pcl`  | process.client         | `process.client`     |
| `env`  | env variable           | `process.env.$0`     |
| `envv` | env variable (vite)    | `import.meta.env.$0` |


### Uncategorized
Will be sorted into appropriate categories in the future.
| Prefix | Description            | Body                                      |
| ------ | ---------------------- | ----------------------------------------- |
| `uniq` | array of unique values | `[...new Set(${0:array})]`                |
| `pi`   | parse int              | `parseInt(${1:value}, ${2\|10,2,8,16\|})` |
| `pf`   | parse float            | `parseFloat(${1:value})`                  |
| `am`   | array merge            | `[...${1:arr}$2]`                         |
| `om`   | object merge           | `{ ...${1:object}$2 }`                    |
| `aat`  | array.at               | `${1:items}.at(${2:0})`                   |
| `seq`  | sequence of 0..n       | `[...Array(${1:length}).keys()]`          |


## TypeScript specific
### Declarations
| Prefix | Description               | Body                                        |
| ------ | ------------------------- | ------------------------------------------- |
| `cat`  | const assignment (typed)  | `const ${1:name}: ${2:string} = ${3:value}` |
| `lat`  | let assignment (typed)    | `let ${1:name}: ${2:string} = ${3:value}`   |
| `caat` | array assignment (typed)  | `const ${1:items}: ${2:string}[] = [$0]`    |
| `caot` | object assignment (typed) | `const ${1:name}: ${2:object} = { $0 }`     |


### Types
| Prefix | Description       | Body                                                                         |
| ------ | ----------------- | ---------------------------------------------------------------------------- |
| `int`  | interface         | <code>interface ${1:Model} {<br>&nbsp;&nbsp;$0<br>}</code>                   |
| `inte` | interface extends | <code>interface ${1:Model} extends ${2:Base} {<br>&nbsp;&nbsp;$0<br>}</code> |
| `tp`   | type              | `type ${1:Model} = $0`                                                       |
| `tpu`  | type union        | `type ${1:Model} = ${2:first} \| ${3:second}`                                |
| `tpi`  | type intersection | `type ${1:Model} = ${2:first} & ${3:second}`                                 |



## Running locally

```bash
# ensure Deno is installed
# https://deno.land/manual@v1.29.1/getting_started/installation

# generate .code-snippets
npm run generate
```
