import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Categorie from './components/Categorie';
import HomePage from './pages/HomePage';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Categorie />
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
