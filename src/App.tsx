import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/navbar/Navbar';
import Categorie from './components/header/categorie/Categorie';
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';

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
