import React from 'react'
import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Footer from './components/layouts/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
