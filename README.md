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

---

## 🚧 Experimental documentation

## Snippets


### Assignments

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`c`

</td>
<td>const</td>
<td>

  ```javascript
const $0
  ```

</td>
</tr>

<tr>
<td>

`l`

</td>
<td>let</td>
<td>

  ```javascript
let $0
  ```

</td>
</tr>

<tr>
<td>

`ca`

</td>
<td>const assignment</td>
<td>

  ```javascript
const $1 = $0
  ```

</td>
</tr>

<tr>
<td>

`la`

</td>
<td>let assignment</td>
<td>

  ```javascript
let $1 = $0
  ```

</td>
</tr>

<tr>
<td>

`cas`

</td>
<td>const string assignment</td>
<td>

  ```javascript
const $1 = '$0'
  ```

</td>
</tr>

<tr>
<td>

`car`

</td>
<td>const array assignment</td>
<td>

  ```javascript
const $1 = [$0]
  ```

</td>
</tr>

<tr>
<td>

`cao`

</td>
<td>const object assignment</td>
<td>

  ```javascript
const $1 = { $0 }
  ```

</td>
</tr>

<tr>
<td>

`dob`

</td>
<td>object destructuring</td>
<td>

  ```javascript
const { $0 } = ${1:object}
  ```

</td>
</tr>

<tr>
<td>

`dar`

</td>
<td>array destructuring</td>
<td>

  ```javascript
const [$0] = ${1:array}
  ```

</td>
</tr>
</table>

### Flow control

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`if`

</td>
<td>if statement</td>
<td>

  ```javascript
if ($1) {
	$2
}
  ```

</td>
</tr>

<tr>
<td>

`ifel`

</td>
<td>if/else statement</td>
<td>

  ```javascript
if ($1) {
	$2
} else {
	$3
}
  ```

</td>
</tr>

<tr>
<td>

`ifei`

</td>
<td>if/else-if statement</td>
<td>

  ```javascript
if ($1) {
	$2
} else if ($3) {
	$4
}
  ```

</td>
</tr>

<tr>
<td>

`el`

</td>
<td>else statement</td>
<td>

  ```javascript
else {
	$3
}
  ```

</td>
</tr>

<tr>
<td>

`ei`

</td>
<td>else if statement</td>
<td>

  ```javascript
else if ($1) {
	$2
}
  ```

</td>
</tr>

<tr>
<td>

`ter`

</td>
<td>ternary operator</td>
<td>

  ```javascript
$1 ? $2 : $3
  ```

</td>
</tr>

<tr>
<td>

`tera`

</td>
<td>ternary expression assignment</td>
<td>

  ```javascript
const ${1:name} = $2 ? $3 : $4
  ```

</td>
</tr>

<tr>
<td>

`sw`

</td>
<td>switch</td>
<td>

  ```javascript
switch ($1) {
	case $2 : $3
	default: $0
}
  ```

</td>
</tr>

<tr>
<td>

`cas`

</td>
<td>case</td>
<td>

  ```javascript
case ${1:value}:
	$0
	break;
  ```

</td>
</tr>

<tr>
<td>

`tc`

</td>
<td>try/catch</td>
<td>

  ```javascript
try {
	$1
} catch (error) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`tcf`

</td>
<td>try/catch/finally</td>
<td>

  ```javascript
try {
	$1
} catch (error) {
	$2
} finally {
	$3
}
  ```

</td>
</tr>

<tr>
<td>

`tf`

</td>
<td>try/finally</td>
<td>

  ```javascript
try {
	$1
} finally {
	$2
}
  ```

</td>
</tr>
</table>

### Functions

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`fn`

</td>
<td>function</td>
<td>

  ```javascript
function ${1:name}($2) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`fna`

</td>
<td>async function</td>
<td>

  ```javascript
async function ${1:name}($2) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`nfn`

</td>
<td>named arrow function</td>
<td>

  ```javascript
const ${1:name} = ($2) => {$0}
  ```

</td>
</tr>

<tr>
<td>

`nfna`

</td>
<td>async named arrow function</td>
<td>

  ```javascript
