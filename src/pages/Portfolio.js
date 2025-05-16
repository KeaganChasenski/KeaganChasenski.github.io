import React from 'react';
import Header from '../components/Header';
import './Portfolio.css';

const Portfolio = () => {
  const images = [
    {
      id: 1,
      src: '/path/to/image1.jpg',
      alt: 'Project 1',
      title: 'Project Title 1',
      description: 'Project description 1',
    },
    // Add more images here
  ];

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <div className="gallery-container">
          <h1>My Portfolio</h1>
          <div className="gallery">
            {images.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
