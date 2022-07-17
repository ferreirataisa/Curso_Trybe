const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((id) => ids.includes(id.id));
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
