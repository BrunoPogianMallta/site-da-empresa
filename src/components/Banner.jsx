// src/components/Banner.js
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Banner.css';
import custosVideo from '../assets/custos.mp4';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const items = [
    { type: 'video', src: 'https://www.aoatechpartners.com/assets/videos-home/TopCollaborationSmall.mp4', message: 'Alcance seus objetivos digitais por uma fração do custo' },
    { type: 'video', src: custosVideo, message: 'Economia de custos de 50% em comparação a soluções digitais nacionais' },
    { type: 'video', src: 'https://www.aoatechpartners.com/assets/videos-home/TimeLapseSmall.mp4', message: 'Execução ágil para agilizar o desenvolvimento' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, // Avança para o próximo slide a cada 8 segundos (8000ms)
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex)
  };

  return (
    <div className="banner-container">
      <Slider ref={sliderRef} {...settings} className="banner-slider">
        {items.map((item, index) => (
          <div key={index}>
            {item.type === 'video' ? (
              <video autoPlay loop muted className="banner-video">
                <source src={item.src} type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            ) : (
              <img src={item.src} alt={`Banner Item ${index}`} className="banner-image" />
            )}
          </div>
        ))}
      </Slider>
      <div className="banner-content">

        <div  className="banner-text">
          <h2>{items[currentIndex].message}</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
