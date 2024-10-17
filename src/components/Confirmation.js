import React, { useState } from 'react';

const Confirmation = ({ soumettreCommande }) => {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    soumettreCommande({ nom, adresse });
  };

  return (
    <div className="confirmation">
      <h2>Confirmation de commande</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label>
        <label>
          Adresse:
          <input
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            required
          />
        </label>
        <button type="submit">Soumettre la commande</button>
      </form>
    </div>
  );
};

export default Confirmation;
