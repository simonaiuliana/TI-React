// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import Panier from './components/Panier';
import Confirmation from './components/Confirmation';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [produits, setProduits] = useState([]);
  const [panier, setPanier] = useState([]);
  const [total, setTotal] = useState(0);
  const [categorie, setCategorie] = useState('accueil');

  useEffect(() => {
    fetch('/produits.json')
      .then((res) => res.json())
      .then((data) => setProduits(data));
  }, []);

  const changerCategorie = (categorie) => {
    setCategorie(categorie);
    console.log(`Categorie sélectionnée: ${categorie}`);
  };

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
        <Header changerCategorie={changerCategorie} />
        <Routes>
          <Route path="/" element={
            <>
              <Catalogue produits={produits} ajouterAuPanier={ajouterAuPanier} categorie={categorie} />
              <div className="container">
                <Panier panier={panier} total={total} enleverDuPanier={enleverDuPanier} />
              </div>
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<Confirmation soumettreCommande={soumettreCommande} />} />
        </Routes>
        <Footer isContactPage={window.location.pathname === '/contact'} />
      </div>
    </Router>
  );
}

export default App;
