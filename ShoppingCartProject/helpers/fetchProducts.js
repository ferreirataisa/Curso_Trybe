const fetchProducts = async (products) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;
  try {
  // Aguardamos a promise do fetch ser resolvida
  const promiseFetch = await fetch(endpoint);
  // Aguardamos a promise do json ser resolvida
  const data = await promiseFetch.json();
  // console.log(data.results);
  return data.results;
  } catch (error) {
  // Caso algo aconteça e nossa requisição não seja realizada com sucesso, capturamos e retornamos essa exceção.
  return error;
  }
};
// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
