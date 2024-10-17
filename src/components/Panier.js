// src/components/Panier.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Panier = ({ panier, total, enleverDuPanier }) => {
  const navigate = useNavigate(); // Utilisez useNavigate ici

  const handleConfirmationClick = () => {
    navigate('/confirmation'); // Naviguer vers la page de confirmation
  };

  return (
    <div className="panier">
      <h2>Panier</h2>
      {panier.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        panier.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.nom} />
            <span>{item.nom}</span>
            <span>{item.quantité}</span>
            <span>{item.prix} €</span>
            <button onClick={() => enleverDuPanier(item.id)}>Enlever</button>
          </div>
        ))
      )}
      <div className="total">
        Total: {total} €
      </div>
      <button onClick={handleConfirmationClick} className="confirm-order-button">Confirmation de Commande</button>
    </div>
  );
};

export default Panier;
