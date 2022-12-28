# Modern JavaScript Snippets ⚡

> Short and memorable JavaScript & TypeScript snippets for the modern-day developer. 

<br>

  🚧 *Still a work in progress. Some snippets may be changed or removed, and many more will be added.*

## Features
- Contains over **180** snippets
- Modern JavaScript syntax
- Strategically placed tabstops
- Auto-generated documentation
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
Most of the code snippets are without semicolons (`;`), except for where it allows for better tabstop management.

It's highly recommended to use these snippets along with Prettier/ESLint to have your code automatically formatted to your preference.

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

<!-- START:docs-gen -->
## Snippets


### Assignments

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>c</code></td>
<td>const</td>
<td>

  ```javascript
const $0
  ```

</td>
</tr>

<tr>
<td><code>l</code></td>
<td>let</td>
<td>

  ```javascript
let $0
  ```

</td>
</tr>

<tr>
<td><code>ca</code></td>
<td>const assignment</td>
<td>

  ```javascript
const $1 = $2;
  ```

</td>
</tr>

<tr>
<td><code>la</code></td>
<td>let assignment</td>
<td>

  ```javascript
let $1 = $2;
  ```

</td>
</tr>

<tr>
<td><code>cas</code></td>
<td>const string assignment</td>
<td>

  ```javascript
const $1 = '$2';
  ```

</td>
</tr>

<tr>
<td><code>car</code></td>
<td>const array assignment</td>
<td>

  ```javascript
const $1 = [$0]
  ```

</td>
</tr>

<tr>
<td><code>cao</code></td>
<td>const object assignment</td>
<td>

  ```javascript
const $1 = { $0 }
  ```

</td>
</tr>

<tr>
<td><code>dob</code></td>
<td>object destructuring</td>
<td>

  ```javascript
const { $0 } = ${1:object}
  ```

</td>
</tr>

<tr>
<td><code>dar</code></td>
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
<td><code>if</code></td>
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
<td><code>ifel</code></td>
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
<td><code>ifei</code></td>
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
<td><code>el</code></td>
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
<td><code>ei</code></td>
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
<td><code>ter</code></td>
<td>ternary operator</td>
<td>

  ```javascript
$1 ? $2 : $3
  ```

</td>
</tr>

<tr>
<td><code>tera</code></td>
<td>ternary expression assignment</td>
<td>

  ```javascript
const ${1:name} = $2 ? $3 : $4
  ```

</td>
</tr>

<tr>
<td><code>sw</code></td>
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
<td><code>cas</code></td>
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
<td><code>tc</code></td>
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
<td><code>tcf</code></td>
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
<td><code>tf</code></td>
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
<td><code>fn</code></td>
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
<td><code>fna</code></td>
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
<td><code>nfn</code></td>
<td>named arrow function</td>
<td>

  ```javascript
const ${1} = ($2) => {$0}
  ```

</td>
</tr>

<tr>
<td><code>nfna</code></td>
<td>async named arrow function</td>
<td>

  ```javascript
const ${1:name} = async ($2) => {$0}
  ```

</td>
</tr>

<tr>
<td><code>af</code></td>
<td>arrow function</td>
<td>

  ```javascript
($1) => $0
  ```

</td>
</tr>

<tr>
<td><code>afa</code></td>
<td>async arrow function</td>
<td>

  ```javascript
async ($1) => $0
  ```

</td>
</tr>

<tr>
<td><code>afb</code></td>
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
<td><code>afba</code></td>
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
<td><code>iife</code></td>
<td>immediately-invoked function expression</td>
<td>

  ```javascript
(($1) => {
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
<td><code>fl</code></td>
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
<td><code>rfl</code></td>
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
<td><code>flr</code></td>
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
<td><code>fin</code></td>
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
<td><code>fof</code></td>
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
<td><code>fofa</code></td>
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
<td><code>wl</code></td>
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
<td><code>cs</code></td>
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
<td><code>cse</code></td>
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
<td><code>csc</code></td>
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
<td><code>csec</code></td>
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
<td><code>ctor</code></td>
<td>class constructor</td>
<td>

  ```javascript
constructor($1) {$0}
  ```

</td>
</tr>

<tr>
<td><code>get</code></td>
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
<td><code>set</code></td>
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
<td><code>gs</code></td>
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
<td><code>met</code></td>
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
<td><code>meta</code></td>
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
<td><code>fet</code></td>
<td>fetch</td>
<td>

  ```javascript
