import React from 'react';


const Footer = ({ isContactPage }) => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Magasin de Jouets en Peluche. Tous droits réservés.</p>
      <p><a href="#conditions">Conditions d'utilisation</a> | <a href="#politique">Politique de confidentialité</a></p>
    </footer>
  );
};

export default Footer;
