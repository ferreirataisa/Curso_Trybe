const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((elemento) => id.includes(elemento.id)).responsibleFor[0];
  return Object.values(species.find((specie) => specie.id === idAnimal).residents
    .reduce((acc, curr) => {
      if (acc.age > curr.age) {
        return acc;
      }
      return curr;
    }));
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