fetch('$1'$2).then(res => res.json())
  ```

</td>
</tr>

<tr>
<td><code>feta</code></td>
<td>fetch assignment</td>
<td>

  ```javascript
const ${1|data,{ data }|} = await fetch('$2'$3).then(res => res.json())
  ```

</td>
</tr>

<tr>
<td><code>pr</code></td>
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
<td><code>prs</code></td>
<td>Promise.resolve</td>
<td>

  ```javascript
Promise.resolve($1)
  ```

</td>
</tr>

<tr>
<td><code>prj</code></td>
<td>Promise.reject</td>
<td>

  ```javascript
Promise.reject($1)
  ```

</td>
</tr>

<tr>
<td><code>then</code></td>
<td>promise then()</td>
<td>

  ```javascript
$1.then((${2:value}) => $0)
  ```

</td>
</tr>

<tr>
<td><code>catch</code></td>
<td>promise catch()</td>
<td>

  ```javascript
$1.catch((${2:err}) => $0)
  ```

</td>
</tr>

<tr>
<td><code>thenc</code></td>
<td>promise then().catch()</td>
<td>

  ```javascript
$1.then((${2:value}) => $3).catch((${4:err}) => $5)
  ```

</td>
</tr>

<tr>
<td><code>pra</code></td>
<td>Promise.all</td>
<td>

  ```javascript
Promise.all($1)
  ```

</td>
</tr>

<tr>
<td><code>prsa</code></td>
<td>Promise.allSettled</td>
<td>

  ```javascript
Promise.allSettled($1)
  ```

</td>
</tr>

<tr>
<td><code>pran</code></td>
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
<td><code>im</code></td>
<td>import from module</td>
<td>

  ```javascript
import { $2 } from '${1:module}';
  ```

</td>
</tr>

<tr>
<td><code>imd</code></td>
<td>import default</td>
<td>

  ```javascript
import $2 from '${1:module}';
  ```

</td>
</tr>

<tr>
<td><code>ima</code></td>
<td>import as</td>
<td>

  ```javascript
import ${2:*} as ${3:name} from '${1:module}';
  ```

</td>
</tr>

<tr>
<td><code>imf</code></td>
<td>import file</td>
<td>

  ```javascript
import '$1';
  ```

</td>
</tr>

<tr>
<td><code>imp</code></td>
<td>import dynamic</td>
<td>

  ```javascript
import('$0')
  ```

</td>
</tr>

<tr>
<td><code>impa</code></td>
<td>await import dynamic</td>
<td>

  ```javascript
await import('$0')
  ```

</td>
</tr>

<tr>
<td><code>ime</code></td>
<td>import meta env</td>
<td>

  ```javascript
import.meta.env.$0
  ```

</td>
</tr>

<tr>
<td><code>ex</code></td>
<td>export</td>
<td>

  ```javascript
export $0
  ```

</td>
</tr>

<tr>
<td><code>exd</code></td>
<td>export default</td>
<td>

  ```javascript
export default $0
  ```

</td>
</tr>

<tr>
<td><code>exf</code></td>
<td>export from</td>
<td>

  ```javascript
export { $0 } from '${1:module}';
  ```

</td>
</tr>

<tr>
<td><code>exa</code></td>
<td>export all from</td>
<td>

  ```javascript
export * from '${1:module}';
  ```

</td>
</tr>

<tr>
<td><code>exo</code></td>
<td>export object</td>
<td>

  ```javascript
export const ${1:name} = { $0 }
  ```

</td>
</tr>

<tr>
<td><code>efn</code></td>
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
<td><code>edfn</code></td>
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
<td><code>enfn</code></td>
<td>export named arrow function</td>
<td>

  ```javascript
export const ${1:name} = ($2) => {$0}
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
<td><code>fe</code></td>
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
<td><code>map</code></td>
<td>Array.map()</td>
<td>

  ```javascript
$1.map((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td><code>reduce</code></td>
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
<td><code>reduce-right</code></td>
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
<td><code>filter</code></td>
<td>Array.filter()</td>
<td>

  ```javascript
