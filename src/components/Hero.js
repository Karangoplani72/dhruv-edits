import React from "react";
import Slider from "react-slick";
import "./Hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true, // Show prev/next arrows
    pauseOnHover: true,
  };

  return (
    <section className="hero">
      <Slider {...settings} className="hero-slider">
        {images.map((img, index) => (
          <div key={index} className="hero-slide">
            <img src={img} alt={`Slide ${index + 1}`} className="hero-image" />
            <div className="hero-overlay">
              <h1>DhruvEdits</h1>
              <p>Crafting cinematic stories, transforming your memories into unforgettable edits.</p>
              <div className="hero-buttons">
                <a href="#portfolio" className="btn-primary">View Portfolio</a>
                <a href="#contact" className="btn-secondary">Get in Touch</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Hero;
