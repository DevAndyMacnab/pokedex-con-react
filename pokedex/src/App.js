//IMPORTACION DE MODULOS
import React from 'react';
import "./style.css";
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Pokedex from './components/pokedex';
import {getPokemonData, getPokemons, searchPokemon} from "./api";
import Footer from './components/footer';
const { useState, useEffect } = React;



//Se encarga de actualizar las variables conforme se vayan modificando durante la ejecucion
export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  //Se encarga de mostrar todo el grid de pokemones en caso no se haya buscado ninguno
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 24));
      setNotFound(false);
    } catch (err) {}
  };
  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  
//Agrega la funcionalidad del Searchbar
  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  //Mostrar la barra de navegacion, searchbar y el footer
  return (
      <div>
        <Navbar />
        <div className="App">
          <Searchbar onSearch={onSearch} />
          {notFound ? (
            <div className="not-found-text">
              El Pokemon ingresado no se encuentra...
            </div>
          ) : (
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
          )}
        </div>
        <Footer />
      </div>
    
  );
}
