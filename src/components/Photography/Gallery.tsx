'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import CategoryButton from '@/components/Resume/Skills/CategoryButton';
import type { PhotographyImage } from '@/data/photography';
import images, { blurbs } from '@/data/photography';

export default function PhotographyGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const categories = useMemo(() => {
    const unique = new Set<string>();
    images.forEach((img) => {
      if (Array.isArray(img.category)) {
        img.category.forEach((c) => unique.add(c));
      } else {
        unique.add(img.category);
      }
    });
    return ['All', ...Array.from(unique).sort()];
  }, []);

  const filtered = useMemo<PhotographyImage[]>(() => {
    if (activeCategory === 'All') return images;
    return images.filter((img) =>
      Array.isArray(img.category)
        ? img.category.includes(activeCategory)
        : img.category === activeCategory,
    );
  }, [activeCategory]);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = useCallback(() => setLightboxIndex(-1), []);

  const goNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % filtered.length),
    [filtered.length],
  );

  const goPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length],
  );

  useEffect(() => {
    if (lightboxIndex < 0) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const activeImage = lightboxIndex >= 0 ? filtered[lightboxIndex] : null;

  return (
    <>
      <nav className="photo-category-nav" aria-label="Filter by category">
        {categories.map((cat) => (
          <CategoryButton
            key={cat}
            label={cat}
            handleClick={setActiveCategory}
            isActive={activeCategory === cat}
          />
        ))}
      </nav>

      {blurbs[activeCategory] && (
        <div className="photo-blurb">
          {blurbs[activeCategory].map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}

      <div className="photo-masonry">
        {filtered.map((img, idx) => (
          <button
            key={img.id}
            type="button"
            className="photo-masonry-item"
            onClick={() => openLightbox(idx)}
            aria-label={`View ${img.alt}`}
          >
            {/* biome-ignore lint/performance/noImgElement: native img used for masonry aspect-ratio preservation in static export */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="photo-masonry-img"
            />
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="photo-empty">No images in this category.</p>
      )}

      {activeImage && (
        <div
          className="photo-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
        >
          <div
            className="photo-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="photo-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            <button
              type="button"
              className="photo-lightbox-nav photo-lightbox-prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* biome-ignore lint/performance/noImgElement: native img used for lightbox in static export */}
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="photo-lightbox-img"
            />

            <button
              type="button"
              className="photo-lightbox-nav photo-lightbox-next"
              onClick={goNext}
              aria-label="Next image"
            >
              ›
            </button>

            {activeImage.title && (
              <p className="photo-lightbox-caption">{activeImage.title}</p>
            )}
          </div>

          <p className="photo-lightbox-counter">
            {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </>
  );
}
