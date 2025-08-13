import React from "react";

export default function Footer() {
  return (
    <>
      {/* Code 1: For 4K Screen (3840x2160) */}
      <footer className="hidden [@media(min-width:3000px)]:block w-full bg-gray-900 text-gray-100 py-8 border-t border-gray-700 h-40">
  <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center text-lg md:text-xl lg:text-2xl leading-relaxed">
    
    {/* Left Section */}
    <div className="flex items-center space-x-4">
      <span className="text-yellow-400 text-4xl">🏥</span>
      <span className="font-extrabold tracking-wide">Munger Hospital</span>
    </div>

    {/* Middle Section */}
    <div className="text-center mt-4 md:mt-0">
      <p className="text-gray-200 font-medium">
        © {new Date().getFullYear()} Munger Hospital. All Rights Reserved.
      </p>
    </div>

    {/* Right Section */}
    <div className="flex space-x-8 mt-4 md:mt-0 font-semibold">
      <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
        Privacy Policy
      </a>
      <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
        Terms of Use
      </a>
    </div>

  </div>
</footer>


      {/* Code 2: For Laptop Screen */}
      <footer className="block [@media(min-width:3000px)]:hidden w-full bg-gray-900 text-gray-300 py-1.5 border-t border-gray-700">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          {/* Left Section */}
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-lg">🏥</span>
            <span className="font-bold tracking-wide">Munger Hospital</span>
          </div>

          {/* Middle Section */}
          <div className="text-center mt-2 md:mt-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Munger Hospital. All Rights Reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
