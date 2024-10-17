// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ changerCategorie }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
        <h1>Magasin de Jouets en Peluche</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" onClick={() => changerCategorie('accueil')}>Accueil</Link>
          </li>
          <li>
            <Link to="/" onClick={() => changerCategorie('autres')}>Autres Jouets</Link>
          </li>
          <li>
            <Link to="/" onClick={() => changerCategorie('nouveautes')}>Nouveautés</Link>
          </li>
          <li>
            <Link to="/" onClick={() => changerCategorie('promotions')}>Promotions</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
