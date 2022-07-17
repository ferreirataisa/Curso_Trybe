const data = require('../data/zoo_data');

const { species, hours } = data;

// Função que recebe um animal como parâmetro e retorna os dias disponíveis para visitação.
function animalDay(animalname) {
  return species.find((element) => element.name === animalname).availability;
}
// console.log(animalDay('lions'));

const arrayOfSpecies = species.map((specie) => specie.name);

const day = (schedule, scheduleTarget) => {
  const dayObject = {};
  dayObject[scheduleTarget] = schedule[scheduleTarget];
  return dayObject;
};

// Se "Monday" for passado por parâmetro, deverá informar que o zoológico está fechado

const mondayClosed = () => {
  const alerta = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return alerta;
};
// console.log(mondayClosed());

const dayWeek = Object.keys(hours);
// console.log(dayWeek);

const schedule = dayWeek.reduce((acc, curr) => {
  acc[curr] = {
    officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
    exhibition: species.filter((animal) => animal
      .availability.includes(curr)).map((element) => element.name),
  };
  return acc;
}, {});

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return mondayClosed();

  if (dayWeek.includes(scheduleTarget)) return day(schedule, scheduleTarget);

  if (arrayOfSpecies.includes(scheduleTarget)) return animalDay(scheduleTarget);

  return Object.assign(schedule, mondayClosed());
}

module.exports = getSchedule;
