
import React from 'react';

const Catalogue = ({ produits, ajouterAuPanier, categorie }) => {
 
  const filteredProduits = categorie === 'all'
    ? produits
    : produits.filter((produit) => produit.categorie === categorie);

  return (
    <div className="catalogue">
      {filteredProduits.map((produit) => (
        <div key={produit.id} className="produit">
          <img src={produit.image} alt={produit.nom} /> {/* img */}
          <h3>{produit.nom}</h3>
          <p>{produit.description}</p> {/*description*/}
          <p>Prix: {produit.prix} €</p>
          <p>Stock disponible: {produit.quantiteDisponible} unités</p> {/*stock*/}

          <button 
            onClick={() => ajouterAuPanier(produit)} 
            disabled={produit.quantiteDisponible <= 0} 
          >
            Ajouter au Panier
          </button>

          {/*out off stock */}
          {produit.quantiteDisponible <= 0 && <p style={{ color: 'red' }}>Rupture de stoc</p>}
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
