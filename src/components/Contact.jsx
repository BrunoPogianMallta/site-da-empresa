import React, { useState } from 'react';
import './css/Contact.css'; // Importar o arquivo CSS para estilos do formulário de contato
import { motion } from 'framer-motion'; // Importar motion do framer-motion para animações

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    project: '' // Novo campo para "Tem um Projeto?"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário (pode ser implementada posteriormente)
    console.log('Formulário enviado:', formData);
    // Limpar os campos após envio
    setFormData({ name: '', email: '', message: '', project: '' });
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

<h1>Tem um Projeto?</h1> {/* Nova entrada para "Tem um Projeto?" */}
      <h2>Entre em Contato</h2>
      
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="project">Tem um Projeto?</label>
          <input
            type="text"
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
