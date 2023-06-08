import React from 'react';
import './navbar.css';
import SearchBar from './Searchbar';

class Navbar extends React.Component {
    render() {
      return (
        <nav>
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Logo</a></li>
            <li><SearchBar /></li>
            <li><a href="#">Magasins</a></li>
            <li><a href="#">Compte</a></li>
            <li><a href="#">Panier</a></li>
          </ul>
        </nav>
      );
    }
  }

export default Navbar;