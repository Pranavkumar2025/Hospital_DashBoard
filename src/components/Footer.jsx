import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-lg">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-xl">🏥</span>
          <span className="font-semibold">City Hospital</span>
        </div>

        {/* Middle Section */}
        <div className="text-center mt-2 md:mt-0">
          <p className="text-sm">
            © {new Date().getFullYear()} City Hospital. All Rights Reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
