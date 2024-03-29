import { useState, useContext } from 'react';
import PokemonContext from '../../context/pokemon/PokemonContext';
import Spinner from '../layout/Spinner';

function PokemonSearch() {
  const { error, pokemons, loading, searchPokemons, resetPokemons } =
    useContext(PokemonContext);

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    searchPokemons(text);
    setTitle('You can rearrange the order of the Pokémons by dragging them');
    setText('');
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-6'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            {error && error.length !== 0 && (
              <div>Please choose a real pokemon!</div>
            )}
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-20 bg-gray-200 input input-lg text-black'
                placeholder='Search for a pokémon or list 20..'
                value={text}
                onChange={handleChange}
              />

              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none width-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {pokemons.length !== 0 && (
        <div>
          <button
            className='btn btn-ghost btn-lg'
            onClick={() => {
              resetPokemons();
            }}
          >
            Clear
          </button>
        </div>
      )}
      <h1>{pokemons.length !== 0 ? title : ''}</h1>
    </div>
  );
}

export default PokemonSearch;
