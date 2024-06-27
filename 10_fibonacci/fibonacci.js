const fibonacci = function (index) {
  index = Number(index);
  
  if (index < 0) return 'OOPS';

  const fibs = [0, 1];
  for (let idx = 2; idx <= index; ++idx)
    fibs[idx] = fibs[idx - 1] + fibs[idx - 2];

  return fibs[index];
};

// Do not edit below this line
module.exports = fibonacci;
