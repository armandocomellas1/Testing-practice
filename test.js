'use strict';
const stringLength = require('./main');
const reverseString = require('./second');
const Calculator = require('./calculator');
const capitalize = require('./capitalize');

test('string length is 7', () => {
  expect(stringLength('Armando')).toBe(7);
});

test('expect string as an output', () => {
  expect(reverseString('Armando')).toBe('string');
});

describe('calulcator', () => {
  test('add expect = 2 + 3 = 5', () => {
    const newCalc = new Calculator(2, 3);
    expect(newCalc.add()).toBe(5);
  });
  test('add expect = 3 - 2 = 1', () => {
    const newCalc = new Calculator(2, 3);
    expect(newCalc.substract()).toBe(1);
  });
  test('add expect = 3 / 2 = 1.5', () => {
    const newCalc = new Calculator(2, 3);
    expect(newCalc.divide()).toBe(1.5);
  });
  test('add expect = 2 * 3 = 6', () => {
    const newCalc = new Calculator(2, 3);
    expect(newCalc.multiply()).toBe(6);
  });
});

test('expect a stgring as input', () => {
  expect(capitalize('armando')).toBe('Armando');
});
