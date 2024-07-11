function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function addAllNumbers(list) {
  return list.reduce((acc, curr) => acc + curr, 0);
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function findLetterInWord(word, letter) {
  return word.includes(letter);
}

module.exports = sum;

