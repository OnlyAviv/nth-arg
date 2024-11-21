/**
 * Returns a higher-order function that applies the given function to the nth argument of the arguments array.
 * @function nth
 * @template T,U
 * @param {number} n - The index of the argument in the arguments array to be passed to the function. Supports negative indices like `Array.prototype.at`.
 * @param {(function(T): U)=} fn - The function to be applied to the nth argument. If not provided, a curried version of the function is returned.
 * @returns {((...args: T[]) => U) | ((fn: (arg: T) => U) => (...args: T[]) => U)} 
 * - If `fn` is provided, returns a function that applies `fn` to the nth argument.
 * - If `fn` is not provided, returns a curried function that takes a function and applies it to the nth argument.
 *
 * @example
 * // Basic usage with provided function
 * const getSecondArg = nth(1, x => x * 2);
 * console.log(getSecondArg(5, 10, 15)); // Output: 20
 *
 * @example
 * // Currying usage
 * const applyToThird = nth(2);
 * const getThirdArgLength = applyToThird(arg => arg.length);
 * console.log(getThirdArgLength('a', 'bb', 'ccc')); // Output: 3
 *
 * @example
 * // Using negative indices
 * const getLastArg = nth(-1, x => x.toUpperCase());
 * console.log(getLastArg('hello', 'world')); // Output: 'WORLD'
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at Array.prototype.at}
 */
module.exports = (n, fn) => fn ? (...args) => fn(args.at(n)) : fn => (...args) => fn(args.at(n));
