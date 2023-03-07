import { useContext, useEffect, useRef, useState } from 'react';
import Spinner from '../layout/Spinner';
import PokemonItem from './PokemonItem';
import PokemonContext from '../../context/pokemon/PokemonContext';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

function PokemonResults() {
  const { pokemons, loading } = useContext(PokemonContext);
  const [pokemons_, setPokemons] = useState([]);

  useEffect(() => {
    if (pokemons && pokemons.length > 0) {
      setPokemons(pokemons);
    }
    if (pokemons.length === 0) {
      setPokemons([]);
    }
  }, [pokemons]);

  if (loading) {
    return <Spinner />;
  }

  const handleDragEnd = (e) => {
    const pokemons2 = [...pokemons_];
    const idx1 = pokemons2.findIndex((i) => i.name === e.active.id);
    const idx2 = pokemons2.findIndex((i) => i.name === e.over.id);
    [pokemons2[idx1], pokemons2[idx2]] = [pokemons2[idx2], pokemons2[idx1]];
    setPokemons(pokemons2);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        <SortableContext items={pokemons}>
          {pokemons.map(
            (item, idx) =>
              item &&
              item.name && (
                <PokemonItem key={item.name} pokemon={item} idx={idx + 1} />
              )
          )}
        </SortableContext>
      </div>
    </DndContext>
  );
}

export default PokemonResults;
