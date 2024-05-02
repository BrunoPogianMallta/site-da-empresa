import React from 'react';
import { Link } from 'react-router-dom';
import './css/Services.css';

const Services = ({ services }) => {
  return (
    <div className="services-container">
      <h2  className="services-title">Nossos Serviços</h2>
      <hr />
      <div className="service-list">
        {/* Verifica se services é um array válido antes de mapear */}
        {Array.isArray(services) && services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-details">
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Services;
