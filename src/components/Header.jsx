import React, { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [is4K, setIs4K] = useState(window.innerWidth >= 3840);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

    const handleResize = () => {
      setIs4K(window.innerWidth >= 3840);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return is4K ? (
    // ----------- 4K HEADER -----------
    <header className="w-full bg-gradient-to-r from-blue-700 to-blue-500 px-16 py-10 flex justify-between items-center shadow-2xl border-b-8 border-blue-300">
      <div className="flex items-center gap-8">
        <div className="bg-white p-6 rounded-full shadow-lg">
          <span role="img" aria-label="hospital" className="text-8xl">🏥</span>
        </div>
        <h1 className="text-white font-extrabold text-7xl tracking-widest drop-shadow-xl">
          Munger Hospital Dashboard
        </h1>
      </div>
      <div className="bg-white px-12 py-6 rounded-2xl shadow-lg border-4 border-blue-200">
        <span className="text-blue-800 font-extrabold text-6xl tracking-wide">
          {time}
        </span>
      </div>
    </header>
  ) : (
    // ----------- LAPTOP HEADER -----------
    <header className="w-full bg-gradient-to-r from-blue-700 to-blue-500 px-4 md:px-6 py-2 flex flex-wrap md:flex-nowrap justify-between items-center shadow-md border-b-2 border-blue-300 gap-3">
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-full shadow-sm flex items-center justify-center">
          <span role="img" aria-label="hospital" className="text-2xl md:text-3xl">🏥</span>
        </div>
        <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-wide leading-snug">
          Munger Hospital Dashboard
        </h1>
      </div>
      <div className="bg-white px-3 py-1 rounded-lg shadow-sm border border-blue-200">
        <span className="text-blue-800 font-bold text-base md:text-lg tracking-wide">
          {time}
        </span>
      </div>
    </header>
  );
}
