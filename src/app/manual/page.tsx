"use client";
import Link from "next/link";
import React from "react";
// Removed Link import and using standard <a> tag for compatibility in this environment.

// Main component for the User Manual Page
export default function UserManualPage() {
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
            Ayesha Manual
          </h1>
          {/* Back to Gallery button */}
          <Link href="/" className="back-button"> {/* Changed Link to <a> */}
            Back to Gallery
          </Link>
        </div>

        {/* Manual Content */}
        <div className="prose-content"> {/* Using custom class for text content */}
          <h2 className="content-h2">Welcome to Your Ayesha Photo Gallery!</h2>
          <p>
            This website template is designed to showcase your photo albums in a clean, modern, and responsive interface.
            It features a dark theme, intuitive navigation, and dedicated pages for your photo collections and special notes.
          </p>

          <h3 className="content-h3">1. The Main Gallery Page</h3>
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

          <h3 className="content-h3">2. Album Detail Pages</h3>
          <p>
            When you click on an album card from the main gallery, you will be directed to its dedicated detail page.
            For instance, the 2022-23 Album page displays all the images associated with that particular year or event in a grid layout.
          </p>
          <p>
            <strong>Returning to the Main Gallery:</strong> At the top right of any album detail page, you will find a Back to Gallery button.
            Clicking this button will take you back to the main page where you can browse other albums.
          </p>

          <h3 className="content-h3">3. The Love Notes Page</h3>
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

          <h3 className="content-h3">4. General Information</h3>
          <p>
            This website is built with a responsive design, meaning it adapts and looks great on various screen sizes,
            from mobile phones to large desktop monitors. The dark theme provides a sleek and elegant backdrop for your photos.
          </p>
          <p>
            For any inquiries or to connect, Mohib is always yours.
          </p>
          
          {/* New Note */}
          <p className="note-box">
            <strong>Important Note on Styling:</strong> While I have put in my best efforts to create this website, I was unable to implement all image, video, or picture uploads from your local computer. But this is i made with love and effort.
          </p>

          <p className="footer-text">
            Thank you for using this Ayesha Photo Gallery!
            Thank you for your love to me!
            Thanks for All!
          </p>
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

        /* Manual Content Styling (mimicking prose) */
        .prose-content {
          max-width: 65ch; /* max-w-none is too wide for readability */
          color: #d1d5db; /* text-gray-300 */
          margin-left: auto;
          margin-right: auto;
        }
        .prose-content h2 {
          font-size: 1.875rem; /* text-3xl */
          font-weight: 700; /* font-bold */
          color: #ffffff; /* text-white */
          margin-bottom: 1rem; /* mb-4 */
          margin-top: 2rem; /* mt-8 */
        }
        .prose-content h3 {
          font-size: 1.5rem; /* text-2xl */
          font-weight: 700; /* font-bold */
          color: #ffffff; /* text-white */
          margin-top: 2rem; /* mt-8 */
          margin-bottom: 0.75rem; /* mb-3 */
        }
        .prose-content p {
          margin-bottom: 1rem; /* Default paragraph spacing */
          line-height: 1.75; /* leading-relaxed */
        }
        .prose-content strong {
          font-weight: 700; /* font-bold */
        }

        .note-box {
          margin-top: 2rem; /* mt-8 */
          padding: 1rem; /* p-4 */
          background-color: #374151; /* bg-gray-700 */
          border-radius: 0.5rem; /* rounded-lg */
          color: #fcd34d; /* text-yellow-200 */
          text-align: center;
          font-size: 1.125rem; /* text-lg */
          font-weight: 600; /* font-semibold */
        }

        .footer-text {
          margin-top: 1.5rem; /* mt-6 */
          text-align: center;
          color: #9ca3af; /* text-gray-400 */
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
        }
      `}</style>
    </div>
  );
}
