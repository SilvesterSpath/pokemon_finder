import { CgPokemon } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function PokemonItem({ pokemon: { name, url }, idx }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: name, url: url });

  const regex = /\/(\d+)\/$/;
  const match = url.match(regex);
  let number;
  if (match) {
    number = match[1];
  }

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: isDragging ? '2px solid green' : 'none', // add green border when dragging
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className='card shadow-md compact side bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body'>
          <div className='rounded-full shadow w-25 h-25'>
            <CgPokemon style={{ fontSize: '40px' }} />
          </div>
          <div></div>
          <div>
            <h2 className='card-title'>{name}</h2>
            <Link
              to={`/pokemons/${name}`}
              className='text-base-content text-opacity-40'
            >
              Visit Profile
            </Link>
          </div>
        </div>
        <div style={{ textAlign: 'right', margin: '5px', fontWeight: 'bold' }}>
          {number}
        </div>
      </div>
    </div>
  );
}

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonItem;
