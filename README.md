# is-odd
As you can guess it's fun package that allows you to do next:
> Returns true if the given number is odd, and is an integer that does not exceed the JavaScript MAXIMUM_SAFE_INTEGER.

# Install
```
npm install --save @lab-code/is-odd
```

# Usage
Works with strings and numbers.

```
const isOdd = require('@lab-code/is-odd');

console.log(isOdd('1')); // true
console.log(isOdd('3')); // true

console.log(isOdd(0)); // false
console.log(isOdd(2)); // false
```




