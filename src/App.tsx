import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Categorie from './components/Categorie';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Categorie />
      <HomePage/>
    </>
  );
}

export default App;
