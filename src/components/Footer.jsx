import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 border-t border-gray-700">
      <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center text-2xl">
        
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <span className="text-yellow-400 text-4xl">🏥</span>
          <span className="font-bold tracking-wide">Munger Hospital</span>
        </div>

        {/* Middle Section */}
        <div className="text-center mt-4 md:mt-0">
          <p className="text-lg md:text-xl text-gray-400">
            © {new Date().getFullYear()} Munger Hospital. All Rights Reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-10 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg md:text-xl"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300 text-lg md:text-xl"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
