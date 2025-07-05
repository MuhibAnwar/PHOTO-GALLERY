'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// Removed Link and Image imports to resolve compilation errors.
// Using standard <a> and <img> tags for compatibility in this environment.

// Define the structure for a note section
interface NoteSection {
  id: number;
  paragraph: string;
  images: { src: string; alt: string; }[];
}

// Content for the notes page
const loveNotesContent: NoteSection[] = [
  {
    id: 1,
    paragraph: "In the quiet symphony of our shared moments, my heart finds its most cherished melody. Every glance, every whispered word, weaves a tapestry of affection that wraps around my soul, reminding me of the profound beauty of our connection. You are the warmth in my dawn and the gentle peace in my dusk.",
    images: [
      { src: '/2024/2.jpeg', alt: 'Romantic scene 1' },
      { src: '/2022/4.jpeg', alt: 'Couple embracing' },
    ],
  },
  {
    id: 2,
    paragraph: "Your laughter is the sweetest music, a joyful cascade that fills my world with light. It's in the simple, ordinary days that our extraordinary love truly shines, transforming mundane moments into precious memories. With you, every day feels like a tender poem written just for us.",
    images: [
      { src: '/2024/13.jpeg', alt: 'Happy couple' },
    ],
  },
  {
    id: 3,
    paragraph: "Before you, my world was a canvas awaiting its vibrant hues. Now, with you by my side, it's a masterpiece of passion, understanding, and unwavering devotion. You are the muse to my dreams, the strength in my struggles, and the calm in my storms.",
    images: [
      { src: '/2022/10.jpeg', alt: 'Couple in love' },
      { src: '/2024/8.jpeg', alt: 'Peaceful nature scene' },
    ],
  },
  {
    id: 4,
    paragraph: "To love you is to breathe, an essential part of my existence. Your presence is a comforting embrace, a sanctuary where my heart feels truly at home. In your eyes, I see a future painted with endless possibilities and boundless happiness.",
    images: [
      { src: '/2024/19.jpeg', alt: 'Comforting embrace' },
    ],
  },
  {
    id: 5,
    paragraph: "Every beat of my heart echoes your name, a silent testament to the depth of my affection. You are not just a part of my life; you are the very essence that makes it beautiful and meaningful. Thank you for being my greatest adventure and my safest harbor.",
    images: [
      { src: '/2022/50.jpeg', alt: 'Romantic gesture' },
      { src: '/2022/28.jpeg', alt: 'Couple walking together' },
    ],
  },
  {
    id: 6,
    paragraph: "Our journey together is a testament to destiny, a path illuminated by the light of our shared dreams. With each passing day, my love for you deepens, growing stronger and more profound. You are my forever, my always, my everything.",
    images: [
      { src: '/2024/17.jpeg', alt: 'Romantic sky' },
    ],
  },
];

