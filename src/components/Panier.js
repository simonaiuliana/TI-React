
import React from 'react';

const Panier = ({ panier, total, enleverDuPanier }) => {
  return (
    <div className="panier">
      <h2>Votre Panier</h2>
      {panier.length === 0 ? (
        <p className="vide-message">Votre panier est vide</p>
      ) : (
        <div>
          {panier.map((item) => (
            <div className="item" key={item.id}>
              {/* Affiche l'image du produit */}
              <img src={item.image} alt={item.nom} />
              <span>
                {item.nom} x {item.quantité}
              </span>
              <button onClick={() => enleverDuPanier(item.id)}>Enlever</button>
            </div>
          ))}
          <div className="total">
            <h3>Total: {total} €</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;
