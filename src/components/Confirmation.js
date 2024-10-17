// src/components/Confirmation.js
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
              type="text"
              name="numeroTelephone"
              value={formData.numeroTelephone}
              onChange={handleChange}
              required
              pattern="\d{10}" // Acceptă doar numere de telefon cu 10 cifre
              placeholder="0123456789" // Exemplu de număr de telefon
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
                  type="text"
                  name="numeroCarte"
                  value={formData.numeroCarte}
                  onChange={handleChange}
                  required
                  minLength="16" // Asigură că numărul are cel puțin 16 cifre
                  maxLength="16" // Asigură că numărul nu depășește 16 cifre
                  pattern="\d{16}" // Acceptă doar 16 cifre
                  placeholder="XXXX XXXX XXXX XXXX" // Indicație pentru utilizator
                />
              </label>
              <label>
                Code de sécurité:
                <input
                  type="text"
                  name="codeSecurite"
                  value={formData.codeSecurite}
                  onChange={handleChange}
                  required
                  minLength="3" // Asigură că codul are cel puțin 3 cifre
                  maxLength="3" // Asigură că codul nu depășește 3 cifre
                  pattern="\d{3}" // Acceptă doar 3 cifre
                  placeholder="XXX" // Indicație pentru utilizator
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
                  name="emailPayPal"
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
                Entrez votre adresse email à laquelle nous vous enverrons les détails pour effectuer le paiement:
                <input
                  type="email"
                  name="emailVirement"
                  value={formData.email}
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
