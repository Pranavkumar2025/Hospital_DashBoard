import React, { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-blue-700 to-blue-500 px-16 py-10 flex justify-between items-center shadow-2xl border-b-8 border-blue-300">
      {/* Left Side - Logo & Name */}
      <div className="flex items-center gap-8">
        <div className="bg-white p-6 rounded-full shadow-lg">
          <span role="img" aria-label="hospital" className="text-8xl">🏥</span>
        </div>
        <h1 className="text-white font-extrabold text-7xl tracking-widest drop-shadow-xl">
          Munger Hospital Dashboard
        </h1>
      </div>

      {/* Right Side - Time */}
      <div className="bg-white px-12 py-6 rounded-2xl shadow-lg border-4 border-blue-200">
        <span className="text-blue-800 font-extrabold text-6xl tracking-wide">
          {time}
        </span>
      </div>
    </header>
  );
}
