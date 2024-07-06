const palindromes = function (words) {
  let isAlphaNum = char => "abcdefghijklmnopqrstuvwxyz0123456789".includes(char);
  let alphanum = words.toLowerCase().split("").filter(isAlphaNum);
  return alphanum.join() === alphanum.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;
