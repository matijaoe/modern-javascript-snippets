# Modern JavaScript Snippets ⚡

    🚧 Work in progress



> Short and memorable JavaScript & TypeScript snippets for the modern-day developer.

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
The following is not mandatory, but provides a nicer experience.

Search for `editor.snippetSuggestions` and `editor.snippetSuggestions` in user settings, or edit the settings.json directly:
```jsonc
// Show snippet suggestions on top of other suggestions.
"editor.snippetSuggestions": "top",

// Tab complete will insert the best matching suggestion when pressing tab.
"editor.tabCompletion": "on"
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

### Declarations

#### `c` &nbsp; - &nbsp; const statement
```js
const $0
```

#### `l` &nbsp; - &nbsp; let statement
```js
let $0
```

#### `ca` &nbsp; - &nbsp; const assignment
```js
const ${1:name} = ${2:value}
```

#### `la` &nbsp; - &nbsp; let assignment
```js
let ${1:name} = ${2:value}
```

#### `cas` &nbsp; - &nbsp; const assignment string
```js
const ${1:name} = '$0'
```

#### `catl` &nbsp; - &nbsp; const assignment string template literal
```js
const ${1:name} = `$0`
```

#### `caa` &nbsp; - &nbsp; const assignment array
```js
const ${1:name} = [$0]
```

#### `cao` &nbsp; - &nbsp; const assignment object
```js
const ${1:name} = { $0 }
```

#### `dob` &nbsp; - &nbsp; destructure object
```js
const { $2 } = ${1:object}
```

#### `dar` &nbsp; - &nbsp; destructure array
```js
const [$2] = ${1:array}
```

### Classes

#### `cs` &nbsp; - &nbsp; class
```js
class ${1:Class} {
  $0
}
```

#### `csc` &nbsp; - &nbsp; class with constructor
```js
class ${1:Class}  {
  constructor($2) {
    $0
  }
}
```

#### `cse` &nbsp; - &nbsp; class extends
```js
class ${1:Class} extends ${2:Base} {
  $0
}
```

#### `csce` &nbsp; - &nbsp; class extends with constructor
```js
class ${1:Class} extends ${2:Base} {
  constructor($3) {
    $0
  }
}
```

#### `met` &nbsp; - &nbsp; method
```js
${1:name}($2) {
  $0
}
```

### Functions

#### `fn` &nbsp; - &nbsp; function
```js
function ${1:name}($2) {,
  $0
}
```

#### `efn` &nbsp; - &nbsp; export function
```js
export function ${1:name}($2) {,
  $0
}
```

#### `nfn` &nbsp; - &nbsp; named arrow function
```js
const ${1:name} = ($2) => {$0}
```

#### `enfn` &nbsp; - &nbsp; export named arrow function
```js
export const ${1:name} = ($2) => {$0}
```

#### `af` &nbsp; - &nbsp; arrow function
```js
($1) => $0
```

#### `afb` &nbsp; - &nbsp; arrow function with body
```js
($1) => {
  $0
}
```

### Console

#### `cl` &nbsp; - &nbsp; console.log
```js
console.log($0)
```

#### `clm` &nbsp; - &nbsp; console.log message
```js
console.log('$0')
```

#### `clo` &nbsp; - &nbsp; console.log object
```js
console.log({ $0 })
```

#### `clc` &nbsp; - &nbsp; console.log from clipboard 
```js
console.log({ $CLIPBOARD })
```

#### `ce` &nbsp; - &nbsp; console.error
```js
console.error($0)
```

#### `cw` &nbsp; - &nbsp; console.warn
```js
console.warn($0)
```

#### `ct` &nbsp; - &nbsp; console.table
```js
console.table($0)
```

#### `cll` &nbsp; - &nbsp; console.log (labeled)
```js
console.log('$1 ->', ${2:$1})
```

#### `cel` &nbsp; - &nbsp; console.error (labeled)
```js
console.error('$1 ->', ${2:$1})
```

#### `cwl` &nbsp; - &nbsp; console.warn (labeled)
```js
console.warn('$1 ->', ${2:$1})
```

### Misc

#### `ce` &nbsp; - &nbsp; fetch
```js
fetch('$1').then(res => res.json())
```

#### `fea` &nbsp; - &nbsp; const assignment fetch
```js
const ${2|data,{ data }|} = await fetch('$1').then(res => res.json())
```

#### `si` &nbsp; - &nbsp; set interval
```js
setInterval(() => {
  $0
}, ${1:delay})
```

#### `st` &nbsp; - &nbsp; set timeout
```js
setTimeout(() => {
  $0
}, ${1:delay})
```

### Imports

#### `im` &nbsp; - &nbsp; import
```js
import { $2 } from '$1'
```

#### `imd` &nbsp; - &nbsp; import default
```js
import $2 from '$1'
```

#### `imda` &nbsp; - &nbsp; import all as
```js
import * as $2 from '$1'
```

#### `ex` &nbsp; - &nbsp; export from
```js
export { $2 } from '$1'
```

#### `exa` &nbsp; - &nbsp; export all from
```js
export * from '$1'
```

#### `exd` &nbsp; - &nbsp; export default
```js
export default $0
```

### Object

#### `oe` &nbsp; - &nbsp; Object.entries
```js
Object.entries(${0:iterable})
```

#### `ofe` &nbsp; - &nbsp; Object.fromEntries
```js
Object.fromEntries(${0:iterable})
```

#### `ok` &nbsp; - &nbsp; Object.keys
```js
Object.keys(${0:iterable})
```

#### `ov` &nbsp; - &nbsp; Object.values
```js
Object.values(${0:iterable})
```

*...and many more (evertyhing will be documented)*
