function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a / b;
}

function addAllNumbers(list) {
  return list.reduce((acc, curr) => acc + curr, 0);
}

function factorial(n) {
  if (n === 0) {
    return 0;
  }
  return n * factorial(n - 1);
}

function findLetterInWord(letter, word) {
  return word.includes(letter);
}

module.exports = sum;