$1.filter((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td><code>find</code></td>
<td>Array.find()</td>
<td>

  ```javascript
$1.find((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td><code>every</code></td>
<td>Array.every()</td>
<td>

  ```javascript
$1.every((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td><code>some</code></td>
<td>Array.some()</td>
<td>

  ```javascript
$1.some((${2:item}) => ${3})
  ```

</td>
</tr>

<tr>
<td><code>reverse</code></td>
<td>Array.reverse()</td>
<td>

  ```javascript
$1.reverse()
  ```

</td>
</tr>

<tr>
<td><code>map-string</code></td>
<td>Array.map() as string</td>
<td>

  ```javascript
$1.map(String)
  ```

</td>
</tr>

<tr>
<td><code>map-number</code></td>
<td>Array.map() as number</td>
<td>

  ```javascript
$1.map(Number)
  ```

</td>
</tr>

<tr>
<td><code>filter-true</code></td>
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
<td><code>oe</code></td>
<td>Object.entries</td>
<td>

  ```javascript
Object.entries($0)
  ```

</td>
</tr>

<tr>
<td><code>ofe</code></td>
<td>Object.fromEntries</td>
<td>

  ```javascript
Object.fromEntries($0)
  ```

</td>
</tr>

<tr>
<td><code>ok</code></td>
<td>Object.keys</td>
<td>

  ```javascript
Object.keys($0)
  ```

</td>
</tr>

<tr>
<td><code>ov</code></td>
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
<td><code>re</code></td>
<td>return</td>
<td>

  ```javascript
return $0
  ```

</td>
</tr>

<tr>
<td><code>reo</code></td>
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
<td><code>rei</code></td>
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
<td><code>or</code></td>
<td>OR (||)</td>
<td>

  ```javascript
|| $0
  ```

</td>
</tr>

<tr>
<td><code>and</code></td>
<td>AND (&&)</td>
<td>

  ```javascript
&& $0
  ```

</td>
</tr>

<tr>
<td><code>nc</code></td>
<td>nullish coalescing (??)</td>
<td>

  ```javascript
?? $0
  ```

</td>
</tr>

<tr>
<td><code>eq</code></td>
<td>strict equality (===)</td>
<td>

  ```javascript
=== $0
  ```

</td>
</tr>

<tr>
<td><code>ore</code></td>
<td>logical OR expression</td>
<td>

  ```javascript
$1 || $0
  ```

</td>
</tr>

<tr>
<td><code>ande</code></td>
<td>logical AND expression</td>
<td>

  ```javascript
$1 && $0
  ```

</td>
</tr>

<tr>
<td><code>nce</code></td>
<td>nullish coalescing expression (??)</td>
<td>

  ```javascript
$1 ?? $0
  ```

</td>
</tr>

<tr>
<td><code>eqe</code></td>
<td>strict equality expression</td>
<td>

  ```javascript
$1 === $0
  ```

</td>
</tr>

<tr>
<td><code>ora</code></td>
<td>logical OR assignment (||=)</td>
<td>

  ```javascript
$1 ||= $0
  ```

</td>
</tr>

<tr>
<td><code>nca</code></td>
<td>nullish coalescing assignment (??=)</td>
<td>

  ```javascript
$1 ??= $0
  ```

</td>
</tr>

<tr>
<td><code>inc</code></td>
<td>addition assignment</td>
<td>

  ```javascript
$1 += ${0:1}
  ```

</td>
</tr>

<tr>
<td><code>sub</code></td>
<td>subtraction assignment</td>
<td>

  ```javascript
$1 -= ${0:1}
  ```

</td>
</tr>

<tr>
<td><code>mul</code></td>
<td>multiplication assignment</td>
<td>

  ```javascript
$1 *= ${0:1}
  ```

</td>
</tr>

<tr>
<td><code>div</code></td>
<td>division assignment</td>
<td>

  ```javascript
$1 /= ${0:1}
  ```

</td>
</tr>

<tr>
<td><code>ol</code></td>
<td>object literal</td>
<td>

  ```javascript
{ $1: $0 }
  ```

</td>
</tr>

<tr>
<td><code>al</code></td>
<td>array literal</td>
<td>

  ```javascript
[$0]
  ```

</td>
</tr>

<tr>
<td><code>tl</code></td>
<td>template literal</td>
<td>

  ```javascript
`$0`
  ```

</td>
</tr>

<tr>
<td><code>tlo</code></td>
<td>template literal operation</td>
<td>

  ```javascript
${$1}$0
  ```

</td>
</tr>

<tr>
<td><code>tle</code></td>
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
<td><code>cl</code></td>
<td>console.log</td>
<td>

  ```javascript
console.log($0)
  ```

</td>
</tr>

<tr>
<td><code>ci</code></td>
<td>console.info</td>
<td>

  ```javascript
console.info($1)
  ```

</td>
</tr>

<tr>
<td><code>cdi</code></td>
<td>console.dir</td>
<td>

  ```javascript
console.dir($1)
  ```

</td>
</tr>

<tr>
<td><code>ce</code></td>
<td>console.error</td>
<td>

  ```javascript
console.error($1)
  ```

</td>
</tr>

<tr>
<td><code>cw</code></td>
<td>console.warn</td>
<td>

  ```javascript
console.warn($1)
  ```

</td>
</tr>

<tr>
<td><code>ct</code></td>
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
<td><code>ctb</code></td>
<td>console.table</td>
<td>

  ```javascript
console.table($1)
  ```

</td>
</tr>

<tr>
<td><code>clr</code></td>
<td>console.clear</td>
<td>

  ```javascript
console.clear()
  ```

</td>
</tr>

<tr>
<td><code>clm</code></td>
<td>console.log message</td>
<td>

  ```javascript
console.log('$0')
  ```

</td>
</tr>

<tr>
<td><code>clo</code></td>
<td>console.log object</td>
<td>

  ```javascript
console.log({ $0 })
  ```

</td>
</tr>

<tr>
<td><code>clc</code></td>
<td>console.log clipboard</td>
<td>

  ```javascript
console.log({ $CLIPBOARD })
  ```

</td>
</tr>

<tr>
<td><code>cll</code></td>
<td>console.log (labeled)</td>
<td>

  ```javascript
console.log('$1 ->', $1$2)
  ```

</td>
</tr>

<tr>
<td><code>cel</code></td>
<td>console.error (labeled)</td>
<td>

  ```javascript
console.error('$1 ->', $1$2)
  ```

</td>
</tr>

<tr>
<td><code>cwl</code></td>
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
<td><code>si</code></td>
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
<td><code>st</code></td>
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
<td><code>sim</code></td>
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
<td><code>nt</code></td>
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
<td><code>jp</code></td>
<td>JSON parse</td>
<td>

  ```javascript
JSON.parse(${1:json})
  ```

</td>
</tr>

<tr>
<td><code>js</code></td>
<td>JSON stringify</td>
<td>

  ```javascript
JSON.stringify(${1:value})
  ```

</td>
</tr>

<tr>
<td><code>jsp</code></td>
<td>JSON stringify (pretty)</td>
<td>

  ```javascript
JSON.stringify(${1:value}, null, 2)
  ```

</td>
</tr>

<tr>
<td><code>jss</code></td>
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
<td><code>qs</code></td>
<td>query selector</td>
<td>

  ```javascript
${1:document}.querySelector('$2')
  ```

</td>
</tr>

<tr>
<td><code>qsa</code></td>
<td>query selector all</td>
<td>

  ```javascript
${1:document}.querySelectorAll('$2')
  ```

</td>
</tr>

<tr>
<td><code>qsaa</code></td>
<td>query selector all as array</td>
<td>

  ```javascript
[...${1:document}.querySelectorAll('$2')]
  ```

</td>
</tr>

<tr>
<td><code>ael</code></td>
<td>event listener</td>
<td>

  ```javascript
${1:document}.addEventListener('${2:click}', (e$3) => $0)
  ```

</td>
</tr>

<tr>
<td><code>qsae</code></td>
<td>query selector with event listener</td>
<td>

  ```javascript
${1:document}.querySelector('$2')?.addEventListener('${3:click}', (e$4) => $0)
  ```

</td>
</tr>

<tr>
<td><code>gid</code></td>
<td>get element by id</td>
<td>

  ```javascript
${1:document}.getElementById('$2')
  ```

</td>
</tr>

<tr>
<td><code>on</code></td>
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
<td><code>nd</code></td>
<td>new Date()</td>
<td>

  ```javascript
new Date($1)
  ```

</td>
</tr>

<tr>
<td><code>now</code></td>
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
<td><code>desc</code></td>
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
<td><code>cont</code></td>
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
<td><code>it</code></td>
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
<td><code>ita</code></td>
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
<td><code>itc</code></td>
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
<td><code>bf</code></td>
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
<td><code>bfe</code></td>
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
<td><code>aft</code></td>
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
<td><code>afe</code></td>
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
<td><code>aia</code></td>
<td>is array</td>
<td>

  ```javascript
Array.isArray($0)
  ```

</td>
</tr>

<tr>
<td><code>tof</code></td>
<td>typeof</td>
<td>

  ```javascript
typeof ${1:value} === '${2|bigint,boolean,function,number,object,symbol,undefined|}'
  ```

</td>
</tr>

<tr>
<td><code>iof</code></td>
<td>instanceof</td>
<td>

  ```javascript
${1:object} instanceof ${0:Class}
  ```

</td>
</tr>

<tr>
<td><code>isnil</code></td>
<td>is nil</td>
<td>

  ```javascript
${1:value} == null
  ```

</td>
</tr>

<tr>
<td><code>nnil</code></td>
<td>is not nil</td>
<td>

  ```javascript
${1:value} != null
  ```

</td>
</tr>

<tr>
<td><code>isnan</code></td>
<td>is NaN</td>
<td>

  ```javascript
isNan($0)
  ```

</td>
</tr>

<tr>
<td><code>nnan</code></td>
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
<td><code>us</code></td>
<td>'use strict' statement</td>
<td>

  ```javascript
'use strict'
  ```

</td>
</tr>

<tr>
<td><code>pse</code></td>
<td>process.server</td>
<td>

  ```javascript
process.server
  ```

</td>
</tr>

<tr>
<td><code>pcl</code></td>
<td>process.client</td>
<td>

  ```javascript
process.client
  ```

</td>
</tr>

<tr>
<td><code>env</code></td>
<td>env variable</td>
<td>

  ```javascript
process.env.$0
  ```

</td>
</tr>

<tr>
<td><code>envv</code></td>
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
<td><code>uniq</code></td>
<td>array of unique values</td>
<td>

  ```javascript
[...new Set($0)]
  ```

</td>
</tr>

<tr>
<td><code>pi</code></td>
<td>parse int</td>
<td>

  ```javascript
parseInt($1, ${2|10,2,8,16|})
  ```

</td>
</tr>

<tr>
<td><code>pf</code></td>
<td>parse float</td>
<td>

  ```javascript
parseFloat($1)
  ```

</td>
</tr>

<tr>
<td><code>am</code></td>
<td>array merge</td>
<td>

  ```javascript
[...$1]
  ```

</td>
</tr>

<tr>
<td><code>om</code></td>
<td>object merge</td>
<td>

  ```javascript
{ ...$1 }
  ```

</td>
</tr>

<tr>
<td><code>aat</code></td>
<td>array.at</td>
<td>

  ```javascript
$1.at(${2:0})
  ```

</td>
</tr>

<tr>
<td><code>seq</code></td>
<td>sequence of 0..n</td>
<td>

  ```javascript
[...Array(${1:length}).keys()]
  ```

</td>
</tr>
</table>


## TypeScript
Available only in .ts and .tsx files

### Declarations

<table>

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>cat</code></td>
<td>const assignment (typed)</td>
<td>

  ```javascript
const $1: ${2:string} = $3
  ```

</td>
</tr>

<tr>
<td><code>lat</code></td>
<td>let assignment (typed)</td>
<td>

  ```javascript
let $1: ${2:string} = $3
  ```

</td>
</tr>

<tr>
<td><code>caat</code></td>
<td>array assignment (typed)</td>
<td>

  ```javascript
const $1: ${2:string}[] = [$0]
  ```

</td>
</tr>

<tr>
<td><code>caot</code></td>
<td>object assignment (typed)</td>
<td>

  ```javascript
const $1: ${2:object} = { $0 }
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
<td><code>int</code></td>
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
<td><code>inte</code></td>
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
<td><code>tp</code></td>
<td>type</td>
<td>

  ```javascript
type ${1:Model} = $0
  ```

</td>
</tr>

<tr>
<td><code>tpu</code></td>
<td>type union</td>
<td>

  ```javascript
type ${1:Model} = $2 | $3
  ```

</td>
</tr>

<tr>
<td><code>tpi</code></td>
<td>type intersection</td>
<td>

  ```javascript
type ${1:Model} = $2 & $3
  ```

</td>
</tr>
</table>

<!-- END:docs-gen -->

--- 
## Running locally

```bash
# ensure Deno is installed
# https://deno.land/manual@v1.29.1/getting_started/installation

# generate .code-snippets and documentation
npm run generate
```
