import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
    render() {
      return (
        <nav>
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Logo</a></li>
            <li><a href="#">Barre de recherche</a></li>
            <li><a href="#">Magasins</a></li>
            <li><a href="#">Compte</a></li>
            <li><a href="#">Panier</a></li>
          </ul>
        </nav>
      );
    }
  }

export default Navbar;