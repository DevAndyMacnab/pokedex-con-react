//Parte de la API que nos buscara la informacion de un pokemon especifico
export const searchPokemon = async (pokemon) => {
  try {
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(urlPokemon);
    const data = await response.json();
    return data;
  } catch (error) {}
};


//Parte de la API donde se establece la cantidad de pokemones que queremos mostrar en conjunto en cada paginacion
export const getPokemons = async (limit = 24, offset = 0) => {
  try {
    let urlAmount = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(urlAmount);
    const data = await response.json();
    return data;
  } catch (error) {}
};


//Parte de la API que nos envia los datos de los pokemones, como el nombre, tipo o ID
export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};