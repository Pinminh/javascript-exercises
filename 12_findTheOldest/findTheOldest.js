const findTheOldest = function (persons) {
  let copy = [...persons];
  const CURRENT_YEAR = 2021;

  const getAge = function (person) {
    if (person.yearOfDeath === undefined)
      return CURRENT_YEAR - person.yearOfBirth;
    return person.yearOfDeath - person.yearOfBirth;
  }

  copy.sort((a, b) => (getAge(b) - getAge(a)));
  return copy[0];
};

// Do not edit below this line
module.exports = findTheOldest;
