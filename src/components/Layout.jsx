import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Layout.css';
import pgLogo from '../assets/logo2.png';
import Banner from './Banner';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para rolar suavemente para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`layout ${isScrolled ? 'scrolled' : ''}`}>
      <Banner />
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          {/* Utilizando um button ao invés de Link para tratar o evento onClick */}
          <button className="logo-btn" onClick={scrollToTop}>
            <img src={pgLogo} alt="Logo" className="highlighted-logo" />
          </button>
        </div>
        <nav className="nav">
          <ul>
            <li><a href=""></a><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#technologies">Tecnologias</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
