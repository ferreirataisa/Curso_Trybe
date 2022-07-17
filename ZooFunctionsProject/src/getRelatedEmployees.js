const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((elemento) => elemento.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const colaboradores = employees.filter((item) => item.managers.includes(managerId));
    return colaboradores.map((nomes) => `${nomes.firstName} ${nomes.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
