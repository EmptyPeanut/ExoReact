import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component { 
  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Rechercher..." />
        <button type="button" className="monboutonnoir"onClick={() => window.location.reload()}>Valider</button>
      </div>
    );
  }
}

export default SearchBar;