// Main component for the Love Notes Page
export default function NotesPage() {
  return (
    // Outer container for the entire page, dark background
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-inter relative overflow-hidden p-6 md:p-12">
      {/* Background aesthetic, consistent with other pages */}
      <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: 'linear-gradient(to top, rgba(17, 24, 39, 0.5), transparent), url(https://placehold.co/1920x1080/0F172A/0F172A?text=)', backgroundSize: 'cover' }}></div>
      <div className="absolute top-8 right-12 w-16 h-16 moon-gradient rounded-full shadow-lg transform rotate-45 -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:top-4 before:left-4 before:w-16 before:h-16 before:bg-gray-900 before:rounded-full z-10"></div>
      
      <main className="main-content">
        {/* Header section */}
        <div className="header-section">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 sm:mb-0">
            Love Notes
          </h1>
          {/* Back to Gallery button - using a standard anchor tag for navigation */}
          <Link href="/" className="back-button"> {/* Changed Link to <a> */}
            Back to Gallery
          </Link>
        </div>

        {/* Notes content */}
        <div className="notes-sections-container"> {/* Adds vertical spacing between sections */}
          {loveNotesContent.map((section) => (
            <div key={section.id} className="note-section">
              <p className="note-paragraph">
                {section.paragraph}
              </p>
              <div className="note-images-grid">
                {section.images.map((image, index) => (
                  <div
                    key={index}
                    className="note-image-card"
                  >
                    <Image /* Changed Image to img tag */
                      src={image.src}
                      alt={image.alt}
                      className="note-image-thumbnail"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Error`;
                        e.currentTarget.alt = "Image failed to load";
                      }}
                    />
                    <div className="note-image-overlay">
                      <span className="note-image-alt-text">{image.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
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
          z-index: 20;
          background-color: rgba(31, 41, 55, 0.7); /* bg-gray-800 bg-opacity-70 */
          backdrop-filter: blur(8px); /* backdrop-blur-sm */
          border-radius: 0.75rem; /* rounded-xl */
          padding: 1.5rem; /* p-6 */
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
          margin-left: auto;
          margin-right: auto;
          max-width: 1280px; /* Equivalent to container max-width */
        }

        /* Header section styling */
        .header-section {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem; /* mb-8 */
        }

        .text-4xl {
          font-size: 2.25rem; /* 36px */
          line-height: 2.5rem; /* 40px */
        }
        .font-extrabold {
          font-weight: 800;
        }
        .mb-4 {
          margin-bottom: 1rem; /* 16px */
        }
        .sm\\:mb-0 {
          margin-bottom: 0; /* Override on small screens */
        }

        /* Back button styling */
        .back-button {
          padding: 0.75rem 1.5rem; /* px-6 py-3 */
          background-color: #3b82f6; /* bg-blue-600 */
          color: #ffffff;
          font-weight: 600; /* font-semibold */
          border-radius: 9999px; /* rounded-full */
          transition: background-color 300ms ease; /* transition duration-300 */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
          text-decoration: none; /* Remove underline */
          white-space: nowrap; /* Prevent text wrapping */
        }
        .back-button:hover {
          background-color: #2563eb; /* hover:bg-blue-700 */
        }

        /* Notes Sections Container */
        .notes-sections-container {
            display: flex;
            flex-direction: column;
            gap: 2.5rem; /* space-y-10 equivalent */
        }

        /* Individual Note Section */
        .note-section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .note-paragraph {
            font-size: 1.125rem; /* text-lg */
            line-height: 1.75rem; /* leading-relaxed */
            color: #e5e7eb; /* text-gray-200 */
            margin-bottom: 1.5rem; /* mb-6 */
            text-align: center;
            max-width: 48rem; /* max-w-3xl (48rem = 768px) */
            margin-left: auto;
            margin-right: auto;
        }

        /* Note Images Grid */
        .note-images-grid {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* 1 column on mobile */
            gap: 1rem; /* gap-4 */
            width: 100%;
            max-width: 64rem; /* max-w-4xl (64rem = 1024px) */
        }

        .note-image-card {
            position: relative;
            overflow: hidden;
            border-radius: 0.5rem; /* rounded-lg */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
            transition: transform 300ms ease;
            cursor: pointer;
            border: 1px solid #374151; /* border border-gray-700 */
            padding-bottom: 66.66%; /* 3:2 aspect ratio for images (height is 66.66% of width) */
            height: 0; /* Collapse height to let padding-bottom control it */
        }
        .note-image-card:hover {
            transform: scale(1.05);
        }

        .note-image-thumbnail {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%; /* Fill the aspect-ratio controlled parent */
            object-fit: cover; /* Cover the area while maintaining aspect ratio */
            border-radius: 0.5rem; /* rounded-lg */
        }

        .note-image-overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 300ms ease;
        }
        .note-image-card:hover .note-image-overlay {
            opacity: 1;
        }

        .note-image-alt-text {
            color: #ffffff;
            font-size: 1.125rem; /* text-lg */
            font-weight: 700; /* font-bold */
        }

        /* Responsive adjustments */
        @media (min-width: 640px) { /* sm breakpoint */
          .header-section {
            flex-direction: row; /* sm:flex-row */
            margin-bottom: 0; /* sm:mb-0 */
          }
        }

        @media (min-width: 768px) { /* md breakpoint */
          .main-content {
            padding: 2.5rem; /* md:p-10 */
          }
          .text-4xl.md\\:text-5xl {
            font-size: 3rem; /* 48px */
          }
          .note-images-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
          }
        }
      `}</style>
    </div>
  );
}
