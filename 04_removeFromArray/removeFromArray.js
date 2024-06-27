const removeFromArray = function (array, ...values) {
  if (!(array instanceof Array)) return [];

  return array.filter(v => !values.includes(v));
};

// Do not edit below this line
module.exports = removeFromArray;
