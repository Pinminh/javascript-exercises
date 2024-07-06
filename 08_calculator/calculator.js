const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((sum, value) => (sum + value), 0);
};

const multiply = function (nums) {
  return nums.reduce((mul, value) => (mul * value), 1);
};

const power = function (b, e) {
  return multiply(Array(e).fill(b));
};

const factorial = function (n) {
  return multiply(Object.keys(Array(n + 1).fill(1)).slice(1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
