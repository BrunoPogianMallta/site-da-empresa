import React from 'react';
import { motion } from 'framer-motion'; // Importar motion do framer-motion
import './css/Technologies.css'; // Importar o arquivo CSS para estilos do componente

const Technologies = () => {
  // Array de objetos representando as tecnologias utilizadas
  const technologies = [
    { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'MongoDB', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
    { name: 'Express.js', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
    { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
    { name: 'PHP', image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' }
    // Adicione mais tecnologias conforme necessário
  ];

  return (
    <div  className="technologies-container">
      <h2 className="technologies-title">Tecnologias Principais</h2>
      <hr />
      <div className="technologies-list">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="technology-item"
            initial={{ y: 50, opacity: 0 }} // Estado inicial (abaixo e invisível)
            animate={{ y: 0, opacity: 1 }} // Animação para o estado final (acima e visível)
            transition={{ duration: 0.5, delay: index * 0.1 }} // Transição suave com atraso escalonado
          >
            <img src={tech.image} alt={tech.name} className="technology-image" />
            <p className="technology-name">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
