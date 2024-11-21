# `nth-arg`

`nth-arg` is a utility function that returns a higher-order function to apply a given function to the nth argument of a function's argument list. It allows you to easily work with specific arguments in a function by targeting their index, including support for negative indices, similar to `Array.prototype.at`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Currying](#currying)
  - [Negative Indices](#negative-indices)
- [API](#api)
- [License](#license)

## Installation

You can install `nth-arg` using npm or yarn:

```bash
npm install nth-arg
```

or

```bash
yarn add nth-arg
```

## Usage

### Basic Usage

You can directly provide a function and use `nth-arg` to apply it to the nth argument:

```javascript
const nth = require('nth-arg');

const getSecondArg = nth(1, x => x * 2);
console.log(getSecondArg(5, 10, 15)); // Output: 20
```

### Currying

If you don't provide a function, `nth-arg` will return a curried function that allows you to specify the function later:

```javascript
const applyToThird = nth(2);
const getThirdArgLength = applyToThird(arg => arg.length);
console.log(getThirdArgLength('a', 'bb', 'ccc')); // Output: 3
```

### Negative Indices

`nth-arg` supports negative indices, which work similarly to `Array.prototype.at`, letting you access arguments from the end:

```javascript
const getLastArg = nth(-1, x => x.toUpperCase());
console.log(getLastArg('hello', 'world')); // Output: 'WORLD'
```

## API

### `nth(n, [fn])`

Returns a function that applies `fn` to the nth argument of a function's argument list.

- **n** (`number`): The index of the argument in the arguments array to apply `fn` to. Supports negative indices.
- **fn** (`function` | `undefined`): The function to be applied to the nth argument. If not provided, a curried version of the function is returned.

#### Returns:
- If `fn` is provided, returns a function that applies `fn` to the nth argument.
- If `fn` is not provided, returns a curried function that takes a function and applies it to the nth argument.

### Example

```javascript
// Basic usage with provided function
const getSecondArg = nth(1, x => x * 2);
console.log(getSecondArg(5, 10, 15)); // Output: 20

// Currying usage
const applyToThird = nth(2);
const getThirdArgLength = applyToThird(arg => arg.length);
console.log(getThirdArgLength('a', 'bb', 'ccc')); // Output: 3

// Using negative indices
const getLastArg = nth(-1, x => x.toUpperCase());
console.log(getLastArg('hello', 'world')); // Output: 'WORLD'
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.