// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Schimbă Switch cu Routes
import Catalogue from './components/Catalogue';
import Panier from './components/Panier';
import Confirmation from './components/Confirmation';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [produits, setProduits] = useState([]);
  const [panier, setPanier] = useState([]);
  const [total, setTotal] = useState(0);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    fetch('/produits.json')
      .then((res) => res.json())
      .then((data) => setProduits(data));
  }, []);

  const ajouterAuPanier = (produit) => {
    const exist = panier.find((item) => item.id === produit.id);
    if (exist) {
      setPanier(panier.map((item) =>
        item.id === produit.id ? { ...exist, quantité: exist.quantité + 1 } : item));
    } else {
      setPanier([...panier, { ...produit, quantité: 1 }]);
    }
    setTotal(total + produit.prix);
  };

  const enleverDuPanier = (id) => {
    const item = panier.find((item) => item.id === id);
    setPanier(panier.filter((item) => item.id !== id));
    setTotal(total - item.prix * item.quantité);
  };

  const soumettreCommande = (details) => {
    alert(`Commande confirmée pour ${details.nom} à l'adresse ${details.adresse}`);
    setPanier([]);
    setTotal(0);
  };

  return (
    <Router>
      <div className="App">
        <Header setShowContact={setShowContact} />
        <Routes>
          <Route path="/" element={
            <>
              <Catalogue produits={produits} ajouterAuPanier={ajouterAuPanier} />
              <div className="container">
                <Panier panier={panier} total={total} enleverDuPanier={enleverDuPanier} />
                <Confirmation soumettreCommande={soumettreCommande} />
              </div>
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          {/* Adaugă aici rutele pentru alte pagini dacă este necesar */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
