// src/components/Catalogue.js

import React from 'react';

const Catalogue = ({ produits, ajouterAuPanier, categorie }) => {
  // Filtrare produse pe baza categoriei
  const filteredProduits = categorie === 'all'
    ? produits
    : produits.filter((produit) => produit.categorie === categorie);

  return (
    <div className="catalogue">
      {filteredProduits.map((produit) => (
        <div key={produit.id} className="produit">
          <img src={produit.image} alt={produit.nom} /> {/* Afișează imaginea produsului */}
          <h3>{produit.nom}</h3>
          <p>{produit.description}</p> {/* Afișează descrierea produsului */}
          <p>Prix: {produit.prix} €</p>
          <button onClick={() => ajouterAuPanier(produit)}>Ajouter au Panier</button>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
