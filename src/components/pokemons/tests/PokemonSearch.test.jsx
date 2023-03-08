import {
  render,
  screen,
  fireEvent,
} from '../../../test-utils/testing-library-utils';

import PokemonSearch from '../PokemonSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../../pages/Home';
import Pokemon from '../../../pages/Pokemon';

test('On page loading "Clear" button is not visible', () => {
  render(<PokemonSearch />);
  const clearButton = screen.queryByRole('button', { name: /clear/i });

  expect(clearButton).toBeFalsy();
});

test('After listing pokemons, the clear button will be visible', async () => {
  render(<PokemonSearch />);

  const goButton = screen.getByRole('button', { name: /go/i });
  fireEvent.click(goButton);

  const clearButton = await screen.findByRole('button', { name: /clear/i });

  expect(clearButton).toBeTruthy();
});

test('After listing at least one pokemon the dragging instructions will appear', async () => {
  render(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );

  const instructions = await screen.findByRole('heading', { level: 1 });

  expect(instructions).toBeTruthy();
});

test('After listing the 20 pokemons the dragging functionality will be available', async () => {
  render(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );

  const draggingStatus = await screen.findByRole('status');

  expect(draggingStatus).toBeTruthy();
});

test('After listing the 20 pokemons, the items will appear', async () => {
  render(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );

  const goButton = screen.getByRole('button', { name: /go/i });
  fireEvent.click(goButton);

  const bulbasaur = await screen.findByText(/bulbasaur/i);

  expect(bulbasaur).toBeTruthy();
});

test('After selecting a pokemon by its link the "Profile component" will appear', async () => {
  render(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons/:idx' element={<Pokemon />} />
      </Routes>
    </Router>
  );

  const goButton = screen.getByRole('button', { name: /go/i });
  fireEvent.click(goButton);

  const pokemonLinks = await screen.findAllByText(/visit profile/i);

  fireEvent.click(pokemonLinks[1]);

  const backHomeButton = await screen.findByText(/back to search/i);
  fireEvent.click(backHomeButton);

  expect(backHomeButton).toBeTruthy();
});

test('After clicking the "Back to Search" button the "Home" screen will appear', async () => {
  render(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemons/:idx' element={<Pokemon />} />
      </Routes>
    </Router>
  );

  const goButton = screen.getByRole('button', { name: /go/i });
  fireEvent.click(goButton);

  const pokemonLinks = await screen.findAllByText(/visit profile/i);

  fireEvent.click(pokemonLinks[1]);

  const backHomeButton = await screen.findByText(/back to search/i);
  fireEvent.click(backHomeButton);

  expect(goButton).toBeTruthy();
});
