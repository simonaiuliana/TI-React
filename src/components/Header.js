// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ changerCategorie }) => {
  const [isOpen, setIsOpen] = useState(false); // Starea meniului (deschis/închis)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
        <h1>Magasin de Jouets en Peluche</h1>
      </div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
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
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
