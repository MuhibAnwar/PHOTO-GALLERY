"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// Removed Link and Image imports as they are not resolved in this environment.
// Using standard <a> and <img> tags for compatibility in this environment.

// Define the structure for an image item
interface AlbumImage {
  id: number;
  src: string;
  alt: string;
}

// Dummy image data specifically for the '2022-23' album
const year202223Images: AlbumImage[] = [
  { id: 1, src: "/2022/0.jpeg", alt: "Event Photo 1" },
  { id: 2, src: "/2022/1.jpeg", alt: "Event Photo 2" },
  { id: 3, src: "/2022/2.jpeg", alt: "Event Photo 3" },
  { id: 4, src: "/2022/3.jpeg", alt: "Event Photo 4" },
  { id: 5, src: "/2022/4.jpeg", alt: "Event Photo 5" },
  { id: 6, src: "/2022/5.jpeg", alt: "Event Photo 6" },
  { id: 7, src: "/2022/6.jpeg", alt: "Event Photo 7" },
  { id: 8, src: "/2022/7.jpeg", alt: "Event Photo 8" },
  { id: 9, src: "/2022/8.jpeg", alt: "Event Photo 9" },
  { id: 10, src: "/2022/9.jpeg", alt: "Event Photo 10" },
  { id: 11, src: "/2022/10.jpeg", alt: "Event Photo 11" },
  { id: 12, src: "/2022/11.jpeg", alt: "Event Photo 12" },
  { id: 13, src: "/2022/12.jpeg", alt: "Event Photo 13" },
  { id: 14, src: "/2022/13.jpeg", alt: "Event Photo 14" },
  { id: 15, src: "/2022/14.jpeg", alt: "Event Photo 15" },
  { id: 16, src: "/2022/15.jpeg", alt: "Event Photo 16" },
  { id: 17, src: "/2022/16.jpeg", alt: "Event Photo 17" },
  { id: 18, src: "/2022/17.jpeg", alt: "Event Photo 18" },
  { id: 19, src: "/2022/18.jpeg", alt: "Event Photo 19" },
  { id: 20, src: "/2022/19.jpeg", alt: "Event Photo 20" },
  { id: 21, src: "/2022/20.jpeg", alt: "Event Photo 21" },
  { id: 22, src: "/2022/21.jpeg", alt: "Event Photo 22" },
  { id: 23, src: "/2022/22.jpeg", alt: "Event Photo 23" },
  { id: 24, src: "/2022/23.jpeg", alt: "Event Photo 24" },
  { id: 25, src: "/2022/24.jpeg", alt: "Event Photo 25" },
  { id: 26, src: "/2022/25.jpeg", alt: "Event Photo 26" },
  { id: 27, src: "/2022/26.jpeg", alt: "Event Photo 27" },
  { id: 28, src: "/2022/27.jpeg", alt: "Event Photo 28" },
  { id: 29, src: "/2022/28.jpeg", alt: "Event Photo 29" },
  { id: 30, src: "/2022/29.jpeg", alt: "Event Photo 30" },
  { id: 31, src: "/2022/30.jpeg", alt: "Event Photo 31" },
  { id: 32, src: "/2022/31.jpeg", alt: "Event Photo 32" },
  { id: 33, src: "/2022/32.jpeg", alt: "Event Photo 33" },
  { id: 34, src: "/2022/34.jpeg", alt: "Event Photo 34" },
  { id: 35, src: "/2022/35.jpeg", alt: "Event Photo 35" },
  { id: 36, src: "/2022/36.jpeg", alt: "Event Photo 36" },
  { id: 37, src: "/2022/37.jpeg", alt: "Event Photo 37" },
  { id: 38, src: "/2022/38.jpeg", alt: "Event Photo 38" },
  { id: 39, src: "/2022/39.jpeg", alt: "Event Photo 39" },
  { id: 40, src: "/2022/40.jpeg", alt: "Event Photo 40" },
  { id: 41, src: "/2022/41.jpeg", alt: "Event Photo 41" },
  { id: 42, src: "/2022/42.jpeg", alt: "Event Photo 42" },
  { id: 43, src: "/2022/43.jpeg", alt: "Event Photo 43" },
  { id: 44, src: "/2022/44.jpeg", alt: "Event Photo 44" },
  { id: 45, src: "/2022/45.jpeg", alt: "Event Photo 45" },
  { id: 46, src: "/2022/46.jpeg", alt: "Event Photo 46" },
  { id: 47, src: "/2022/47.jpeg", alt: "Event Photo 47" },
  { id: 48, src: "/2022/48.jpeg", alt: "Event Photo 48" },
  { id: 49, src: "/2022/49.jpeg", alt: "Event Photo 49" },
  { id: 50, src: "/2022/50.jpeg", alt: "Event Photo 50" },
  { id: 51, src: "/2022/51.jpeg", alt: "Event Photo 51" },
  { id: 52, src: "/2022/52.jpeg", alt: "Event Photo 52" },
  { id: 53, src: "/2022/53.jpeg", alt: "Event Photo 53" },
  { id: 54, src: "/2022/54.jpeg", alt: "Event Photo 54" },
  { id: 55, src: "/2022/55.jpeg", alt: "Event Photo 55" },
  { id: 56, src: "/2022/56.jpeg", alt: "Event Photo 56" },
  { id: 57, src: "/2022/57.jpeg", alt: "Event Photo 57" },
  { id: 58, src: "/2022/58.jpeg", alt: "Event Photo 58" },
  { id: 59, src: "/2022/59.jpeg", alt: "Event Photo 59" },
  { id: 60, src: "/2022/60.jpeg", alt: "Event Photo 60" },
  { id: 61, src: "/2022/61.jpeg", alt: "Event Photo 61" },
  { id: 62, src: "/2022/62.jpeg", alt: "Event Photo 62" },
  { id: 63, src: "/2022/63.jpeg", alt: "Event Photo 63" },
  { id: 64, src: "/2022/64.jpeg", alt: "Event Photo 64" },
  { id: 65, src: "/2022/65.jpeg", alt: "Event Photo 65" },
  { id: 66, src: "/2022/66.jpeg", alt: "Event Photo 66" },
  { id: 67, src: "/2022/67.jpeg", alt: "Event Photo 67" },
  { id: 68, src: "/2022/68.jpeg", alt: "Event Photo 68" },
  { id: 69, src: "/2022/69.jpeg", alt: "Event Photo 69" },
  { id: 70, src: "/2022/70.jpeg", alt: "Event Photo 70" },
  { id: 71, src: "/2022/71.jpeg", alt: "Event Photo 71" },
  { id: 72, src: "/2022/72.jpeg", alt: "Event Photo 72" },
  { id: 73, src: "/2022/73.jpeg", alt: "Event Photo 73" },
  { id: 74, src: "/2022/74.jpeg", alt: "Event Photo 74" },
  { id: 75, src: "/2022/75.jpeg", alt: "Event Photo 75" },
  { id: 76, src: "/2022/76.jpeg", alt: "Event Photo 76" },
  { id: 77, src: "/2022/77.jpeg", alt: "Event Photo 77" },
  { id: 78, src: "/2022/78.jpeg", alt: "Event Photo 78" },
  { id: 79, src: "/2022/79.jpeg", alt: "Event Photo 79" },
  { id: 80, src: "/2022/79.jpeg", alt: "Event Photo 80" }, // Corrected ID 80 to avoid duplicate ID 79
];


