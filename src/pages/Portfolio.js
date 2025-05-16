import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import './Portfolio.css';

const Portfolio = () => {
  const images = [
    {
      id: 1,
      src: '/path/to/image1.jpg',
      alt: 'Project 1',
      title: 'Project Title 1',
      description: 'A web application built with React and Node.js.',
      category: 'Wildlife', // Corrected spelling for consistency
    },
    {
      id: 2,
      src: '/path/to/image2.jpg',
      alt: 'Project 2',
      title: 'Graphic Design Showcase',
      description: 'Branding materials and logo designs.',
      category: 'People',
    },
    {
      id: 3,
      src: '/path/to/image3.jpg',
      alt: 'Project 3',
      title: 'Mobile App UI/UX',
      description: 'User interface designs for a mobile application.',
      category: 'Landscape',
    },
    {
      id: 4,
      src: '/path/to/image4.jpg',
      alt: 'Project 4',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce site development.',
      category: 'Black & White',
    },
    // Add more images with appropriate categories
  ];

  // Define blurbs for each category
  const blurbs = {
    All: [
      'Photography can be taken literally and not so literally. It’s both the document and the dream.',
    ],
    Wildlife: [ // Matches the corrected category name
      'My work is born from reverence—for wilderness, for fleeting light, and for the deep stories carried in fur, feather, and footprint. It is my hope that these images are more than beautiful—they are reminders. Of what we have, of what we stand to lose, and of what still might be saved.',
    ],
    People: [
      'Many of the moments we bear witness to out here are truly once-in-a-lifetime. Some are only fleeting and will be gone within an instant. Sometimes you’ll never know when the next opportunity will be',
      'These images seek to capture the unique stories and personalities of individuals from various walks of life.',
    ],
    Landscape: [
      'Journey through breathtaking vistas and serene natural environments.',
      'It’s an art form that can be quite challenging, but it rewards me with magical moments that deepen my appreciation for Mother Nature.',
    ],
    'Black & White': [
      'The timeless allure of monochrome, where light, shadow, and texture take center stage.',
      'Discover a different perspective on familiar subjects, emphasizing form and emotional depth.',
    ],
  };

  const [activeCategory, setActiveCategory] = useState('All');

  // Memoize categories to prevent recalculation on every render
  const categories = useMemo(() => {
    const uniqueCategories = new Set(images.map((image) => image.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, [images]);

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter((image) => image.category === activeCategory);

  // Get the current blurb based on the active category, defaulting to 'All' if not found
  const currentBlurbParagraphs = blurbs[activeCategory] || blurbs.All;

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <div className="gallery-container">
          <h1>My Portfolio</h1>
          <div className="blurb">
            {currentBlurbParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="gallery">
            {filteredImages.length > 0 ? (
              filteredImages.map((image) => (
                <div key={image.id} className="gallery-item">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="overlay">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No projects found for this category.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
