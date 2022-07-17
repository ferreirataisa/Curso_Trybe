require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Se ao passar o argumento "MLB1615760527", fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Se ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';  
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  test('Se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });
  test('Se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url".', async () => {
    const error = new Error('You must provide an url');
    const response = await fetchItem();
    expect(response).toEqual(error);
  });
});
