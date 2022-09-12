import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/layouts/Footer';
import NavbarScroll from './components/layouts/NavbarScroll';
import Home from './components/pages/Home';
import Parceiros from './components/pages/Parceiros';
import Transparencia from './components/pages/Transparencia';
import ModulosEducacionais from './components/pages/ModulosEducacionais';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarScroll />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/parceiros" element={<Parceiros/>}/>
          <Route path="/transparencia" element={<Transparencia/>}/>
          <Route path="/modulosEducacionais" element={<ModulosEducacionais/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
