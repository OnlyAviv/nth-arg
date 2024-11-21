const getNthArgument = require('.');
const { describe, test } = require('node:test');
const assert = require('node:assert');

describe('getNthArgument', () => {
    test('applies the function to the nth argument (positive index)', () => {
        const double = getNthArgument(1, x => x * 2);
        assert.strictEqual(double(5, 10, 15), 20);
    });

    test('applies the function to the nth argument (negative index)', () => {
        const toUpper = getNthArgument(-1, x => x.toUpperCase());
        assert.strictEqual(toUpper('hello', 'world'), 'WORLD');
    });

    test('returns undefined when n is out of bounds', () => {
        const toUpper = getNthArgument(10, x => x?.toUpperCase());
        assert.strictEqual(toUpper('a', 'b'), undefined);
    });

    test('returns a curried function when fn is not provided', () => {
        const applyToSecond = getNthArgument(1);
        const getLength = applyToSecond(arg => arg.length);
        assert.strictEqual(getLength('hello', 'world'), 5);
    });

    test('supports curried function with negative index', () => {
        const applyToLast = getNthArgument(-1);
        const getLastArgSquared = applyToLast(arg => arg ** 2);
        assert.strictEqual(getLastArgSquared(2, 3, 4), 16);
    });

    test('handles edge case with empty arguments', () => {
        const toUpper = getNthArgument(0, x => x?.toUpperCase());
        assert.strictEqual(toUpper(), undefined);
    });

    test('handles edge case with null and undefined arguments', () => {
        const getType = getNthArgument(1, x => typeof x);
        assert.strictEqual(getType('test', null, undefined), 'object');
    });

    test('correctly processes arrays passed as arguments', () => {
        const getThirdArg = getNthArgument(2, x => x.join('-'));
        assert.strictEqual(getThirdArg(1, 2, [3, 4, 5]), '3-4-5');
    });

    test('handles non-integer indices gracefully', () => {
        const getNth = getNthArgument(1.7, x => x * 2); // Floored index
        assert.strictEqual(getNth(10, 20, 30), 40);
    });
});
