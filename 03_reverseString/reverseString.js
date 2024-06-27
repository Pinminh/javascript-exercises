const reverseString = function (string) {
  if (typeof string !== "string") return "ERROR";

  let reversed = "";

  for (let idx = string.length - 1; idx >= 0; --idx) {
    reversed += string[idx];
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
