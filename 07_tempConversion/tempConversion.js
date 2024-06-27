const convertToCelsius = function (fahrenheit) {
  if (typeof fahrenheit !== 'number') return 'ERROR';

  let celsius = (fahrenheit - 32) / 1.8;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  if (typeof celsius !== 'number') return 'ERROR';

  let fahrenheit = 1.8 * celsius + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
