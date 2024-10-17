// src/components/Confirmation.js
import React, { useState } from 'react';

const Confirmation = ({ soumettreCommande }) => {
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    email: '',
    numeroTelephone: '',
    methodePaiement: '',
    numeroCarte: '',
    codeSecurite: '',
    dateConfirmation: null,
  });
  const [commandeSoumise, setCommandeSoumise] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soumettreCommande(formData);
    setCommandeSoumise(true);
    setFormData((prevData) => ({
      ...prevData,
      dateConfirmation: new Date().toLocaleString(),
    }));
  };

  return (
    <div className="confirmation">
      <h2>Confirmation de Commande</h2>
      {!commandeSoumise ? (
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Adresse:
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Adresse e-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Numéro de téléphone:
            <input
              type="number"
              name="numeroTelephone"
              value={formData.numeroTelephone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Méthode de paiement:
            <select
              name="methodePaiement"
              value={formData.methodePaiement}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez une méthode</option>
              <option value="carteBancaire">Carte de crédit</option>
              <option value="paypal">PayPal</option>
              <option value="virementBancaire">Virement bancaire</option>
            </select>
          </label>

          {formData.methodePaiement === 'carteBancaire' && (
            <>
              <label>
                Numéro de carte:
                <input
                  type="number"
                  name="numeroCarte"
                  value={formData.numeroCarte}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Code de sécurité:
                <input
                  type="number"
                  name="codeSecurite"
                  value={formData.codeSecurite}
                  onChange={handleChange}
                  required
                />
              </label>
            </>
          )}

          {formData.methodePaiement === 'paypal' && (
            <>
              <label>
                Email PayPal:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </>
          )}

          {formData.methodePaiement === 'virementBancaire' && (
            <>
              <label>
              Entrez votre adresse email à laquelle nous vous enverrons les détails pour effectuer le paiement.
                <input
                  type="email"
                  name="email"
                  value={formData.numeroTelephone}
                  onChange={handleChange}
                  required
                />
              </label>
            </>
          )}

          <button type="submit">Envoyer la Commande</button>
        </form>
      ) : (
        <div className="confirmation-message">
          <h3>Commande Confirmée!</h3>
          <p>Votre paiement a été enregistré.</p>
          <p>Commande passée le: {formData.dateConfirmation}</p>
        </div>
      )}
    </div>
  );
};

export default Confirmation;
