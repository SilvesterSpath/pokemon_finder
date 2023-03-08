import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Pokemon from './pages/Pokemon';
import Alert from './components/layout/Alert';
import { PokemonProvider } from './context/pokemon/PokemonContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <PokemonProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/pokemons/:idx' element={<Pokemon />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </PokemonProvider>
  );
}

export default App;
