'use client';
import Link from 'next/link';

import Image from 'next/image';

// Define the structure for an album item as per the new design
interface Album {
  id: number;
  year: string;
  mainImage: { src: string; alt: string; };
  categoryLabel: string;
  secondaryImage: { src: string; alt: string; };
}

// Dummy data for the new album structure
const albumsData: Album[] = [
  {
    id: 1,
    year: '2022-23',
    mainImage: { src:'/2022/2.jpeg', alt: 'Couple in 2022-23' },
    categoryLabel: 'EVENTS',
    secondaryImage: { src: '/events/1.jpg', alt: 'Event scene' },
  },
  {
    id: 2,
    year: '2024',
    mainImage: { src: '/2024/1.jpg', alt: 'Couple in 2024' },
    categoryLabel: 'MY FAV',
    secondaryImage: { src: '/2025/1.jpg', alt: 'Sunset landscape' },
  },
  // You can add more album data here if needed, it will flow into new columns/rows
];

// Main App component for the Photo Gallery
export default function App() {
  // Keeping state for selected category is no longer directly used in the new right section
  // but can be repurposed if you reintroduce filtering or other interactive elements

  return (
    // Outer container for the entire page, dark background with subtle stars/clouds
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-inter relative overflow-hidden">
      {/* Background mountains/landscape effect - a simple gradient to mimic the screenshot */}
      {/* Changed to a more subtle sky gradient to hint at the moon/stars from the new image */}
      <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: 'linear-gradient(to top, rgba(17, 24, 39, 0.5), transparent), url(https://placehold.co/1920x1080/0F172A/0F172A?text=)', backgroundSize: 'cover' }}></div>
      {/* Crescent moon shape for aesthetic, positioned top right */}
      <div className="absolute top-8 right-12 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full shadow-lg transform rotate-45 -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:top-4 before:left-4 before:w-16 before:h-16 before:bg-gray-900 before:rounded-full z-10"></div>
      
      {/* Small '@d_evil' text at the top left */}
      <div className="absolute top-4 left-6 text-sm text-gray-400 font-mono z-20">
        MADE WITH LOVE BY MUHIB ANWAR
      </div>

      {/* Main content area, structured with flex for left/right sections */}
      <main className="relative z-10 flex flex-col lg:flex-row min-h-screen p-6 lg:p-12 gap-8 items-center lg:items-stretch">
        {/* Left section: Photo Gallery title and social icons */}
        <section className="flex flex-col justify-center items-center lg:items-start lg:w-1/3 p-4 lg:p-8 text-center lg:text-left bg-transparent">
          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Ayesha Gallery 
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Ayesha, this gallery is a small tribute to the beautiful memories we have created together. Each photo captures your smile, our laughter, and the love we share. I made this with all my heart to celebrate you and us. You’re my joy, my light, and my forever.
          </p>
           <Link
      href="/2022-23"
      className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition duration-300 mt-4"
    >
      2022-23
    </Link>
       <Link
      href="/2024"
      className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition duration-300 mt-4"
    >
      2024
    </Link>
       <Link
      href="/notes"
      className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition duration-300 mt-4"
    >
      2025 (coming soon)
    </Link>
       <Link
      href="/user"
      className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition duration-300 mt-4"
    >
      Ayesha Manual
    </Link>
</section>
         
        {/* Right section: New Album/Collection layout */}
        <section className="flex flex-col md:flex-row lg:flex-row gap-6 p-4 md:p-8 lg:p-0 justify-center items-center lg:items-stretch lg:w-2/3">
          {albumsData.map((album) => (
            <div
              key={album.id}
              className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-3xl p-4 shadow-2xl flex-shrink-0 w-full sm:w-80 md:w-96 lg:w-1/2 max-w-sm flex flex-col items-center border border-gray-700" // Adjusted width for better responsiveness
              style={{ minHeight: '550px' }} // Added min-height to maintain consistent card size
            >
              {/* Year label */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 px-4 pt-2 w-full text-left text-gray-200">
                {album.year}
              </h3>
              
              {/* Main Image */}
              <div className="w-full h-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={album.mainImage.src}
                  alt={album.mainImage.alt}
                  className="w-full object-cover rounded-xl"
                 // style={{ maxHeight: '300px' }} // Constraint height for the main image
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/400x400/CCCCCC/333333?text=Image+Error`;
                    e.currentTarget.alt = "Main image failed to load";
                  }}
                />
              </div>

              {/* Category Label */}
              <h4 className="text-xl md:text-2xl font-bold uppercase text-gray-200 mb-4 px-4 w-full text-left">
                {album.categoryLabel}
              </h4>

              {/* Secondary Image */}
              <div className="w-full h-auto rounded-xl overflow-hidden shadow-lg mb-4">
                <Image
                  src={album.secondaryImage.src}
                  alt={album.secondaryImage.alt}
                  className="w-full object-cover rounded-xl"
                //  style={{ maxHeight: '180px' }} // Constraint height for the secondary image
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
