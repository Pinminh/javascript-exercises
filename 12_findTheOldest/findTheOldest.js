const CURRENT_YEAR = 2021;

const getAge = function (person) {
  if (person.yearOfDeath === undefined)
    return CURRENT_YEAR - person.yearOfBirth;
  return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (persons) {
  if (persons.length <= 0) return null;

  let initialPerson = persons[0];

  return persons.reduce((oldest, current) =>
    (getAge(oldest) > getAge(current) ? oldest : current),
    initialPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
