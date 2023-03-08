import { FaCodepen } from 'react-icons/fa';
import { GiBodyHeight, GiWeight } from 'react-icons/gi';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PokemonContext from '../context/pokemon/PokemonContext';
import Spinner from '../components/layout/Spinner';

function Pokemon() {
  const { pokemon, loading, getPokemon } = useContext(PokemonContext);
  const { idx } = useParams();

  useEffect(() => {
    getPokemon(idx);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    sprites,
    is_default,
    height,
    weight,
    base_experience,
    species,
  } = pokemon;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to={'/'} className='btn btn-ghost'>
            Back to Search
          </Link>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image bm-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={sprites && sprites.front_default} alt='img' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{name}</h2>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {is_default && (
                  <div className='mx-1 badge badge-info'>Default</div>
                )}
              </h1>
              {species && (
                <div className='stat'>
                  <div className='stat-title text-md'>Species url</div>
                  <div className='text-lg stat-value'>
                    <a href={`${species.url}`} target='_blank' rel='noreferrer'>
                      {species.name}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <GiBodyHeight className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Height</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>{height}</div>
          </div>
          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <GiWeight className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Weight</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>{weight}</div>
          </div>
          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaCodepen className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Base Experience</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {base_experience}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
