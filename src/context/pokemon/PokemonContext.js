import { createContext, useReducer } from 'react';
import PokemonReducer from './PokemonReducer';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const initialState = {
    pokemons: [],
    pokemon: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  // Get search results
  const searchPokemons = async (text) => {
    setLoading();

    if (text.length === 0) {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
      );

      // destructuring the results
      const { results } = await res.json();

      dispatch({
        type: 'GET_POKEMONS',
        payload: results,
      });
    } else {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`);

        // this is destructuring the data.items
        const results = await res.json();

        console.log(results);

        dispatch({
          type: 'GET_POKEMONS',
          payload: [results],
        });
      } catch (error) {
        dispatch({
          type: 'ERROR',
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
        setTimeout(() => dispatch({ type: 'REMOVE_ERROR' }), 3000);
        /*  window.location = '/notfound'; */
      }
    }
  };

  // Get search results
  const getPokemon = async (idx) => {
    setLoading();

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idx}`);

    if (res.status === 404) {
      window.location = '/notfound';
    } else {
      // this is destructuring the data.items
      const data = await res.json();

      dispatch({
        type: 'GET_POKEMON',
        payload: data,
      });
    }
  };

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  // Reset pokemons
  const resetPokemons = () => {
    dispatch({
      type: 'RESET_POKEMONS',
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        ...state,
        searchPokemons,
        resetPokemons,
        getPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
