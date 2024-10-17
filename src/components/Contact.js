import React, { useState } from 'react';


const Contact = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState(''); // Adaugă starea pentru email
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`);
    // Poți adăuga logica pentru a trimite mesajul aici
    setNom(''); // Resetează câmpul de nume
    setEmail(''); // Resetează câmpul de email
    setMessage(''); // Resetează câmpul de mesaj
  };

  return (
    <div className="contact">
      <h2>Contactez-nous</h2>
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
          Email:
          <input
            type="email" // Setează tipul de input ca email
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      
    </div>
  );
};

export default Contact;
