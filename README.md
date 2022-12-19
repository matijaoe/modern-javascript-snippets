# Modern JavaScript Snippets ⚡

*Work in progress*

---

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

### Class
#### `cs` &nbsp; - &nbsp; class
```js
class ${1:Class} {
  $0
}
```

#### `cse` &nbsp; - &nbsp; class extends
```js
class ${1:Class} extends ${2:Base} {
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

#### `csce` &nbsp; - &nbsp; class with constructor
```js
class ${1:Class} extends ${2:Base} {
  constructor($3) {
    $0
  }
}
```

### Function
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
const ${1:name} = ($2) => {$0}
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

#### `met` &nbsp; - &nbsp; method
```js
${1:name}($2) {
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
console.log($0)
```

#### `clo` &nbsp; - &nbsp; console.log object
```js
console.log({ $0 })
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
