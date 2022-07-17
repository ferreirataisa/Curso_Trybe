const data = require('../data/zoo_data');

const { employees, species } = data;

const animalsId = (id) => species.find((animal) => animal.id === id);

const validateParameter = (parametro) => {
  const idEmployee = employees.map((employee) => employee.id);
  const employeeName = employees.map((employee) => employee.firstName);
  const employeeLastName = employees.map((employee) => employee.lastName);
  if (idEmployee.includes(parametro)) {
    return employees.find((employee) => employee.id === parametro);
  }
  if (employeeName.includes(parametro)) {
    return employees.find((employee) => employee.firstName === parametro);
  }
  if (employeeLastName.includes(parametro)) {
    return employees.find((employee) => employee.lastName === parametro);
  }
  return null;
};

const employeeCoverage = (employee) => {
  const { responsibleFor } = employee;
  const speciesEmployee = responsibleFor.map((idAnimal) => animalsId(idAnimal));
  const coverage = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesEmployee.map((animal) => animal.name),
    locations: speciesEmployee.map((animal) => animal.location),
  };
  return coverage;
};

const getAllEmployees = () => {
  const result = [];
  employees.forEach((employee) => {
    result.push(employeeCoverage(employee));
  });
  return result;
};

const getEmployee = (parametro) => {
  const result = validateParameter(parametro);
  if (result !== null) {
    return employeeCoverage(result);
  }
  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(parametro) {
  if (parametro === undefined) {
    return getAllEmployees();
  }
  return getEmployee(Object.values(parametro)[0]);
}

module.exports = getEmployeesCoverage;

// Busque as informações sobre a pessoa colaboradora e por quais espécies ela é responsável
// --> pessoa colaboradora (employees)

// --> species,

// getEmployeesCoverage ({ name: nome ou sobrenome, id: id da pessoa })

// getEmployeesCoverage({ name: nome ou sobrenome }) - usar o if (aceita o firstname ou lastname)

// getEmployeesCoverage({ id }) - usar outro if

// getEmployeesCoverage() - retorna um Array

// getEmployeesCoverage({ id invalido }) - retorna um erro

// - primeiro verificamos se tem algum parametro
// - segundo verifica o id (se não existir retorna um erro)
// - terceiro nome/sobrenome
