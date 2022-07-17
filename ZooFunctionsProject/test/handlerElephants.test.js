const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Se o parâmetro for count, retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Se o parâmetro for names, retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Se o parâmetro for averageAge, retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Se o parâmetro for location, retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Se o parâmetro for popularity, retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Se o parâmetro for availability, retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Se o parâmetro não for definido, retorna Undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Se o parâmetro não for uma string, retorna parâmetro inválido', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Se o parâmetro for uma string que não contempla uma funcionalidade, deve retornar null', () => {
    expect(handlerElephants('sapo')).toBe(null);
  });
});
