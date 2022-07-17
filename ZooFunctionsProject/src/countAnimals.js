const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const animais = species.reduce((acc, curr) => {
    const result = {};
    const especie = curr.name;
    result[especie] = curr.residents.length;
    return Object.assign(acc, result);
  }, {});
  if (!animal) {
    return animais;
  }
  if (!animal.sex) {
    return animais[animal.specie];
  }
  return species.find((specie) => specie.name === animal.specie)
    .residents.reduce((acc, curr) => {
      let contador = acc;
      if (curr.sex === animal.sex) contador += 1;
      return contador;
    }, 0);
}

module.exports = countAnimals;

// Ref - Object.assign: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
