'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// Using standard anchor tag for navigation to avoid 'next/link' resolution issues.

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
      <div className="absolute top-8 right-12 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full shadow-lg transform rotate-45 -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:top-4 before:left-4 before:w-16 before:h-16 before:bg-gray-900 before:rounded-full z-10"></div>
      
      <main className="relative z-20 container mx-auto bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-2xl">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 sm:mb-0">
            Love Notes
          </h1>
          {/* Back to Gallery button - using a standard anchor tag for navigation */}
          <Link href="/"> {/* Direct link to the main page */}
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition duration-300 shadow-lg">
              Back to Gallery
            </button>
          </Link>
        </div>

        {/* Notes content */}
        <div className="space-y-10"> {/* Adds vertical spacing between sections */}
          {loveNotesContent.map((section) => (
            <div key={section.id} className="flex flex-col items-center">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 text-center max-w-3xl">
                {section.paragraph}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                {section.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg group transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-700"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Error`;
                        e.currentTarget.alt = "Image failed to load";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-bold">{image.alt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Tailwind CSS CDN for quick setup
      <script src="https://cdn.tailwindcss.com"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
          theme: {
            extend: {
              fontFamily: {
                inter: ['Inter', 'sans-serif'],
              },
            },
          },
        };
      `}} /> */}
    </div>
  );
}