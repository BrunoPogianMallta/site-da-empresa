import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SystemCreationImage from '../assets/sistema-web.png';
import IdeasImage from '../assets/ideias.jpeg';
import WebsiteCreationImage from '../assets/criacao-web-site.png';
import HostingImage from '../assets/criacao-web-site.png';
import Services from './Services';
import './css/Home.css';

const Home = () => {
  const services = [
    {
      title: 'Criação de Sistemas',
      image: SystemCreationImage,
      description: 'Desenvolvemos sistemas personalizados para atender às necessidades específicas do seu negócio.'
    },
    {
      title: 'Criação de Web Sites',
      image: WebsiteCreationImage,
      description: 'Construímos websites modernos e responsivos para promover sua presença online de forma eficaz.'
    },
    {
      title: 'Hospedagem e Domínios',
      image: HostingImage,
      description: 'Oferecemos soluções de hospedagem confiáveis e registro de domínio para manter seu site acessível e seguro.'
    },
    {
      title: 'SEO Otimizado',
      image: HostingImage,
      description: 'Melhore o desempenho do seu site com nossas soluções de SEO.'
    }
  ];

  const handleMenuClick = (id) => {
    const section = document.getElementById(id);
    if (section) {

      // Calcular a nova posição (subir 10px por padrão)
      let targetPosition = section.offsetTop - 100;

      // Verificar se o link clicado é o link de "Contato"
      if (id === 'contact') {
        // Se for o link de "Contato", subir a página em 100px
        targetPosition = section.offsetTop +500;
      }

      // Fazer a rolagem suave para a nova posição
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Adicionar evento de clique aos links do menu
    const menuLinks = document.querySelectorAll('.nav a');
    menuLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = link.getAttribute('href').substring(1);
        handleMenuClick(id);
      });
    });

    // Limpar os event listeners ao desmontar o componente
    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener('click', (event) => {
          event.preventDefault();
          const id = link.getAttribute('href').substring(1);
          handleMenuClick(id);
        });
      });
    };
  }, []); // Executado apenas uma vez ao montar o componente

  return (
    <div>
      <motion.h1
        className="intro-title"
        // id="home" 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Transformando Ideias em Tecnologia
      </motion.h1>

      <motion.div
        className="intro-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="intro-flex-container">
          <img src={IdeasImage} alt="Ideias em Tecnologia" className="intro-image" />
          <div className="intro-text">
            <p>
              Somos uma empresa especializada em transformar ideias em soluções tecnológicas. Valorizamos o seu tempo, oferecendo serviços ágeis e eficientes que economizam recursos e custos para o seu negócio.
            </p>
            <p>
              Nossos serviços são acessíveis e inovadores, proporcionando tecnologias de ponta que impulsionam o crescimento e o sucesso online da sua empresa. Explore abaixo ou entre em contato para saber mais.
            </p>
          </div>
        </div>
      </motion.div>

      <section id="services" className="section">
        <Services services={services} />
      </section>
      
      {/* Seções com âncoras para navegação */}
      <section id="technologies" className="section">
        {/* Conteúdo das Tecnologias */}
      </section>
      <section id="contact" className="section">
        {/* Conteúdo do Contato */}
      </section>
    </div>
  );
}

export default Home;
