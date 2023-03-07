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

  const { name, sprites, location_area_encounters, is_default } = pokemon;

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
                {/*  <p>{user.login}</p> */}
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {/*                 {user.login}
                <div className='ml-2 mr-1 badge badge-success'>{type}</div> */}
                {is_default && (
                  <div className='mx-1 badge badge-info'>Default</div>
                )}
              </h1>
              {/* <p>{bio}</p> */}
              <div className='mt-4 card-actions'>
                {/* This is an outside link so I need to define the target and the noreferrer */}
                <a
                  href={location_area_encounters}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
