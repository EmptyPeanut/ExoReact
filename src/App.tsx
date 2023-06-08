import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Categorie from './components/Categorie';

function App() {
  return (
    <div>
      <h1>Mon Application</h1>
      <Navbar />
      <Categorie />
    </div>
  );
}

export default App;
