"use client";
import React from "react";
// Removed 'next/link' import as it's not resolved in this environment.
// Using standard anchor tag for navigation.

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

  { id: 8, src: "/2022/7.jpeg", alt: "Event Photo 8" },
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
  { id: 34, src: "/2022/33.jpeg", alt: "Event Photo 34" },
  { id: 35, src: "/2022/34.jpeg", alt: "Event Photo 35" },
  { id: 36, src: "/2022/35.jpeg", alt: "Event Photo 36" },
  { id: 37, src: "/2022/36.jpeg", alt: "Event Photo 37" },
  { id: 38, src: "/2022/37.jpeg", alt: "Event Photo 38" },
  { id: 39, src: "/2022/38.jpeg", alt: "Event Photo 39" },
  { id: 40, src: "/2022/39.jpeg", alt: "Event Photo 40" },
  { id: 41, src: "/2022/40.jpeg", alt: "Event Photo 41" },
  { id: 42, src: "/2022/41.jpeg", alt: "Event Photo 42" },
  { id: 43, src: "/2022/42.jpeg", alt: "Event Photo 43" },
  { id: 44, src: "/2022/43.jpeg", alt: "Event Photo 44" },
  { id: 45, src: "/2022/44.jpeg", alt: "Event Photo 45" },
  { id: 46, src: "/2022/45.jpeg", alt: "Event Photo 46" },
  { id: 47, src: "/2022/46.jpeg", alt: "Event Photo 47" },
  { id: 48, src: "/2022/47.jpeg", alt: "Event Photo 48" },
  { id: 49, src: "/2022/48.jpeg", alt: "Event Photo 49" },
  { id: 50, src: "/2022/49.jpeg", alt: "Event Photo 50" },
  { id: 51, src: "/2022/50.jpeg", alt: "Event Photo 51" },
  { id: 52, src: "/2022/51.jpeg", alt: "Event Photo 52" },
  { id: 53, src: "/2022/52.jpeg", alt: "Event Photo 53" },
  { id: 54, src: "/2022/53.jpeg", alt: "Event Photo 54" },
  { id: 55, src: "/2022/54.jpeg", alt: "Event Photo 55" },
  { id: 56, src: "/2022/55.jpeg", alt: "Event Photo 56" },
  { id: 57, src: "/2022/56.jpeg", alt: "Event Photo 57" },
  { id: 58, src: "/2022/57.jpeg", alt: "Event Photo 58" },
  { id: 59, src: "/2022/58.jpeg", alt: "Event Photo 59" },
  { id: 60, src: "/2022/59.jpeg", alt: "Event Photo 60" },
  { id: 61, src: "/2022/60.jpeg", alt: "Event Photo 61" },
  { id: 62, src: "/2022/61.jpeg", alt: "Event Photo 62" },
  { id: 63, src: "/2022/62.jpeg", alt: "Event Photo 63" },
  { id: 64, src: "/2022/63.jpeg", alt: "Event Photo 64" },
  { id: 65, src: "/2022/64.jpeg", alt: "Event Photo 65" },
  { id: 66, src: "/2022/65.jpeg", alt: "Event Photo 66" },
  { id: 67, src: "/2022/66.jpeg", alt: "Event Photo 67" },
  { id: 68, src: "/2022/67.jpeg", alt: "Event Photo 68" },
  { id: 69, src: "/2022/68.jpeg", alt: "Event Photo 69" },
  { id: 70, src: "/2022/69.jpeg", alt: "Event Photo 70" },
  { id: 71, src: "/2022/70.jpeg", alt: "Event Photo 71" },
  { id: 72, src: "/2022/71.jpeg", alt: "Event Photo 72" },
  { id: 73, src: "/2022/72.jpeg", alt: "Event Photo 73" },
  { id: 74, src: "/2022/73.jpeg", alt: "Event Photo 74" },
  { id: 75, src: "/2022/74.jpeg", alt: "Event Photo 75" },
  { id: 76, src: "/2022/75.jpeg", alt: "Event Photo 76" },
  { id: 77, src: "/2022/76.jpeg", alt: "Event Photo 77" },
  { id: 78, src: "/2022/77.jpeg", alt: "Event Photo 78" },
  { id: 79, src: "/2022/78.jpeg", alt: "Event Photo 79" },
  { id: 80, src: "/2022/79.jpeg", alt: "Event Photo 80" },
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
      <div className="absolute top-8 right-12 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full shadow-lg transform rotate-45 -translate-x-1/2 -translate-y-1/2 before:content-[''] before:absolute before:top-4 before:left-4 before:w-16 before:h-16 before:bg-gray-900 before:rounded-full z-10"></div>

      <main className="relative z-20 container mx-auto bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-2xl">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 sm:mb-0">
            2022-23 Album
          </h1>
          {/* Back to Gallery button - using a standard anchor tag for navigation */}
          <a href="/">
            {" "}
            {/* Direct link to the main page */}
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition duration-300 shadow-lg">
              Back to Gallery
            </button>
          </a>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {year202223Images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-700"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg"
                onError={(e) => {
                  // Fallback for broken images
                  e.currentTarget.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Error`;
                  e.currentTarget.alt = "Image failed to load";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Tailwind CSS CDN for quick setup */}
      <script src="https://cdn.tailwindcss.com"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        tailwind.config = {
          theme: {
            extend: {
              fontFamily: {
                inter: ['Inter', 'sans-serif'],
              },
            },
          },
        };
      `,
        }}
      />
    </div>
  );
}
