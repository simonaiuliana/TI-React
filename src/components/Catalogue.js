import React, { useState } from 'react';

const Catalogue = ({ produits, ajouterAuPanier }) => {
  return (
    <div className="catalogue">
      {produits.map((produit) => (
        <div key={produit.id} className="produit">
          <img src={produit.image} alt={produit.nom} />
          <h3>{produit.nom}</h3>
          <p>{produit.description}</p>
          <p>{produit.prix} €</p>
          <button onClick={() => ajouterAuPanier(produit)}>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
