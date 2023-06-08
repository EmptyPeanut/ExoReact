import React from 'react';
import './categorie.css';

class Categorie extends React.Component {
  render() {
    return (
      <div className="row-container">
        <div className="circle">
          <h3>Femme</h3>
        </div>
        <div className="circle">
          <h3>Homme</h3></div>
        <div className="circle">
          <h3>Fille</h3></div>
        <div className="circle">
          <h3>Garçon</h3></div>
        <div className="circle">
          <h3>Bébé</h3></div>
        <div className="circle">
          <h3>Puériculture</h3></div>
        <div className="circle">
          <h3>Maison</h3></div>
        <div className="circle">
          <h3>Jouets</h3></div>
      </div>
    );
  }
}

export default Categorie;