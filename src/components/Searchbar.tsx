import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component { 
  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        const input = event.target as HTMLInputElement;
        // Logique de recherche ou traitement des données
        console.log('Recherche :', input.value);
        // Réinitialisation du champ de recherche
        input.value = '';
      }
  }
  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Rechercher..." />
        <button type="button" onClick={() => window.location.reload()}>Valider</button>
      </div>
    );
  }
}

export default SearchBar;
