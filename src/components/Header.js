
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ changerCategorie }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
        <h1>Magasin de Jouets en Peluche</h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => { changerCategorie('accueil'); setIsOpen(false); }}>Accueil</Link>
          </li>
          <li>
            <Link to="/" onClick={() => { changerCategorie('autres'); setIsOpen(false); }}>Autres Jouets</Link>
          </li>
          <li>
            <Link to="/" onClick={() => { changerCategorie('nouveautes'); setIsOpen(false); }}>Nouveautés</Link>
          </li>
          <li>
            <Link to="/" onClick={() => { changerCategorie('promotions'); setIsOpen(false); }}>Promotions</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
