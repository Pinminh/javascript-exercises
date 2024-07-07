const fibonacci = function (index) {
  index = Number(index);
  if (index < 0) return 'OOPS';
  if (index === 0 || index === 1) return index;
  if (index === 2) return 1;

  let n = Math.floor(index / 2);
  return (index % 2 === 0) ?
    fibonacci(n) * (2 * fibonacci(n + 1) - fibonacci(n)) :
    fibonacci(n + 1) ** 2 + fibonacci(n) ** 2;
};

// Do not edit below this line
module.exports = fibonacci;
