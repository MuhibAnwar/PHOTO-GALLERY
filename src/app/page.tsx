'use client';
import React from 'react';

import Image from 'next/image';

// Define the structure for an album item
interface Album {
  id: number;
  year: string;
  mainImage: { src: string; alt: string; };
  categoryLabel: string;
  secondaryImage: { src: string; alt: string; };
  slug: string; // Slug for navigation
}

// Dummy data for the albums
const albumsData: Album[] = [
  {
    id: 1,
    year: '2022-23',
    mainImage: { src:'/2022/2.jpeg', alt: 'Couple in 2022-23' },
    categoryLabel: 'EVENTS',
    secondaryImage: { src: '/events/1.jpg', alt: 'Event scene' },
    slug: '2022-23',
  },
  {
    id: 2,
    year: '2024',
    mainImage: { src: '/2024/1.jpg', alt: 'Couple in 2024' },
    categoryLabel: 'MY FAV',
    secondaryImage: { src: '/2025/1.jpg', alt: 'Sunset landscape' },
    slug: '2024',
  },
];

// Main App component for the Photo Gallery
export default function App() {
  return (
    // Outer container for the entire page, dark background with subtle stars/clouds
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-inter relative overflow-hidden">
      {/* Background mountains/landscape effect - a simple gradient to mimic the screenshot */}
      <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: 'linear-gradient(to top, rgba(17, 24, 39, 0.5), transparent), url(https://placehold.co/1920x1080/0F172A/0F172A?text=)', backgroundSize: 'cover' }}></div>
      {/* Crescent moon shape for aesthetic, positioned top right */}
      <div className="absolute top-8 right-12 w-16 h-16 moon-gradient rounded-full shadow-lg transform rotate-45 -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:top-4 before:left-4 before:w-16 before:h-16 before:bg-gray-900 before:rounded-full z-10"></div>
      
      {/* Small '@d_evil' text at the top left */}
      <div className="absolute top-4 left-6 text-sm text-gray-400 font-mono z-20">
        MADE WITH LOVE BY MUHIB ANWAR
      </div>

      {/* Main content area, structured with flex for left/right sections */}
      <main className="main-content">
        {/* Left section: Photo Gallery title and social icons */}
        <section className="left-section">
          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Ayesha Gallery 
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Ayesha, this gallery is a small tribute to the beautiful memories we have created together. Each photo captures your smile, our laughter, and the love we share. I made this with all my heart to celebrate you and us. You’re my joy, my light, and my forever.
          </p>
          {/* Navigation Links - Using <a> tags for compatibility */}
          <a
            href="/2022-23"
            className="link-button"
          >
            2022-23
          </a>
          <a
            href="/2024"
            className="link-button"
          >
            2024
          </a>
          <a
            href="/notes"
            className="link-button"
          >
            2025 (coming soon)
          </a>
          <a
            href="/manual"
            className="link-button"
          >
            Ayesha Manual
          </a>
        </section>
          
        {/* Right section: New Album/Collection layout */}
        <section className="right-section">
          {albumsData.map((album) => (
            <div
              key={album.id}
              className="album-card"
              // Removed minHeight here as image containers will control height
            >
              {/* Year label */}
              <h3 className="album-year">
                {album.year}
              </h3>
              
              {/* Main Image - Using <img> tag */}
              <div className="album-main-image-container"> {/* Specific class for main image container */}
                <Image
                  src={album.mainImage.src}
                  alt={album.mainImage.alt}
                  className="album-image"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x400/CCCCCC/333333?text=Image+Error`;
                    e.currentTarget.alt = "Main image failed to load";
                  }}
                />
              </div>

              {/* Category Label */}
              <h4 className="album-category">
                {album.categoryLabel}
              </h4>

              {/* Secondary Image - Using <img> tag */}
              <div className="album-secondary-image-container"> {/* Specific class for secondary image container */}
                <Image
                  src={album.secondaryImage.src}
                  alt={album.secondaryImage.alt}
                  className="album-image"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x250/CCCCCC/333333?text=Image+Error`;
                    e.currentTarget.alt = "Secondary image failed to load";
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Custom CSS to replicate Tailwind styles for this environment */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .min-h-screen {
          min-height: 100vh;
        }
        .bg-gradient-to-br {
          background-image: linear-gradient(to bottom right, #1f2937, #000000);
        }
        .text-white {
          color: #ffffff;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .relative {
          position: relative;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .absolute {
          position: absolute;
        }
        .inset-0 {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .z-0 {
          z-index: 0;
        }
        .opacity-80 {
          opacity: 0.8;
        }
        .top-8 {
          top: 2rem; /* 32px */
        }
        .right-12 {
          right: 3rem; /* 48px */
        }
        .w-16 {
          width: 4rem; /* 64px */
        }
        .h-16 {
          height: 4rem; /* 64px */
        }
        .moon-gradient { /* Specific class for moon gradient */
          background-image: linear-gradient(to bottom right, #818cf8, #9333ea);
        }
        .rounded-full {
          border-radius: 9999px;
        }
        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        }
        .transform {
          transform: var(--tw-transform);
        }
        .rotate-45 {
          transform: rotate(45deg);
        }
        .-translate-x-1\/2 {
          transform: translateX(-50%);
        }
        .-translate-y-1\/2 {
          transform: translateY(-50%);
        }
        /* Combined transform for moon */
        .absolute.top-8.right-12.w-16.h-16.moon-gradient.rounded-full.shadow-lg {
            transform: rotate(45deg) translate(-50%, -50%);
        }
        .before\\:content-\\[\\'\\']::before {
          content: "";
        }
        .before\\:absolute::before {
          position: absolute;
        }
        .before\\:top-4::before {
          top: 1rem; /* 16px */
        }
        .before\\:left-4::before {
          left: 1rem; /* 16px */
        }
        .before\\:w-16::before {
          width: 4rem; /* 64px */
        }
        .before\\:h-16::before {
          height: 4rem; /* 64px */
        }
        .before\\:bg-gray-900::before {
          background-color: #111827;
        }
        .before\\:rounded-full::before {
          border-radius: 9999px;
        }
        .z-10 {
          z-index: 10;
        }
        .top-4 {
          top: 1rem; /* 16px */
        }
        .left-6 {
          left: 1.5rem; /* 24px */
        }
        .text-sm {
          font-size: 0.875rem; /* 14px */
          line-height: 1.25rem; /* 20px */
        }
        .text-gray-400 {
          color: #9ca3af;
        }
        .font-mono {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
        .z-20 {
          z-index: 20;
        }

        /* Main content area styling */
        .main-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column; /* Default to column for mobile */
          min-height: 100vh;
          padding: 1.5rem; /* p-6 */
          gap: 2rem; /* gap-8 */
          align-items: center; /* Center items horizontally for mobile */
          justify-content: center; /* Center items vertically for mobile */
        }

        /* Left section styling */
        .left-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; /* Center content for mobile */
          padding: 1rem; /* p-4 */
          text-align: center; /* Center text for mobile */
          background-color: transparent;
          width: 100%; /* Full width on mobile */
        }

        /* Right section styling */
        .right-section {
          display: flex;
          flex-direction: column; /* Default to column for mobile */
          gap: 1.5rem; /* gap-6 */
          padding: 1rem; /* p-4 */
          justify-content: center;
          align-items: center;
          width: 100%; /* Full width on mobile */
        }

        .text-5xl {
          font-size: 3rem; /* 48px */
          line-height: 1;
        }
        .font-extrabold {
          font-weight: 800;
        }
        .mb-4 {
          margin-bottom: 1rem; /* 16px */
        }
        .leading-tight {
          line-height: 1.25;
        }
        .text-lg {
          font-size: 1.125rem; /* 18px */
          line-height: 1.75rem; /* 28px */
        }
        .text-gray-300 {
          color: #d1d5db;
        }
        .mb-8 {
          margin-bottom: 2rem; /* 32px */
        }

        /* Custom classes mimicking Tailwind for buttons and cards */
        .link-button {
          display: inline-block;
          background-color: #ffffff;
          color: #000000;
          font-weight: 600;
          padding: 0.5rem 1.5rem; /* px-6 py-2 */
          border-radius: 9999px; /* rounded-full */
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1); /* shadow */
          transition: background-color 300ms ease; /* transition duration-300 */
          margin-top: 1rem; /* mt-4 */
          text-decoration: none; /* Remove underline from <a> */
          white-space: nowrap; /* Prevent text wrapping */
          width: 100%; /* Full width for buttons on mobile */
          max-width: 200px; /* Limit button width */
          text-align: center;
        }
        .link-button:hover {
          background-color: #e5e7eb; /* hover:bg-gray-200 */
        }

        .album-card {
          background-color: rgba(31, 41, 55, 0.7); /* bg-gray-800 bg-opacity-70 */
          backdrop-filter: blur(8px); /* backdrop-blur-sm */
          border-radius: 1.5rem; /* rounded-3xl */
          padding: 1rem; /* p-4 */
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
          flex-shrink: 0;
          width: 100%;
          max-width: 24rem; /* sm:w-80 md:w-96 lg:w-1/2 max-w-sm */
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #374151; /* border border-gray-700 */
          transition: transform 300ms ease; /* transition-transform duration-300 */
          cursor: pointer;
          /* Removed minHeight here as image containers will control height */
        }
        .album-card:hover {
          transform: scale(1.05); /* hover:scale-105 */
        }

        /* Specific styles for main image container */
        .album-main-image-container {
          width: 100%;
          height: 300px; /* Fixed height for main image */
          margin-bottom: 1rem; /* mb-4 */
          border-radius: 0.75rem; /* rounded-xl */
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
        }

        /* Specific styles for secondary image container */
        .album-secondary-image-container {
          width: 100%;
          height: 180px; /* Fixed height for secondary image */
          border-radius: 0.75rem; /* rounded-xl */
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
          margin-bottom: 0; /* No margin-bottom if it's the last element in the card */
        }

        .album-image {
          width: auto;
          height: 100%; /* Fill the container */
          object-fit: cover; /* Cover the area while maintaining aspect ratio */
          border-radius: 0.75rem; /* rounded-xl */
        }

        .album-year {
          font-size: 1.25rem; /* text-xl */
          font-weight: 700; /* font-bold */
          margin-bottom: 1rem; /* mb-4 */
          padding-left: 1rem; /* px-4 */
          padding-top: 0.5rem; /* pt-2 */
          width: 100%;
          text-align: left;
          color: #e5e7eb; /* text-gray-200 */
        }

        .album-category {
          font-size: 1.25rem; /* text-xl */
          font-weight: 700; /* font-bold */
          text-transform: uppercase;
          color: #e5e7eb; /* text-gray-200 */
          margin-bottom: 1rem; /* mb-4 */
          padding-left: 1rem; /* px-4 */
          width: 100%;
          text-align: left;
        }

        /* Responsive adjustments */
        @media (min-width: 768px) { /* md breakpoint */
          .main-content {
            padding: 2rem; /* md:p-8 */
          }
          .left-section {
            padding: 2rem; /* md:p-8 */
          }
          .right-section {
            flex-direction: row; /* md:flex-row */
            padding: 2rem; /* md:p-8 */
            flex-wrap: wrap; /* Allow wrapping for multiple cards */
          }
          .album-card {
            width: calc(50% - 0.75rem); /* Two columns with gap */
          }
          .text-5xl.md\\:text-6xl {
            font-size: 3.75rem; /* 60px */
          }
          .text-lg.md\\:text-xl {
            font-size: 1.25rem; /* 20px */
          }
        }

        @media (min-width: 1024px) { /* lg breakpoint */
          .main-content {
            flex-direction: row; /* lg:flex-row */
            padding: 3rem; /* lg:p-12 */
            align-items: stretch; /* lg:items-stretch */
            justify-content: flex-start; /* Align content to start */
          }
          .left-section {
            width: 33.333333%; /* lg:w-1/3 */
            padding: 0; /* lg:p-0 */
            align-items: flex-start; /* lg:items-start */
            text-align: left; /* lg:text-left */
          }
          .right-section {
            width: 66.666667%; /* lg:w-2/3 */
            padding: 0; /* lg:p-0 */
            flex-direction: row; /* Ensure row for lg */
            flex-wrap: wrap; /* Ensure wrapping for multiple cards */
            justify-content: center; /* Center cards within the 2/3 width */
            align-items: flex-start; /* Align cards to the top */
          }
          .album-card {
            width: calc(50% - 0.75rem); /* Two columns with gap */
          }
          .text-5xl.lg\\:text-7xl {
            font-size: 4.5rem; /* 72px */
          }
        }
      `}</style>
    </div>
  );
}
