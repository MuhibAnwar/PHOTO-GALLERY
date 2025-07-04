"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
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
  { id: 1, src: "/2024/17.jpeg", alt: "Event Photo 1" },
  { id: 2, src: "/2024/2.jpeg", alt: "Event Photo 2" },
  { id: 3, src: "/2024/3.jpeg", alt: "Event Photo 3" },
  { id: 4, src: "/2024/4.jpeg", alt: "Event Photo 4" },
  { id: 5, src: "/2024/5.jpeg", alt: "Event Photo 5" },
  { id: 6, src: "/2024/6.jpeg", alt: "Event Photo 6" },
  { id: 7, src: "/2024/7.jpeg", alt: "Event Photo 7" },
  { id: 8, src: "/2024/8.jpeg", alt: "Event Photo 8" },
  { id: 9, src: "/2024/9.jpeg", alt: "Event Photo 9" },
  { id: 10, src: "/2024/10.jpeg", alt: "Event Photo 10" },
  { id: 11, src: "/2024/11.jpeg", alt: "Event Photo 11" },
  { id: 12, src: "/2024/12.jpeg", alt: "Event Photo 12" },
  { id: 13, src: "/2024/13.jpeg", alt: "Event Photo 13" },
  { id: 14, src: "/2024/14.jpeg", alt: "Event Photo 14" },
  { id: 15, src: "/2024/15.jpeg", alt: "Event Photo 15" },
  { id: 16, src: "/2024/16.jpeg", alt: "Event Photo 16" },
  { id: 17, src: "/2024/17.jpeg", alt: "Event Photo 17" },
  { id: 18, src: "/2024/18.jpeg", alt: "Event Photo 18" },
  { id: 19, src: "/2024/19.jpeg", alt: "Event Photo 19" },
  { id: 20, src: "/2024/20.jpeg", alt: "Event Photo 20" },
  { id: 21, src: "/2024/21.jpeg", alt: "Event Photo 21" },
  { id: 22, src: "/2024/22.jpeg", alt: "Event Photo 22" },
  { id: 23, src: "/2024/23.jpeg", alt: "Event Photo 23" },
  { id: 24, src: "/2024/24.jpeg", alt: "Event Photo 24" },
  { id: 25, src: "/2024/25.jpeg", alt: "Event Photo 25" },
  { id: 26, src: "/2024/26.jpeg", alt: "Event Photo 26" },
  { id: 27, src: "/2024/27.jpeg", alt: "Event Photo 27" },
  { id: 28, src: "/2024/28.jpeg", alt: "Event Photo 28" },
  { id: 29, src: "/2024/29.jpeg", alt: "Event Photo 29" },
  { id: 30, src: "/2024/30.jpeg", alt: "Event Photo 30" },
  { id: 31, src: "/2024/31.jpeg", alt: "Event Photo 31" },
  { id: 32, src: "/2024/32.jpeg", alt: "Event Photo 32" },
  { id: 33, src: "/2024/33.jpeg", alt: "Event Photo 33" },
  { id: 34, src: "/2024/34.jpeg", alt: "Event Photo 34" },
  { id: 35, src: "/2024/35.jpeg", alt: "Event Photo 35" },
  { id: 36, src: "/2024/36.jpeg", alt: "Event Photo 36" },
  { id: 37, src: "/2024/37.jpeg", alt: "Event Photo 37" },
  { id: 38, src: "/2024/38.jpeg", alt: "Event Photo 38" },
  { id: 39, src: "/2024/39.jpeg", alt: "Event Photo 39" },
  { id: 40, src: "/2024/40.jpeg", alt: "Event Photo 40" },
  { id: 41, src: "/2024/41.jpeg", alt: "Event Photo 41" },
  { id: 42, src: "/2024/42.jpeg", alt: "Event Photo 42" },
  { id: 43, src: "/2024/43.jpeg", alt: "Event Photo 43" },
  { id: 44, src: "/2024/44.jpeg", alt: "Event Photo 44" },
  { id: 45, src: "/2024/45.jpeg", alt: "Event Photo 45" },
  { id: 46, src: "/2024/46.jpeg", alt: "Event Photo 46" },
  { id: 47, src: "/2024/47.jpeg", alt: "Event Photo 47" },
  { id: 48, src: "/2024/48.jpeg", alt: "Event Photo 48" },
  { id: 49, src: "/2024/49.jpeg", alt: "Event Photo 49" },
  { id: 50, src: "/2024/50.jpeg", alt: "Event Photo 50" },
  { id: 51, src: "/2024/51.jpeg", alt: "Event Photo 51" },
  { id: 52, src: "/2024/52.jpeg", alt: "Event Photo 52" },
  { id: 53, src: "/2024/53.jpg", alt: "Event Photo 53" },
  { id: 54, src: "/2024/54.jpg", alt: "Event Photo 54" },
  { id: 55, src: "/2024/55.jpg", alt: "Event Photo 55" },
  { id: 56, src: "/2024/56.jpg", alt: "Event Photo 56" },
  { id: 57, src: "/2024/57.jpg", alt: "Event Photo 57" },
  { id: 58, src: "/2024/58.jpg", alt: "Event Photo 58" },
  { id: 59, src: "/2024/59.jpg", alt: "Event Photo 59" },
  { id: 60, src: "/2024/60.jpg", alt: "Event Photo 60" },
  { id: 61, src: "/2024/61.jpg", alt: "Event Photo 61" },
  { id: 62, src: "/2024/62.jpg", alt: "Event Photo 62" },
  { id: 63, src: "/2024/63.jpg", alt: "Event Photo 63" },
  { id: 64, src: "/2024/64.jpg", alt: "Event Photo 64" },
  { id: 65, src: "/2024/65.jpg", alt: "Event Photo 65" },
  { id: 66, src: "/2024/66.jpg", alt: "Event Photo 66" },
  { id: 67, src: "/2024/67.jpg", alt: "Event Photo 67" },
  { id: 68, src: "/2024/68.jpg", alt: "Event Photo 68" },
  { id: 69, src: "/2024/69.jpg", alt: "Event Photo 69" },
  { id: 70, src: "/2024/70.jpg", alt: "Event Photo 70" },
  { id: 71, src: "/2024/71.jpg", alt: "Event Photo 71" },
  { id: 72, src: "/2024/72.jpg", alt: "Event Photo 72" },
  { id: 73, src: "/2024/73.jpg", alt: "Event Photo 73" },
  { id: 74, src: "/2024/74.jpg", alt: "Event Photo 74" },
  { id: 75, src: "/2024/75.jpg", alt: "Event Photo 75" },
  { id: 76, src: "/2024/76.jpg", alt: "Event Photo 76" },
  { id: 77, src: "/2024/77.jpg", alt: "Event Photo 77" },
  { id: 78, src: "/2024/78.jpg", alt: "Event Photo 78" },
  { id: 79, src: "/2024/79.jpg", alt: "Event Photo 79" },
  { id: 80, src: "/2024/80.jpg", alt: "Event Photo 80" },
  { id: 81, src: "/2024/81.jpg", alt: "Event Photo 81" },
  { id: 82, src: "/2024/82.jpg", alt: "Event Photo 82" },
  { id: 83, src: "/2024/83.jpg", alt: "Event Photo 83" },
  { id: 84, src: "/2024/84.jpg", alt: "Event Photo 84" },
  { id: 85, src: "/2024/85.jpg", alt: "Event Photo 85" },
  { id: 86, src: "/2024/86.jpg", alt: "Event Photo 86" },
  { id: 87, src: "/2024/87.jpg", alt: "Event Photo 87" },
  { id: 88, src: "/2024/88.jpg", alt: "Event Photo 88" },
  { id: 89, src: "/2024/89.jpg", alt: "Event Photo 89" },
  { id: 90, src: "/2024/90.jpg", alt: "Event Photo 90" },
  { id: 91, src: "/2024/91.jpg", alt: "Event Photo 91" },
  { id: 92, src: "/2024/92.jpg", alt: "Event Photo 92" },
  { id: 93, src: "/2024/93.jpg", alt: "Event Photo 93" },
  { id: 94, src: "/2024/94.jpg", alt: "Event Photo 94" },
  { id: 95, src: "/2024/95.jpg", alt: "Event Photo 95" },
  { id: 96, src: "/2024/96.jpg", alt: "Event Photo 96" },
  { id: 97, src: "/2024/97.jpg", alt: "Event Photo 97" },
  { id: 98, src: "/2024/98.jpg", alt: "Event Photo 98" },
  { id: 99, src: "/2024/99.jpg", alt: "Event Photo 99" },
  { id: 100, src: "/2024/100.jpg", alt: "Event Photo 100" },
  { id: 101, src: "/2024/101.jpg", alt: "Event Photo 101" },
  { id: 102, src: "/2024/102.jpg", alt: "Event Photo 102" },
  { id: 103, src: "/2024/103.jpg", alt: "Event Photo 103" },
  { id: 104, src: "/2024/104.jpg", alt: "Event Photo 104" },
  { id: 105, src: "/2024/105.jpg", alt: "Event Photo 105" },
  { id: 106, src: "/2024/106.jpg", alt: "Event Photo 106" },
  { id: 107, src: "/2024/107.jpg", alt: "Event Photo 107" },
  { id: 108, src: "/2024/108.jpg", alt: "Event Photo 108" },
  { id: 109, src: "/2024/109.jpg", alt: "Event Photo 109" },
  { id: 110, src: "/2024/110.jpg", alt: "Event Photo 110" },
  { id: 111, src: "/2024/111.jpg", alt: "Event Photo 111" },
  { id: 112, src: "/2024/112.jpg", alt: "Event Photo 112" },
  { id: 113, src: "/2024/113.jpg", alt: "Event Photo 113" },
  { id: 114, src: "/2024/114.jpg", alt: "Event Photo 114" },
  { id: 115, src: "/2024/115.jpg", alt: "Event Photo 115" },
  { id: 116, src: "/2024/116.jpg", alt: "Event Photo 116" },
  { id: 117, src: "/2024/117.jpg", alt: "Event Photo 117" },
  { id: 118, src: "/2024/118.jpg", alt: "Event Photo 118" },
  { id: 119, src: "/2024/119.jpg", alt: "Event Photo 119" },
  { id: 120, src: "/2024/120.jpg", alt: "Event Photo 120" },
  { id: 121, src: "/2024/121.jpg", alt: "Event Photo 121" },
  { id: 122, src: "/2024/122.jpg", alt: "Event Photo 122" },
  { id: 123, src: "/2024/123.jpg", alt: "Event Photo 123" },
  { id: 124, src: "/2024/124.jpg", alt: "Event Photo 124" },
  { id: 125, src: "/2024/125.jpg", alt: "Event Photo 125" },
  { id: 126, src: "/2024/126.jpg", alt: "Event Photo 126" },
  { id: 127, src: "/2024/127.jpg", alt: "Event Photo 127" },
  { id: 128, src: "/2024/128.jpg", alt: "Event Photo 128" },
  { id: 129, src: "/2024/129.jpg", alt: "Event Photo 129" },
  { id: 130, src: "/2024/130.jpg", alt: "Event Photo 130" },
  { id: 131, src: "/2024/131.jpg", alt: "Event Photo 131" },
  { id: 132, src: "/2024/132.jpg", alt: "Event Photo 132" },
  { id: 133, src: "/2024/133.jpg", alt: "Event Photo 133" },
  { id: 134, src: "/2024/134.jpg", alt: "Event Photo 134" },
  { id: 135, src: "/2024/135.jpg", alt: "Event Photo 135" },
  { id: 136, src: "/2024/136.jpg", alt: "Event Photo 136" },
  { id: 137, src: "/2024/137.jpg", alt: "Event Photo 137" },
  { id: 138, src: "/2024/138.jpg", alt: "Event Photo 138" },
  { id: 139, src: "/2024/139.jpg", alt: "Event Photo 139" },
  { id: 140, src: "/2024/140.jpg", alt: "Event Photo 140" },
  { id: 141, src: "/2024/141.jg", alt: "Event Photo 141" },
  { id: 142, src: "/2024/142.jpg", alt: "Event Photo 142" },
  { id: 143, src: "/2024/143.jpg", alt: "Event Photo 143" },
  { id: 144, src: "/2024/144.jpg", alt: "Event Photo 144" },
  { id: 145, src: "/2024/145.jpg", alt: "Event Photo 145" },
  { id: 146, src: "/2024/146.jpg", alt: "Event Photo 146" },
  { id: 147, src: "/2024/147.jpg", alt: "Event Photo 147" },
  { id: 148, src: "/2024/148.jpg", alt: "Event Photo 148" },
  { id: 149, src: "/2024/149.jpg", alt: "Event Photo 149" },
  { id: 150, src: "/2024/150.jpg", alt: "Event Photo 150" },
  { id: 151, src: "/2024/151.jpg", alt: "Event Photo 151" },
  { id: 152, src: "/2024/152.jpg", alt: "Event Photo 152" },
  { id: 153, src: "/2024/153.jpg", alt: "Event Photo 153" },
  { id: 154, src: "/2024/154.jpg", alt: "Event Photo 154" },
  { id: 155, src: "/2024/155.jpg", alt: "Event Photo 155" },
  { id: 156, src: "/2024/156.jpg", alt: "Event Photo 156" },
  { id: 157, src: "/2024/157.jpg", alt: "Event Photo 157" },
  { id: 158, src: "/2024/158.jpg", alt: "Event Photo 158" },
  { id: 159, src: "/2024/159.jpg", alt: "Event Photo 159" },
  { id: 160, src: "/2024/160.jpg", alt: "Event Photo 160" },
  { id: 161, src: "/2024/161.jpg", alt: "Event Photo 161" },
  { id: 162, src: "/2024/162.jpg", alt: "Event Photo 162" },
  { id: 163, src: "/2024/163.jpg", alt: "Event Photo 163" },
  { id: 164, src: "/2024/164.jpg", alt: "Event Photo 164" },
  { id: 165, src: "/2024/165.jpg", alt: "Event Photo 165" },
  { id: 166, src: "/2024/166.jpg", alt: "Event Photo 166" },
  { id: 167, src: "/2024/167.jpg", alt: "Event Photo 167" },
  { id: 168, src: "/2024/168.jpg", alt: "Event Photo 168" },
  { id: 169, src: "/2024/169.jpg", alt: "Event Photo 169" },
  { id: 170, src: "/2024/170.jpg", alt: "Event Photo 170" },
  { id: 171, src: "/2024/171.jpg", alt: "Event Photo 171" },
  { id: 172, src: "/2024/172.jpg", alt: "Event Photo 172" },
  { id: 173, src: "/2024/173.jpg", alt: "Event Photo 173" },
  { id: 174, src: "/2024/174.jpg", alt: "Event Photo 174" },
  { id: 175, src: "/2024/175.jpg", alt: "Event Photo 175" },
  { id: 176, src: "/2024/176.jpg", alt: "Event Photo 176" },
  { id: 177, src: "/2024/177.jpg", alt: "Event Photo 177" },
  { id: 178, src: "/2024/178.jpg", alt: "Event Photo 178" },
  { id: 179, src: "/2024/179.jpg", alt: "Event Photo 179" },
  { id: 180, src: "/2024/180.jpg", alt: "Event Photo 180" },
  { id: 181, src: "/2024/181.jpg", alt: "Event Photo 181" },
  { id: 182, src: "/2024/182.jpg", alt: "Event Photo 182" },
  { id: 183, src: "/2024/183.jpg", alt: "Event Photo 183" },
  { id: 184, src: "/2024/184.jpg", alt: "Event Photo 184" },
  { id: 185, src: "/2024/185.jpg", alt: "Event Photo 185" },
  { id: 186, src: "/2024/186.jpg", alt: "Event Photo 186" },
  { id: 187, src: "/2024/187.jpg", alt: "Event Photo 187" },
  { id: 188, src: "/2024/188.jpg", alt: "Event Photo 188" },
  { id: 189, src: "/2024/189.jpg", alt: "Event Photo 189" },
  { id: 190, src: "/2024/190.jpg", alt: "Event Photo 190" },
  { id: 191, src: "/2024/191.jpg", alt: "Event Photo 191" },
  { id: 192, src: "/2024/192.jpg", alt: "Event Photo 192" },
  { id: 193, src: "/2024/193.jpg", alt: "Event Photo 193" },
  { id: 194, src: "/2024/194.jpg", alt: "Event Photo 194" },
  { id: 195, src: "/2024/195.jpg", alt: "Event Photo 195" },
  { id: 196, src: "/2024/196.jpg", alt: "Event Photo 196" },
  { id: 197, src: "/2024/197.jpg", alt: "Event Photo 197" },
  { id: 198, src: "/2024/198.jpg", alt: "Event Photo 198" },
  { id: 199, src: "/2024/199.jpg", alt: "Event Photo 199" },
  { id: 200, src: "/2024/200.jpg", alt: "Event Photo 200" },
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
            2024 Album
          </h1>
          {/* Back to Gallery button - using a standard anchor tag for navigation */}
          <Link  href="/">
            {" "}
            {/* Direct link to the main page */}
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition duration-300 shadow-lg">
              Back to Gallery
            </button>
          </Link>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {year202223Images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg group transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-700"
            >
              <Image
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

      {/* Tailwind CSS CDN for quick setup 
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
      />*/}
    </div>
  );
}
