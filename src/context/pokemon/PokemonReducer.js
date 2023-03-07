const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case 'GET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'RESET_POKEMONS':
      return {
        ...state,
        pokemons: [],
      };
    default:
      return state;
  }
};

export default PokemonReducer;