const ${1:name} = async ($2) => {$0}
  ```

</td>
</tr>

<tr>
<td>

`af`

</td>
<td>arrow function</td>
<td>

  ```javascript
($1) => $0
  ```

</td>
</tr>

<tr>
<td>

`afa`

</td>
<td>async arrow function</td>
<td>

  ```javascript
async ($1) => $0
  ```

</td>
</tr>

<tr>
<td>

`afb`

</td>
<td>arrow function with body</td>
<td>

  ```javascript
($1) => {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`afba`

</td>
<td>async arrow function with body</td>
<td>

  ```javascript
async ($1) => {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`efn`

</td>
<td>export function</td>
<td>

  ```javascript
export function ${1:name}($2) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`edfn`

</td>
<td>export default function</td>
<td>

  ```javascript
export default function ${1:name}($2) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`enfn`

</td>
<td>export named arrow function</td>
<td>

  ```javascript
export const ${1:name} = ($2) => {$0}
  ```

</td>
</tr>

<tr>
<td>

`iife`

</td>
<td>immediately-invoked function expression</td>
<td>

  ```javascript
((${1:arguments}) => {
	$0
})($2)
  ```

</td>
</tr>
</table>

### Loops

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`fl`

</td>
<td>for loop</td>
<td>

  ```javascript
for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length; ${1:i} < ${2:len}; ${1:i}++) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`rfl`

</td>
<td>reverse for loop</td>
<td>

  ```javascript
for (let ${1:i} = ${2:iterable}.length - 1; ${1:i} >= 0; ${1:i}--) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`flr`

</td>
<td>for loop (range)</td>
<td>

  ```javascript
for (let ${1:i} = 0; ${1:i} < ${2:5}; ${1:i}++) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`fin`

</td>
<td>for...in loop</td>
<td>

  ```javascript
for (let ${1:key} in ${2:array}) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`fof`

</td>
<td>for...of loop</td>
<td>

  ```javascript
for (let ${1:item} of ${2:items}) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`fofa`

</td>
<td>for await...of loop</td>
<td>

  ```javascript
for await (let ${1:item} of ${2:items}) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`wl`

</td>
<td>while loop</td>
<td>

  ```javascript
while (${1:true}) {
	$0
}
  ```

</td>
</tr>
</table>

### Classes

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`cs`

</td>
<td>class</td>
<td>

  ```javascript
class $1 {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`cse`

</td>
<td>class extends</td>
<td>

