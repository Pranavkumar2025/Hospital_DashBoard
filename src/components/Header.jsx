import React, { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-blue-700 to-blue-500 p-5 flex justify-between items-center shadow-lg border-b-4 border-blue-300">
      {/* Left Side - Logo & Name */}
      <div className="flex items-center gap-4">
        <div className="bg-white p-2 rounded-full shadow-md">
          <span role="img" aria-label="hospital" className="text-4xl">🏥</span>
        </div>
        <h1 className="text-white font-extrabold text-3xl tracking-wide drop-shadow-lg">
          City Hospital Dashboard
        </h1>
      </div>

      {/* Right Side - Time */}
      <div className="bg-white px-6 py-2 rounded-lg shadow-md border-2 border-blue-200">
        <span className="text-blue-800 font-bold text-2xl">{time}</span>
      </div>
    </header>
  );
}