// Main component for the 2022-23 Album Page
export default function Album202223Page() {
  return (
    // Outer container for the entire page, dark background
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-inter relative overflow-hidden p-6 md:p-12">
      {/* Background aesthetic, similar to the main gallery */}
      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(17, 24, 39, 0.5), transparent), url(https://placehold.co/1920x1080/0F172A/0F172A?text=)",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute top-8 right-12 w-16 h-16 moon-gradient rounded-full shadow-lg transform rotate-45 -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:top-4 before:left-4 before:w-16 before:h-16 before:bg-gray-900 before:rounded-full z-10"></div>

      <main className="main-content">
        {/* Header section */}
        <div className="header-section">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 sm:mb-0">
            2022-23 Album
          </h1>
          {/* Back to Gallery button - using a standard anchor tag for navigation */}
          <Link  href="/" className="back-button">
            Back to Gallery
          </Link>
        </div>

        {/* Image grid */}
        <div className="image-grid">
          {year202223Images.map((image) => (
            <div
              key={image.id}
              className="image-card"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="image-thumbnail"
                onError={(e) => {
                  // Fallback for broken images
                  e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Error`;
                  e.currentTarget.alt = "Image failed to load";
                }}
              />
              <div className="image-overlay">
                <span className="image-alt-text">
                  {image.alt}
                </span>
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

        /* Image grid styling */
        .image-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr)); /* 1 column on mobile */
          gap: 1.5rem; /* gap-6 */
        }

        .image-card {
          position: relative; /* Essential for absolute positioning of image and overlay */
          overflow: hidden;
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
          transition: transform 300ms ease; /* transition-transform duration-300 */
          cursor: pointer;
          border: 1px solid #374151; /* border border-gray-700 */
          /* Aspect ratio box for full height images */
          padding-bottom: 100%; /* Changed to 1:1 aspect ratio for more height */
          height: 0; /* Collapse height to let padding-bottom control it */
        }
        .image-card:hover {
          transform: scale(1.05); /* hover:scale-105 */
        }

        .image-thumbnail {
          position: absolute; /* Position absolutely to fill parent */
          top: 0;
          left: 0;
          width: 100%;
          height: 100%; /* Fill the aspect-ratio controlled parent */
          object-fit: cover; /* Cover the area while maintaining aspect ratio */
          border-radius: 0.5rem; /* rounded-lg */
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.4); /* bg-black bg-opacity-40 */
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 300ms ease; /* transition-opacity duration-300 */
        }
        .image-card:hover .image-overlay {
          opacity: 1; /* group-hover:opacity-100 */
        }

        .image-alt-text {
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
          .image-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* sm:grid-cols-2 */
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

        @media (min-width: 1024px) { /* lg breakpoint */
          .image-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* lg:grid-cols-2 for two images per line */
          }
        }
      `}</style>
    </div>
  );
}
