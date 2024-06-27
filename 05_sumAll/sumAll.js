const sumAll = function (from, to) {
  if (typeof from !== 'number' || typeof to !== 'number') return 'ERROR';
  if (from < 0 || to < 0) return 'ERROR';

  if (from > to) [from, to] = [to, from];

  return (from + to) * (to - from + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
