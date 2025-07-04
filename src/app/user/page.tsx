import Link from 'next/link';
import React from 'react';

// Main component for the User Manual Page
export default function UserManualPage() {
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
            Ayesha Manual
          </h1>
          {/* Back to Gallery button */}
          <Link href="/"> {/* Direct link to the main page */}
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition duration-300 shadow-lg">
              Back to Gallery
            </button>
          </Link>
        </div>

        {/* Manual Content */}
        <div className="prose prose-invert max-w-none text-gray-300"> {/* Using prose for better readability of text content */}
          <h2 className="text-3xl font-bold text-white mb-4">Welcome to Your Ayesha Photo Gallery!</h2>
          <p>
            This website template is designed to showcase your photo albums in a clean, modern, and responsive interface.
            It features a dark theme, intuitive navigation, and dedicated pages for your photo collections and special notes.
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-3">1. The Main Gallery Page</h3>
          <p>
            Upon arriving at the main page, you will see a prominent Photo Gallery title on the left, along with placeholder social media icons.
            On the right, your photo albums are displayed as distinct cards.
          </p>
          <p>
            Each album card represents a collection of photos, typically organized by year or theme.
            It features a prominent Year label (e.g., 2022-23, 2024), a main image that visually represents the album,
            a Category Label (e.g., EVENTS, EDITS), and a smaller secondary image.
          </p>
          <p>
            <strong>Navigating Albums:</strong> To view all the pictures within a specific album, simply click anywhere on the album card.
            For example, clicking the 2022-23 album card will take you to its dedicated page.
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-3">2. Album Detail Pages</h3>
          <p>
            When you click on an album card from the main gallery, you will be directed to its dedicated detail page.
            For instance, the 2022-23 Album page displays all the images associated with that particular year or event in a grid layout.
          </p>
          <p>
            <strong>Returning to the Main Gallery:</strong> At the top right of any album detail page, you will find a Back to Gallery button.
            Clicking this button will take you back to the main page where you can browse other albums.
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-3">3. The Love Notes Page</h3>
          <p>
            From the main gallery page, located on the left side below the social media icons, you will find a View Notes button.
            Clicking this button will take you to the Love Notes page.
          </p>
          <p>
            This page is designed to display romantic paragraphs, with one or two accompanying images after each section.
            It is a space for heartfelt messages and visual complements to those sentiments.
          </p>
          <p>
            <strong>Returning to the Main Gallery:</strong> Similar to the album pages, the Love Notes page also has a Back to Gallery button at the top right,
            allowing you to easily return to the main photo gallery.
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-3">4. General Information</h3>
          <p>
            This website is built with a responsive design, meaning it adapts and looks great on various screen sizes,
            from mobile phones to large desktop monitors. The dark theme provides a sleek and elegant backdrop for your photos.
          </p>
          <p>
            For any inquiries or to connect, Mohib is always yours.
          </p>
          
          {/* New Note */}
          <p className="mt-8 p-4 bg-gray-700 rounded-lg text-yellow-200 text-center text-lg font-semibold">
            Please note: While I have put in my best efforts to create this website, I was unable to implement all image, video, or picture uploads from your local computer. But this is i made with love and effort.
          </p>

          <p className="mt-6 text-center text-gray-400">
            Thank you for using this Ayesha Photo Gallery!
            Thank you for your love to me!
            Thanks for All!
          </p>
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
