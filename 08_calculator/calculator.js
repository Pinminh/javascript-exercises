const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  let sum = 0;
  for (let num of nums)
    sum += num;
  return sum;
};

const multiply = function (nums) {
  let prod = 1;
  for (let num of nums)
    prod *= num;
  return prod;
};

const power = function (b, e) {
  let result = 1;
  for (let count = 0; count < e; ++count)
    result *= b;
  return result;
};

const factorial = function (n) {
  let fact = 1;
  if (n === 0) return fact;
  for (let mul = 1; mul <= n; ++mul)
    fact *= mul;
  return fact;
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
