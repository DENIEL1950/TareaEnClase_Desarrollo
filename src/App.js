import React from 'react';
import './App.css';
import Navigation from './components/Navigation';

// Importa estilos y temas de PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// Importa componentes de las páginas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Data from './pages/Data'; // Importa la página Data

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation /> {/* Renderiza la barra de navegación en la parte superior */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta para la página inicial */}
          <Route path="/About" element={<About />} /> {/* Ruta para la página About */}
          <Route path="/Contact" element={<Contact />} /> {/* Ruta para la página Contact */}
          <Route path="/Data" element={<Data />} /> {/* Ruta para la página Data */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
