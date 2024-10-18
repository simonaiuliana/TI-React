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
      .then((data) => {
        // Presupunem că produsele au un câmp quantiteDisponible în JSON
        setProduits(data);
      });
  }, []);

  const changerCategorie = (categorie) => {
    setCategorie(categorie);
    console.log(`Categorie sélectionnée: ${categorie}`);
  };

  const ajouterAuPanier = (produit) => {
    const exist = panier.find((item) => item.id === produit.id);
    if (exist) {
      // Verifică dacă există stoc disponibil
      if (exist.quantité + 1 <= produit.quantiteDisponible) {
        setPanier(panier.map((item) =>
          item.id === produit.id ? { ...exist, quantité: exist.quantité + 1 } : item));
        setTotal(total + produit.prix);
      } else {
        alert('Pas assez de stock disponible pour ce produit.'); // Mesaj de eroare
      }
    } else {
      // Verifică dacă există stoc disponibil
      if (produit.quantiteDisponible > 0) {
        setPanier([...panier, { ...produit, quantité: 1 }]);
        // Actualizează stocul disponibil
        setProduits(produits.map(item => 
          item.id === produit.id ? { ...item, quantiteDisponible: item.quantiteDisponible - 1 } : item
        ));
        setTotal(total + produit.prix);
      } else {
        alert('Pas assez de stock disponible pour ce produit.'); // Mesaj de eroare
      }
    }
  };

  const enleverDuPanier = (id) => {
    const item = panier.find((item) => item.id === id);
    setPanier(panier.filter((item) => item.id !== id));
    setTotal(total - item.prix * item.quantité);
    
    // Reînnoie stocul atunci când un produs este scos din coș
    setProduits(produits.map(prod => 
      prod.id === id ? { ...prod, quantiteDisponible: prod.quantiteDisponible + item.quantité } : prod
    ));
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
      
      </div>
      <Footer />
    </Router>
   
  );
}

export default App;
