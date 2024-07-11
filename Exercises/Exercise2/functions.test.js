const { sum, subtract, multiply, addAllNumbers, factorial, findLetterInWord } = require('./functions');

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  // Add more tests for sum
});

describe('subtract', () => {
  test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });
  // Add more tests for subtract
});

describe('multiply', () => {
  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  // Add more tests for multiply
});

describe('addAllNumbers', () => {
  test('adds all numbers in [1, 2, 3] to equal 6', () => {
    expect(addAllNumbers([1, 2, 3])).toBe(6);
  });
  // Add more tests for addAllNumbers
});

describe('factorial', () => {
  test('factorial of 5 to equal 120', () => {
    expect(factorial(5)).toBe(120);
  });
  // Add more tests for factorial
});

describe('findLetterInWord', () => {
  test('finds letter "a" in word "apple"', () => {
    expect(findLetterInWord('apple', 'a')).toBe(true);
  });
  // Add more tests for findLetterInWord
});