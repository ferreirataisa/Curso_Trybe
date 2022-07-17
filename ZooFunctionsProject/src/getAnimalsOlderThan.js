const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.find((animals) => animals.name === animal)
    .residents.every((idade) => idade.age >= age);
}

console.log(getAnimalsOlderThan('tigers', 5));

module.exports = getAnimalsOlderThan;
