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

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center ${
        is4K ? "p-8" : "p-3"
      }`}
    >
      {/* Layer 1: Glassmorphism background */}
      <div
        className="absolute inset-0 bg-white/20 backdrop-blur-md z-0"
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
              <rect
                x="5"
                y="55"
                width="20"
                height="10"
                rx="5"
                ry="5"
                stroke="currentColor"
              />
              <polyline points="50,70 55,60 60,65 65,55 70,65 75,60" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#medical-pattern)" />
      </svg>

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center max-w-[90vw]">
        {/* Header */}
        <div
          className={`text-center ${is4K ? "mb-16" : "mb-5"} max-w-[2200px]`}
        >
          <h1
            className={`${
              is4K ? "text-[6vw] leading-[1.2]" : "text-2xl md:text-3xl"
            } font-extrabold text-yellow-500`}
          >
            <FaPills
              className={`${
                is4K ? "mr-8 text-[5vw] align-middle" : "mr-2 text-xl md:text-2xl"
              } inline-block text-yellow-400`}
            />
            Medicine Stock
          </h1>
          <p
            className={`${
              is4K ? "text-[3vw] mt-4" : "text-sm md:text-base mt-1"
            } text-gray-300`}
          >
            Last Updated: {new Date().toLocaleDateString()}
          </p>
          {/* Pagination below Last Updated */}
          <div
            className={`mt-4 ${
              is4K ? "text-[2.5vw]" : "text-sm md:text-base"
            } bg-gray-700 text-gray-200 px-6 py-2 rounded-lg shadow-md`}
          >
            <span className="font-semibold">Page Navigation:</span> Page{" "}
            {currentSlide + 1} of {slides.length}
          </div>
        </div>

        {/* Slide content */}
        <div className="overflow-x-auto w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: is4K ? 0.96 : 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: is4K ? 1.04 : 1.02 }}
              transition={{ duration: is4K ? 0.6 : 0.4, ease: "easeInOut" }}
              className={`${
                is4K
                  ? "grid grid-cols-3 gap-[4vw] max-w-[85vw]"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[95%]"
              }`}
            >
              {slides[currentSlide].map((col, colIndex) => (
                <div
                  key={colIndex}
                  className={`${
                    is4K ? "rounded-[2vw] shadow-lg" : "rounded-xl shadow-sm"
                  } bg-gray-800/70 border border-blue-300/30 overflow-hidden`}
                >
                  {/* Column header (Enlarged and enhanced) */}
                  <div
                    className={`grid grid-cols-2 text-white font-bold bg-gradient-to-r from-blue-600 to-teal-600 ${
                      is4K ? "text-[3.5vw] p-[2.5vw]" : "text-sm md:text-base p-3 md:p-4"
                    }`}
                  >
                    <div className="flex items-center">
                      <FaPills
                        className={`${
                          is4K ? "mr-[2vw] text-[2.5vw]" : "mr-2 text-lg md:text-xl"
                        } text-blue-600`}
                      />{" "}
                      Name of Medicine
                    </div>
                    <div className="flex items-center justify-center">
                      <FaBoxes
                        className={`${
                          is4K ? "mr-[2vw] text-[2.5vw]" : "mr-2 text-lg md:text-xl"
                        } text-blue-600`}
                      />{" "}
                      Stock
                    </div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-blue-300/30">
                    {col.map((med, i) => (
                      <div
                        key={i}
                        className={`grid grid-cols-2 transition-colors even:bg-gray-700/70 hover:bg-blue-900/50 ${
                          is4K ? "text-[2.5vw]" : "text-xs md:text-sm"
                        }`}
                      >
                        <div
                          className={`${
                            is4K ? "p-[2vw] font-semibold" : "p-2 font-medium"
                          } text-gray-200`}
                        >
                          {med.name}
                        </div>
                        <div
                          className={`${
                            is4K ? "p-[2vw]" : "p-2"
                          } text-center font-bold`}
                        >
                          <span
                            className={`${
                              is4K
                                ? "px-[2vw] py-[1vw] text-[2vw]"
                                : "px-2 py-1 text-[0.7rem] md:text-xs"
                            } rounded-full shadow-sm ${
                              med.stock === "Available"
                                ? "bg-green-600 text-white border border-green-700 shadow-[0_0_8px_rgba(34,197,94,0.3)]"
                                : "bg-red-600 text-white border border-red-700 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                            }`}
                          >
                            {med.stock}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Empty slots */}
                    {col.length < chunkSize &&
                      Array.from({ length: chunkSize - col.length }).map(
                        (_, idx) => (
                          <div
                            key={`empty-${idx}`}
                            className={`${
                              is4K ? "text-[2.5vw]" : "text-xs md:text-sm"
                            } grid grid-cols-2 even:bg-gray-700/70`}
                          >
                            <div
                              className={`${
                                is4K ? "p-[2vw]" : "p-2"
                              } text-gray-500`}
                            >
                              —
                            </div>
                            <div
                              className={`${
                                is4K ? "p-[2vw]" : "p-2"
                              } text-center text-gray-500`}
                            >
                              —
                            </div>
                          </div>
                        )
                      )}
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