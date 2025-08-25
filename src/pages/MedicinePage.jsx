import React, { useState, useEffect } from "react";
import { FaPills, FaBoxes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import medicines from "../JsonFiles/MedicineList.json";

export default function MedicinePage({ currentSlide = 0 }) {
  const [is4K, setIs4K] = useState(false);

  useEffect(() => {
    const checkResolution = () => {
      setIs4K(window.innerWidth === 3840 && window.innerHeight === 2160);
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
        is4K ? "" : "p-3"
      }`}
    >
      {/* Layer 1: Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />

      {/* Layer 2: Radial light effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.7),_transparent_70%)]" />

      {/* Layer 3: SVG medical pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="medical-pattern"
            patternUnits="userSpaceOnUse"
            width="80"
            height="80"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              {/* Cross */}
              <path d="M30 10h20v10h10v20h-10v10H30V40H20V20h10z" />
              {/* Pill capsule */}
              <rect
                x="5"
                y="55"
                width="20"
                height="10"
                rx="5"
                ry="5"
                stroke="currentColor"
              />
              {/* Heartbeat line */}
              <polyline points="50,70 55,60 60,65 65,55 70,65 75,60" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#medical-pattern)" />
      </svg>

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <div
          className={`text-center ${
            is4K ? "mb-10 max-w-[2200px]" : "mb-5 max-w-[1400px]"
          }`}
        >
          <h1
            className={`${
              is4K ? "text-[4.5rem]" : "text-2xl md:text-3xl"
            } font-extrabold text-blue-900 leading-tight`}
          >
            <FaPills
              className={`${
                is4K ? "mr-6 text-[3.8rem]" : "mr-2 text-xl md:text-2xl"
              } inline-block text-teal-500 align-middle`}
            />
            Medicine Stock
          </h1>
          <p
            className={`${
              is4K ? "text-[2rem] mt-3" : "text-sm md:text-base mt-1"
            } text-gray-500`}
          >
            Last Updated: {new Date().toLocaleDateString()}
          </p>
          <p
            className={`${
              is4K ? "text-[1.8rem]" : "text-sm md:text-base"
            } text-gray-700 mt-1`}
          >
            Page {currentSlide + 1} of {slides.length}
          </p>
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
                  ? "grid grid-cols-3 gap-30 max-w-[90%]"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[95%]"
              }`}
            >
              {slides[currentSlide].map((col, colIndex) => (
                <div
                  key={colIndex}
                  className={`${
                    is4K ? "rounded-3xl shadow-md" : "rounded-xl shadow-sm"
                  } bg-white border border-blue-100 overflow-hidden`}
                >
                  {/* Column header */}
                  <div
                    className={`grid grid-cols-2 text-white font-bold bg-gradient-to-r from-blue-700 to-teal-500 ${
                      is4K ? "text-[2rem]" : "text-xs md:text-sm"
                    }`}
                  >
                    <div
                      className={`${is4K ? "p-6" : "p-2"} flex items-center`}
                    >
                      <FaPills
                        className={`${
                          is4K ? "mr-3 text-[1.5em]" : "mr-1 text-base"
                        }`}
                      />{" "}
                      Name of Medicine
                    </div>
                    <div
                      className={`${is4K ? "p-6" : "p-2"} flex items-center justify-center`}
                    >
                      <FaBoxes
                        className={`${
                          is4K ? "mr-3 text-[1.5em]" : "mr-1 text-base"
                        }`}
                      />{" "}
                      Stock
                    </div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-gray-100">
                    {col.map((med, i) => (
                      <div
                        key={i}
                        className={`grid grid-cols-2 transition-colors even:bg-blue-50 hover:bg-blue-100 ${
                          is4K ? "text-[2rem]" : "text-xs md:text-sm"
                        }`}
                      >
                        <div
                          className={`${
                            is4K ? "p-6 font-semibold" : "p-2 font-medium"
                          } text-gray-900`}
                        >
                          {med.name}
                        </div>
                        <div
                          className={`${is4K ? "p-6" : "p-2"} text-center font-bold`}
                        >
                          <span
                            className={`${
                              is4K
                                ? "px-6 py-3 text-[1.8rem]"
                                : "px-2 py-1 text-[0.7rem] md:text-xs"
                            } rounded-full shadow-sm ${
                              med.stock === "Available"
                                ? "bg-green-100 text-green-800 border border-green-300"
                                : "bg-red-100 text-red-800 border border-red-300"
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
                              is4K ? "text-[2rem]" : "text-xs md:text-sm"
                            } grid grid-cols-2 even:bg-blue-50`}
                          >
                            <div
                              className={`${is4K ? "p-6" : "p-2"} text-gray-300`}
                            >
                              —
                            </div>
                            <div
                              className={`${is4K ? "p-6" : "p-2"} text-center text-gray-300`}
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