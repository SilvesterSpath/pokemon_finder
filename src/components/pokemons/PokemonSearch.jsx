import { useState, useContext } from 'react';
import PokemonContext from '../../context/pokemon/PokemonContext';
import Spinner from '../layout/Spinner';

function PokemonSearch() {
  const { pokemons, loading, searchPokemons, resetPokemons } =
    useContext(PokemonContext);

  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    searchPokemons(text);
    setText('');
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search for.. or list 20 pokemons'
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
              console.log('reset');
              resetPokemons();
            }}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default PokemonSearch;
