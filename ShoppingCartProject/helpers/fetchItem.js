const fetchItem = async (ItemID) => {
  const endpoint = `https://api.mercadolibre.com/items/${ItemID}`;
  try {
    const promiseFetch = await fetch(endpoint);
    const data = await promiseFetch.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
// fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}