import React, { useState, useEffect } from "react";
import { FaPills, FaBoxes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import medicines from "../JsonFiles/MedicineList.json";

export default function MedicinePage({ currentSlide = 0 }) {
  const [is4K, setIs4K] = useState(false);

  useEffect(() => {
    const checkResolution = () => {
      setIs4K(window.innerWidth >= 3840 && window.innerHeight >= 2160);
    };
    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => window.removeEventListener("resize", checkResolution);
  }, []);

  const chunkSize = 12;
  const columnsPerSlide = 3;
  const itemsPerSlide = chunkSize * columnsPerSlide;

  const slides = [];
  for (let i = 0; i < medicines.length; i += itemsPerSlide) {
    const slideChunk = medicines.slice(i, i + itemsPerSlide);
    const columns = [];
    for (let j = 0; j < slideChunk.length; j += chunkSize) {
      columns.push(slideChunk.slice(j, j + chunkSize));
    }
    while (columns.length < columnsPerSlide) {
      columns.push([]);
    }
    slides.push(columns);
  }

  return is4K ? (
    // ----------- 4K VERSION -----------
    <div className="p-12 min-h-screen flex flex-col items-center bg-gray-900 text-gray-200">
      {/* Layer 1: Glassmorphism background */}
      <div
        className="absolute inset-0 bg-white/20 z-0"
        style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), rgba(128, 128, 128, 0.05))" }}
      />

      {/* Layer 2: SVG medical pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="medical-pattern"
            patternUnits="userSpaceOnUse"
            width="80"
            height="80"
          >
            <g fill="none" stroke="rgba(200, 200, 200, 0.3)" strokeWidth="1">
              <path d="M30 10h20v10h10v20h-10v10H30V40H20V20h10z" />
              <rect x="5" y="55" width="20" height="10" rx="5" ry="5" stroke="currentColor" />
              <polyline points="50,70 55,60 60,65 65,55 70,65 75,60" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#medical-pattern)" />
      </svg>

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center max-w-[90vw] min-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16 max-w-[2200px]">
          <h1 className="text-[6rem] font-bold leading-tight text-yellow-500 flex items-center justify-center">
            <FaPills className="mr-8 text-yellow-400 text-[5rem]" />
            Medicine Stock
          </h1>
          <p className="mt-6 text-[3rem] text-gray-300 font-medium">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
          <div className="mt-4 text-[2.5rem] text-gray-100 bg-gray-800 px-6 py-2 rounded-lg shadow-md">
            <span className="font-semibold"></span> Page {currentSlide + 1} of {slides.length}
          </div>
        </div>

        {/* Slide content */}
        <div className="overflow-x-auto w-full flex justify-center max-h-[80vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-12 max-w-[90vw]"
            >
              {slides[currentSlide].map((col, colIndex) => (
                <div
                  key={colIndex}
                  className="rounded-[2vw] shadow-lg bg-gray-800/70 border border-blue-300/30 overflow-hidden"
                >
                  {/* Column header */}
                  <div className="grid grid-cols-2 text-white font-bold bg-gradient-to-r from-blue-600 to-teal-600 text-[3rem] p-12">
                    <div className="flex items-center">
                      <FaPills className="mr-6 text-blue-600 text-[2.5rem]" /> Name of Medicine
                    </div>
                    <div className="flex items-center justify-center">
                      <FaBoxes className="mr-6 text-blue-600 text-[2.5rem]" /> Stock
                    </div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-blue-300/30">
                    {col.map((med, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-2 transition-colors even:bg-gray-700/70 hover:bg-blue-900/50 text-[2.5rem]"
                      >
                        <div className="p-10 font-semibold text-gray-200">{med.name}</div>
                        <div className="p-10 text-center font-bold">
                          <span
                            className={`px-10 py-4 rounded-full shadow-sm text-[2rem] border ${
                              med.stock === "Available"
                                ? "bg-teal-600 text-white border-teal-700 shadow-[0_0_8px_rgba(20,184,166,0.3)]"
                                : "bg-rose-600 text-white border-rose-700 shadow-[0_0_8px_rgba(225,29,72,0.3)]"
                            }`}
                          >
                            {med.stock}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Empty slots */}
                    {col.length < chunkSize &&
                      Array.from({ length: chunkSize - col.length }).map((_, idx) => (
                        <div key={`empty-${idx}`} className="text-[2.5rem] grid grid-cols-2 even:bg-gray-700/70">
                          <div className="p-10 text-gray-500">—</div>
                          <div className="p-10 text-center text-gray-500">—</div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  ) : (
    // ----------- LAPTOP VERSION -----------
    <div className="p-3 md:p-6 lg:p-8 min-h-screen flex flex-col items-center bg-gray-900 text-gray-200">
      {/* Layer 1: Glassmorphism background */}
      <div
        className="absolute inset-0 bg-white/20 z-0"
        style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), rgba(128, 128, 128, 0.05))" }}
      />

      {/* Layer 2: SVG medical pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="medical-pattern"
            patternUnits="userSpaceOnUse"
            width="80"
            height="80"
          >
            <g fill="none" stroke="rgba(200, 200, 200, 0.3)" strokeWidth="1">
              <path d="M30 10h20v10h10v20h-10v10H30V40H20V20h10z" />
              <rect x="5" y="55" width="20" height="10" rx="5" ry="5" stroke="currentColor" />
              <polyline points="50,70 55,60 60,65 65,55 70,65 75,60" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#medical-pattern)" />
      </svg>

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center max-w-[90vw]">
        {/* Header */}
        <div className="text-center mb-5 max-w-[2200px]">
          <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-500 flex items-center justify-center">
            <FaPills className="mr-2 text-yellow-400 text-xl md:text-2xl" />
            Medicine Stock
          </h1>
          <p className="mt-1 text-sm md:text-base text-gray-300">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
          <div className="mt-2 text-sm md:text-base text-gray-100 bg-gray-800 px-3 py-1 rounded-lg shadow-md">
            <span className="font-semibold">Page Navigation:</span> Page {currentSlide + 1} of {slides.length}
          </div>
        </div>

        {/* Slide content */}
        <div className="overflow-x-auto w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[98%]"
            >
              {slides[currentSlide].map((col, colIndex) => (
                <div
                  key={colIndex}
                  className="rounded-xl shadow-sm bg-gray-800/70 border border-blue-300/30 overflow-hidden"
                >
                  {/* Column header */}
                  <div className="grid grid-cols-2 text-white font-bold bg-gradient-to-r from-blue-600 to-teal-600 text-sm md:text-base p-3 md:p-4">
                    <div className="flex items-center">
                      <FaPills className="mr-1 text-blue-600 text-lg md:text-xl" /> Name of Medicine
                    </div>
                    <div className="flex items-center justify-center">
                      <FaBoxes className="mr-1 text-blue-600 text-lg md:text-xl" /> Stock
                    </div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-blue-300/30">
                    {col.map((med, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-2 transition-colors even:bg-gray-700/70 hover:bg-blue-900/50 text-xs md:text-sm"
                      >
                        <div className="p-3 md:p-4 font-medium text-gray-200">{med.name}</div>
                        <div className="p-3 md:p-4 text-center font-bold">
                          <span
                            className={`px-3 py-2 rounded-full shadow-sm text-[0.7rem] md:text-xs border ${
                              med.stock === "Available"
                                ? "bg-green-600 text-white border-teal-700 shadow-[0_0_8px_rgba(20,184,166,0.3)]"
                                : "bg-red-600 text-white border-rose-700 shadow-[0_0_8px_rgba(225,29,72,0.3)]"
                            }`}
                          >
                            {med.stock}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Empty slots */}
                    {col.length < chunkSize &&
                      Array.from({ length: chunkSize - col.length }).map((_, idx) => (
                        <div key={`empty-${idx}`} className="text-xs md:text-sm grid grid-cols-2 even:bg-gray-700/70">
                          <div className="p-3 md:p-4 text-gray-500">—</div>
                          <div className="p-3 md:p-4 text-center text-gray-500">—</div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}