  ```javascript
class $1 extends ${2:Base} {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`csc`

</td>
<td>class with constructor</td>
<td>

  ```javascript
class $1 {
	constructor($2) {
		$0
	}
}
  ```

</td>
</tr>

<tr>
<td>

`csec`

</td>
<td>class extends with constructor</td>
<td>

  ```javascript
class $1 extends ${2:Base} {
	constructor($3) {
		$0
	}
}
  ```

</td>
</tr>

<tr>
<td>

`ctor`

</td>
<td>class constructor</td>
<td>

  ```javascript
constructor($1) {$0}
  ```

</td>
</tr>

<tr>
<td>

`get`

</td>
<td>getter</td>
<td>

  ```javascript
get ${1:property}() {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`set`

</td>
<td>setter</td>
<td>

  ```javascript
set ${1:property}(${2:value}) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`gs`

</td>
<td>getter and setter</td>
<td>

  ```javascript
get ${1:property}() {
	$0
}
set ${1:property}(${2:value}) {
	
}
  ```

</td>
</tr>

<tr>
<td>

`met`

</td>
<td>method</td>
<td>

  ```javascript
${1:name}($2) {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`meta`

</td>
<td>async method</td>
<td>

  ```javascript
async ${1:name}($2) {
	$0
}
  ```

</td>
</tr>
</table>

### Promises

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`fet`

</td>
<td>fetch</td>
<td>

  ```javascript
fetch('$1').then(res => res.json())
  ```

</td>
</tr>

<tr>
<td>

`feta`

</td>
<td>fetch assignment</td>
<td>

  ```javascript
const ${2|data,{ data }|} = await fetch('$1').then(res => res.json())
  ```

</td>
</tr>

<tr>
<td>

`pr`

</td>
<td>promise</td>
<td>

  ```javascript
new Promise((resolve, reject) => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`prs`

</td>
<td>Promise.resolve</td>
<td>

  ```javascript
Promise.resolve($1)
  ```

</td>
</tr>

<tr>
<td>

`prj`

</td>
<td>Promise.reject</td>
<td>

  ```javascript
Promise.reject($1)
  ```

</td>
</tr>

<tr>
<td>

`then`

</td>
<td>promise .then</td>
<td>

  ```javascript
$1.then((${2:value}) => $0)
  ```

</td>
</tr>

<tr>
<td>

`catch`

</td>
<td>promise .catch</td>
<td>

  ```javascript
$1.catch((${2:err}) => $0)
  ```

</td>
</tr>

<tr>
<td>

`thenc`

</td>
<td>promise .then.catch</td>
<td>

  ```javascript
$1.then((${2:value}) => $3).catch((${4:err}) => $5)
  ```

</td>
</tr>

<tr>
<td>

`pra`

</td>
<td>Promise.all</td>
<td>

  ```javascript
Promise.all($1)
  ```

</td>
</tr>

<tr>
<td>

`prsa`

</td>
<td>Promise.allSettled</td>
<td>

  ```javascript
Promise.allSettled($1)
  ```

</td>
</tr>

<tr>
<td>

`pran`

</td>
<td>Promise.any</td>
<td>

  ```javascript
Promise.any($1)
  ```

</td>
</tr>
</table>

### Modules

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`im`

</td>
<td>import from module</td>
<td>

  ```javascript
import { $2 } from '$1'
  ```

</td>
</tr>

<tr>
<td>

`imf`

</td>
<td>import file</td>
<td>

  ```javascript
import '$1'
  ```

</td>
</tr>

<tr>
<td>

`imp`

</td>
<td>import dynamic</td>
<td>

  ```javascript
import($0)
  ```

</td>
</tr>

<tr>
<td>

`imd`

</td>
<td>import default</td>
<td>

  ```javascript
import $2 from '$1'$3;
  ```

</td>
</tr>

<tr>
<td>

`ima`

</td>
<td>import as</td>
<td>

  ```javascript
import ${2:*} as {3:name} from '$1'
  ```

</td>
</tr>

<tr>
<td>

`ime`

</td>
<td>import meta env</td>
<td>

  ```javascript
import.meta.env.$0
  ```

</td>
</tr>

<tr>
<td>

`ex`

</td>
<td>export</td>
<td>

  ```javascript
export $0
  ```

</td>
</tr>

<tr>
<td>

`exd`

</td>
<td>export default</td>
<td>

  ```javascript
export default $0
  ```

</td>
</tr>

<tr>
<td>

`exf`

</td>
<td>export from</td>
<td>

  ```javascript
export { $2 } from '$1'
  ```

</td>
</tr>

<tr>
<td>

`exa`

</td>
<td>export all from</td>
<td>

  ```javascript
export * from '$1'
  ```

</td>
</tr>

<tr>
<td>

`exo`

</td>
<td>export object</td>
<td>

  ```javascript
export const ${1:name} = { $0 }
  ```

</td>
</tr>
</table>

### Array methods

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`fe`

</td>
<td>Array.forEach()</td>
<td>

  ```javascript
$1.forEach((${2:item}) => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`map`

</td>
<td>Array.map()</td>
<td>

  ```javascript
$1.map((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td>

`reduce`

</td>
<td>Array.reduce()</td>
<td>

  ```javascript
$1.reduce((${2:acc}, ${3:curr}) => {
	$0
}, ${4:initial})
  ```

</td>
</tr>

<tr>
<td>

`reduce-right`

</td>
<td>Array.reduceRight()</td>
<td>

  ```javascript
$1.reduceRight((${2:acc}, ${3:curr}) => {
	$0
}, ${4:initial})
  ```

</td>
</tr>

<tr>
<td>

`filter`

</td>
<td>Array.filter()</td>
<td>

  ```javascript
$1.filter((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td>

`find`

</td>
<td>Array.find()</td>
<td>

  ```javascript
$1.find((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td>

`every`

</td>
<td>Array.every()</td>
<td>

  ```javascript
$1.every((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td>

`some`

</td>
<td>Array.some()</td>
<td>

  ```javascript
$1.some((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td>

`reverse`

</td>
<td>Array.reverse()</td>
<td>

  ```javascript
$1.reverse()
  ```

</td>
</tr>

<tr>
<td>

`map-string`

</td>
<td>Array.map() as string</td>
<td>

  ```javascript
$1.map(String)
  ```

</td>
</tr>

<tr>
<td>

`map-number`

</td>
<td>Array.map() as number</td>
<td>

  ```javascript
$1.map(Number)
  ```

</td>
</tr>

<tr>
<td>

`filter-true`

</td>
<td>Array.filter() truthy</td>
<td>

  ```javascript
$1.filter(Boolean)
  ```

</td>
</tr>
</table>

### Objects

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`oe`

</td>
<td>Object.entries</td>
<td>

  ```javascript
Object.entries($0)
  ```

</td>
</tr>

<tr>
<td>

`ofe`

</td>
<td>Object.fromEntries</td>
<td>

  ```javascript
Object.fromEntries($0)
  ```

</td>
</tr>

<tr>
<td>

`ok`

</td>
<td>Object.keys</td>
<td>

  ```javascript
Object.keys($0)
  ```

</td>
</tr>

<tr>
<td>

`ov`

</td>
<td>Object.values</td>
<td>

  ```javascript
Object.values($0)
  ```

</td>
</tr>
</table>

### Returns

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`re`

</td>
<td>return</td>
<td>

  ```javascript
return $0
  ```

</td>
</tr>

<tr>
<td>

`reo`

</td>
<td>return object</td>
<td>

  ```javascript
return {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`rei`

</td>
<td>return object inline</td>
<td>

  ```javascript
return ({$0})
  ```

</td>
</tr>
</table>

### Operators, Expressions, Literals
Grouping them all together for now
<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`or`

</td>
<td>OR (||)</td>
<td>

  ```javascript
|| $0
  ```

</td>
</tr>

<tr>
<td>

`and`

</td>
<td>AND (&&)</td>
<td>

  ```javascript
&& $0
  ```

</td>
</tr>

<tr>
<td>

`nc`

</td>
<td>nullish coalescing (??)</td>
<td>

  ```javascript
?? $0
  ```

</td>
</tr>

<tr>
<td>

`eq`

</td>
<td>strict equality (===)</td>
<td>

  ```javascript
=== $0
  ```

</td>
</tr>

<tr>
<td>

`ore`

</td>
<td>logical OR expression</td>
<td>

  ```javascript
${1:value} || ${0:value}
  ```

</td>
</tr>

<tr>
<td>

`ande`

</td>
<td>logical AND expression</td>
<td>

  ```javascript
${1:value} && ${0:value}
  ```

</td>
</tr>

<tr>
<td>

`nce`

</td>
<td>nullish coalescing expression (??)</td>
<td>

  ```javascript
${1:item} ?? ${0:default}
  ```

</td>
</tr>

<tr>
<td>

`eqe`

</td>
<td>strict equality expression</td>
<td>

  ```javascript
${1:value} === ${2:value}
  ```

</td>
</tr>

<tr>
<td>

`ora`

</td>
<td>logical OR assignment (||=)</td>
<td>

  ```javascript
${1:name} ||= ${0:default}
  ```

</td>
</tr>

<tr>
<td>

`nca`

</td>
<td>nullish coalescing assignment (??=)</td>
<td>

  ```javascript
${1:name} ??= ${0:default}
  ```

</td>
</tr>

<tr>
<td>

`inc`

</td>
<td>addition assignment</td>
<td>

  ```javascript
$1 += ${0:1}
  ```

</td>
</tr>

<tr>
<td>

`sub`

</td>
<td>subtraction assignment</td>
<td>

  ```javascript
$1 -= ${0:1}
  ```

</td>
</tr>

<tr>
<td>

`mul`

</td>
<td>multiplication assignment</td>
<td>

  ```javascript
$1 *= ${0:1}
  ```

</td>
</tr>

<tr>
<td>

`div`

</td>
<td>division assignment</td>
<td>

  ```javascript
$1 /= ${0:1}
  ```

</td>
</tr>

<tr>
<td>

`ol`

</td>
<td>object literal</td>
<td>

  ```javascript
{ $1: $0 }
  ```

</td>
</tr>

<tr>
<td>

`al`

</td>
<td>array literal</td>
<td>

  ```javascript
[$0]
  ```

</td>
</tr>

<tr>
<td>

`tl`

</td>
<td>template literal</td>
<td>

  ```javascript
`$0`
  ```

</td>
</tr>

<tr>
<td>

`tlo`

</td>
<td>template literal operation</td>
<td>

  ```javascript
${$1}$0
  ```

</td>
</tr>

<tr>
<td>

`tle`

</td>
<td>template literal expression</td>
<td>

  ```javascript
`$1${$2}$3`
  ```

</td>
</tr>
</table>

### Console

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`cl`

</td>
<td>console.log</td>
<td>

  ```javascript
console.log($0)
  ```

</td>
</tr>

<tr>
<td>

`ci`

</td>
<td>console.info</td>
<td>

  ```javascript
console.info($1)
  ```

</td>
</tr>

<tr>
<td>

`cdi`

</td>
<td>console.dir</td>
<td>

  ```javascript
console.dir($1)
  ```

</td>
</tr>

<tr>
<td>

`ce`

</td>
<td>console.error</td>
<td>

  ```javascript
console.error($1)
  ```

</td>
</tr>

<tr>
<td>

`cw`

</td>
<td>console.warn</td>
<td>

  ```javascript
console.warn($1)
  ```

</td>
</tr>

<tr>
<td>

`ct`

</td>
<td>console.time</td>
<td>

  ```javascript
console.time('$1')
$0
console.timeEnd('$1')
  ```

</td>
</tr>

<tr>
<td>

`ctb`

</td>
<td>console.table</td>
<td>

  ```javascript
console.table($1)
  ```

</td>
</tr>

<tr>
<td>

`clr`

</td>
<td>console.clear</td>
<td>

  ```javascript
console.clear()
  ```

</td>
</tr>

<tr>
<td>

`clm`

</td>
<td>console.log message</td>
<td>

  ```javascript
console.log('$0')
  ```

</td>
</tr>

<tr>
<td>

`clo`

</td>
<td>console.log object</td>
<td>

  ```javascript
console.log({ $0 })
  ```

</td>
</tr>

<tr>
<td>

`clc`

</td>
<td>console.log clipboard</td>
<td>

  ```javascript
console.log({ $CLIPBOARD })
  ```

</td>
</tr>

<tr>
<td>

`cll`

</td>
<td>console.log (labeled)</td>
<td>

  ```javascript
console.log('$1 ->', $1$2)
  ```

</td>
</tr>

<tr>
<td>

`cel`

</td>
<td>console.error (labeled)</td>
<td>

  ```javascript
console.error('$1 ->', $1$2)
  ```

</td>
</tr>

<tr>
<td>

`cwl`

</td>
<td>console.warn (labeled)</td>
<td>

  ```javascript
console.warn('$1 ->', ${2:$1})
  ```

</td>
</tr>
</table>

### Timers

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`si`

</td>
<td>set interval</td>
<td>

  ```javascript
setInterval(() => {
	$0
}, ${1:delay})
  ```

</td>
</tr>

<tr>
<td>

`st`

</td>
<td>set timeout</td>
<td>

  ```javascript
setTimeout(() => {
	$0
}, ${1:delay})
  ```

</td>
</tr>

<tr>
<td>

`sim`

</td>
<td>set immediate</td>
<td>

  ```javascript
setImmediate(() => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`nt`

</td>
<td>process next tick</td>
<td>

  ```javascript
process.nextTick(() => {
	$0
})
  ```

</td>
</tr>
</table>

### JSON

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`jp`

</td>
<td>JSON parse</td>
<td>

  ```javascript
JSON.parse(${1:json})
  ```

</td>
</tr>

<tr>
<td>

`js`

</td>
<td>JSON stringify</td>
<td>

  ```javascript
JSON.stringify(${1:value})
  ```

</td>
</tr>

<tr>
<td>

`jsp`

</td>
<td>JSON stringify (pretty)</td>
<td>

  ```javascript
JSON.stringify(${1:value}, null, 2)
  ```

</td>
</tr>

<tr>
<td>

`jss`

</td>
<td>JSON.stringify if not string</td>
<td>

  ```javascript
typeof ${1:value} === 'string' ? value : JSON.stringify($1)
  ```

</td>
</tr>
</table>

### DOM

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`qs`

</td>
<td>query selector</td>
<td>

  ```javascript
${1:document}.querySelector('$2')
  ```

</td>
</tr>

<tr>
<td>

`qsa`

</td>
<td>query selector all</td>
<td>

  ```javascript
${1:document}.querySelectorAll('$2')
  ```

</td>
</tr>

<tr>
<td>

`qsaa`

</td>
<td>query selector all as array</td>
<td>

  ```javascript
[...${1:document}.querySelectorAll('$2')]
  ```

</td>
</tr>

<tr>
<td>

`ael`

</td>
<td>event listener</td>
<td>

  ```javascript
${1:document}.addEventListener('${2:click}', (e$3) => $0)
  ```

</td>
</tr>

<tr>
<td>

`qsae`

</td>
<td>query selector with event listener</td>
<td>

  ```javascript
${1:document}.querySelector('$2')?.addEventListener('${3:click}', (e$4) => $0)
  ```

</td>
</tr>

<tr>
<td>

`gid`

</td>
<td>get element by id</td>
<td>

  ```javascript
${1:document}.getElementById('$2')
  ```

</td>
</tr>

<tr>
<td>

`on`

</td>
<td>event handler</td>
<td>

  ```javascript
${1:emitter}.on('${2:event}', (${3:arguments}) => {
	$0
})
  ```

</td>
</tr>
</table>

### Dates

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`nd`

</td>
<td>new Date()</td>
<td>

  ```javascript
new Date($1)
  ```

</td>
</tr>

<tr>
<td>

`now`

</td>
<td>Date.now()</td>
<td>

  ```javascript
Date.now()
  ```

</td>
</tr>
</table>

### Testing

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`desc`

</td>
<td>describe</td>
<td>

  ```javascript
describe('${1:description}', () => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`cont`

</td>
<td>context</td>
<td>

  ```javascript
context('${1:description}', () => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`it`

</td>
<td>test (synchronous)</td>
<td>

  ```javascript
it('${1:description}', () => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`ita`

</td>
<td>test (asynchronous)</td>
<td>

  ```javascript
it('${1:description}', async () => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`itc`

</td>
<td>test (callback)</td>
<td>

  ```javascript
it('${1:description}', (done) => {
	$0
	done()
})
  ```

</td>
</tr>

<tr>
<td>

`bf`

</td>
<td>before test suite</td>
<td>

  ```javascript
before(() => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`bfe`

</td>
<td>before each test</td>
<td>

  ```javascript
beforeEach(() => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`aft`

</td>
<td>after test suite</td>
<td>

  ```javascript
after(() => {
	$0
})
  ```

</td>
</tr>

<tr>
<td>

`afe`

</td>
<td>after each test</td>
<td>

  ```javascript
afterEach(() => {
	$0
})
  ```

</td>
</tr>
</table>

### Types

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`aia`

</td>
<td>is array</td>
<td>

  ```javascript
Array.isArray($0)
  ```

</td>
</tr>

<tr>
<td>

`tof`

</td>
<td>typeof</td>
<td>

  ```javascript
typeof ${1:value} === '${2|bigint,boolean,function,number,object,symbol,undefined|}'
  ```

</td>
</tr>

<tr>
<td>

`iof`

</td>
<td>instanceof</td>
<td>

  ```javascript
${1:object} instanceof ${0:Class}
  ```

</td>
</tr>

<tr>
<td>

`isnil`

</td>
<td>is nil</td>
<td>

  ```javascript
${1:value} == null
  ```

</td>
</tr>

<tr>
<td>

`nnil`

</td>
<td>is not nil</td>
<td>

  ```javascript
${1:value} != null
  ```

</td>
</tr>

<tr>
<td>

`isnan`

</td>
<td>is NaN</td>
<td>

  ```javascript
isNan($0)
  ```

</td>
</tr>

<tr>
<td>

`nnan`

</td>
<td>is not NaN</td>
<td>

  ```javascript
!isNan($0)
  ```

</td>
</tr>
</table>

### Misc

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`us`

</td>
<td>'use strict' statement</td>
<td>

  ```javascript
'use strict'
  ```

</td>
</tr>

<tr>
<td>

`pse`

</td>
<td>process.server</td>
<td>

  ```javascript
process.server
  ```

</td>
</tr>

<tr>
<td>

`pcl`

</td>
<td>process.client</td>
<td>

  ```javascript
process.client
  ```

</td>
</tr>

<tr>
<td>

`env`

</td>
<td>env variable</td>
<td>

  ```javascript
process.env.$0
  ```

</td>
</tr>

<tr>
<td>

`envv`

</td>
<td>env variable (vite)</td>
<td>

  ```javascript
import.meta.env.$0
  ```

</td>
</tr>
</table>

### Uncategorized
Will be sorted into appropriate categories in the future.
<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`uniq`

</td>
<td>array of unique values</td>
<td>

  ```javascript
[...new Set(${0:array})]
  ```

</td>
</tr>

<tr>
<td>

`pi`

</td>
<td>parse int</td>
<td>

  ```javascript
parseInt(${1:value}, ${2|10,2,8,16|})
  ```

</td>
</tr>

<tr>
<td>

`pf`

</td>
<td>parse float</td>
<td>

  ```javascript
parseFloat(${1:value})
  ```

</td>
</tr>

<tr>
<td>

`am`

</td>
<td>array merge</td>
<td>

  ```javascript
[...${1:arr}$2]
  ```

</td>
</tr>

<tr>
<td>

`om`

</td>
<td>object merge</td>
<td>

  ```javascript
{ ...${1:object}$2 }
  ```

</td>
</tr>

<tr>
<td>

`aat`

</td>
<td>array.at</td>
<td>

  ```javascript
${1:items}.at(${2:0})
  ```

</td>
</tr>

<tr>
<td>

`seq`

</td>
<td>sequence of 0..n</td>
<td>

  ```javascript
[...Array(${1:length}).keys()]
  ```

</td>
</tr>
</table>


## TypeScript specific
Only applied to .ts and .tsx files

### Declarations

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`cat`

</td>
<td>const assignment (typed)</td>
<td>

  ```javascript
const ${1:name}: ${2:string} = ${3:value}
  ```

</td>
</tr>

<tr>
<td>

`lat`

</td>
<td>let assignment (typed)</td>
<td>

  ```javascript
let ${1:name}: ${2:string} = ${3:value}
  ```

</td>
</tr>

<tr>
<td>

`caat`

</td>
<td>array assignment (typed)</td>
<td>

  ```javascript
const ${1:items}: ${2:string}[] = [$0]
  ```

</td>
</tr>

<tr>
<td>

`caot`

</td>
<td>object assignment (typed)</td>
<td>

  ```javascript
const ${1:name}: ${2:object} = { $0 }
  ```

</td>
</tr>
</table>

### Types

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td>

`int`

</td>
<td>interface</td>
<td>

  ```javascript
interface ${1:Model} {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`inte`

</td>
<td>interface extends</td>
<td>

  ```javascript
interface ${1:Model} extends ${2:Base} {
	$0
}
  ```

</td>
</tr>

<tr>
<td>

`tp`

</td>
<td>type</td>
<td>

  ```javascript
type ${1:Model} = $0
  ```

</td>
</tr>

<tr>
<td>

`tpu`

</td>
<td>type union</td>
<td>

  ```javascript
type ${1:Model} = ${2:first} | ${3:second}
  ```

</td>
</tr>

<tr>
<td>

`tpi`

</td>
<td>type intersection</td>
<td>

  ```javascript
type ${1:Model} = ${2:first} & ${3:second}
  ```

</td>
</tr>
</table>
