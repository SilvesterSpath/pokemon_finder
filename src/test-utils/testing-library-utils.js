import { render } from '@testing-library/react';
import { PokemonProvider } from '../context/pokemon/PokemonContext';

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: PokemonProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
