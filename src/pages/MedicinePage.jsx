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
    <div className={`bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col items-center ${is4K ? "" : "p-3"}`}>
      
      {/* Header */}
      <div className={`text-center ${is4K ? "mb-10 max-w-[2200px]" : "mb-5 max-w-[1400px]"}`}>
        <h1 className={`${is4K ? "text-[4.5rem]" : "text-2xl md:text-3xl"} font-extrabold text-green-900 leading-tight`}>
          <FaPills className={`${is4K ? "mr-6 text-[3.8rem]" : "mr-2 text-xl md:text-2xl"} inline-block text-green-600 align-middle`} />
          Medicine Stock
        </h1>
        <p className={`${is4K ? "text-[2rem] mt-3" : "text-sm md:text-base mt-1"} text-gray-500`}>
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        <p className={`${is4K ? "text-[1.8rem]" : "text-sm md:text-base"} text-gray-800 mt-1`}>
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
            className={`${is4K ? "grid grid-cols-3 gap-30 max-w-[90%]" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[95%]"}`}
          >
            {slides[currentSlide].map((col, colIndex) => (
              <div key={colIndex} className={`${is4K ? "rounded-3xl shadow-2xl" : "rounded-lg shadow"} bg-white border border-gray-200 overflow-hidden`}>
                
                {/* Column header */}
                <div className={`${is4K ? "text-[2rem]" : "text-xs md:text-sm"} grid grid-cols-2 bg-green-700 text-white font-bold`}>
                  <div className={`${is4K ? "p-6" : "p-2"} flex items-center`}>
                    <FaPills className={`${is4K ? "mr-3 text-[1.5em]" : "mr-1 text-base"}`} /> Name of Medicine
                  </div>
                  <div className={`${is4K ? "p-6" : "p-2"} flex items-center justify-center`}>
                    <FaBoxes className={`${is4K ? "mr-3 text-[1.5em]" : "mr-1 text-base"}`} /> Stock
                  </div>
                </div>

                {/* Items */}
                <div className="divide-y divide-gray-200">
                  {col.map((med, i) => (
                    <div key={i} className={`${is4K ? "text-[2rem]" : "text-xs md:text-sm"} grid grid-cols-2 hover:bg-green-50 transition`}>
                      <div className={`${is4K ? "p-6 font-semibold" : "p-2 font-medium"} text-gray-900`}>
                        {med.name}
                      </div>
                      <div className={`${is4K ? "p-6" : "p-2"} text-center font-bold`}>
                        <span className={`${is4K ? "px-6 py-3 text-[1.8rem]" : "px-2 py-1 text-[0.7rem] md:text-xs"} rounded-full shadow-sm ${
                          med.stock > 50
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-red-100 text-red-800 border border-red-300"
                        }`}>
                          {med.stock}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Empty slots */}
                  {col.length < chunkSize &&
                    Array.from({ length: chunkSize - col.length }).map((_, idx) => (
                      <div key={`empty-${idx}`} className={`${is4K ? "text-[2rem]" : "text-xs md:text-sm"} grid grid-cols-2`}>
                        <div className={`${is4K ? "p-6" : "p-2"} text-gray-300`}>—</div>
                        <div className={`${is4K ? "p-6" : "p-2"} text-center text-gray-300`}>—</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
