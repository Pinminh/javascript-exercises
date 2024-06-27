const palindromes = function (words) {
  if (typeof words !== 'string') return 'ERROR';

  const punctuations = [',', '.', ' ', '!'];
  let string = words.split('').filter(c => !punctuations.includes(c)).join('').toLowerCase();
  let reversed = string.split('').reverse().join('');

  return string == reversed;
};

// Do not edit below this line
module.exports = palindromes;
