// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link

const Header = ({ setShowContact }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="img/logo.png" alt="Logo de Magasin" />
        <h1>Magasin de Jouets en Peluche</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Accueil</Link></li> {/* Buton pentru Accueil */}
          <li><Link to="#jouets">Autres Jouets</Link></li>
          <li><Link to="#nouveautes">Nouveautés</Link></li>
          <li><Link to="#promotions">Promotions</Link></li>
          <li><Link to="/contact" onClick={() => setShowContact(true)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
