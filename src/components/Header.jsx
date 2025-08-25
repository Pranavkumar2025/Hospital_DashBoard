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
    <header className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 px-20 py-12 flex justify-between items-center shadow-[0_8px_25px_rgba(0,0,0,0.15)] border-b-8 border-blue-300">
      <div className="flex items-center gap-10">
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-full shadow-lg border border-blue-200">
          <span role="img" aria-label="hospital" className="text-8xl">🏥</span>
        </div>
        <h1 className="text-white font-extrabold text-7xl tracking-wide drop-shadow-lg">
          Munger Hospital Dashboard
        </h1>
      </div>
      <div className="bg-white/80 backdrop-blur-lg px-14 py-6 rounded-2xl shadow-lg border-4 border-blue-200 animate-pulse-slow">
        <span className="text-blue-800 font-extrabold text-6xl tracking-wide">
          {time}
        </span>
      </div>
    </header>
  ) : (
    // ----------- LAPTOP HEADER -----------
    <header className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 px-4 md:px-6 py-2 flex flex-wrap md:flex-nowrap justify-between items-center shadow-md border-b-2 border-blue-300 gap-3">
      <div className="flex items-center gap-3">
        <div className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm flex items-center justify-center border border-blue-200">
          <span role="img" aria-label="hospital" className="text-2xl md:text-3xl">🏥</span>
        </div>
        <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-wide">
          Munger Hospital Dashboard
        </h1>
      </div>
      <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm border border-blue-200 animate-pulse-slow">
        <span className="text-blue-800 font-bold text-base md:text-lg tracking-wide">
          {time}
        </span>
      </div>
    </header>
  );
}
