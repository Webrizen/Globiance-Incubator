import React, { useState } from "react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="body-font fixed top-0 left-0 right-0 mx-auto z-50">
      <div className="container mx-auto flex flex-wrap px-5 flex-row items-center bg-[rgba(225,225,225,0.3)] sm:py-8 py-5 backdrop-blur-2xl sm:my-4 rounded">
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <img src={Logo} alt="Globiance Incubator Logo" className="h-10" />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100 flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-200">Home</a>
          <a className="mr-5 hover:text-gray-200">Forms</a>
          <a className="mr-5 hover:text-gray-200">Disclaimer</a>
          <a className="mr-5 hover:text-gray-200">Privacy Policy</a>
        </nav>

        {/* Mobile navigation */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-50 hover:text-gray-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 py-4 z-10 bg-[rgba(225,225,225,0.2)] backdrop-blur-2xl">
            <div className="flex flex-col items-center text-center">
              <a className="mb-3 hover:text-gray-200">Home</a>
              <a className="mb-3 hover:text-gray-200">Forms</a>
              <a className="mb-3 hover:text-gray-200">Disclaimer</a>
              <a className="mb-3 hover:text-gray-200">Privacy Policy</a>
              <div>
                <button className="inline-flex items-center border-none bg-transparent py-2 px-8 hover:outline-none focus:outline-none hover:bg-white hover:text-gray-900 rounded text-base md:mr-4 mt-4 md:mt-0">
                  Sign In
                </button>
                <button className="inline-flex items-center border-2 border-gray-200 bg-transparent py-2 px-8 hover:outline-none focus:outline-none hover:bg-white hover:text-gray-900 rounded text-base mt-4 md:mt-0">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sign-in and Register buttons */}
        <div className="md:flex hidden">
          <button className="inline-flex items-center border-none bg-transparent py-2 px-8 hover:outline-none focus:outline-none hover:bg-white hover:text-gray-900 rounded text-base md:mr-4 mt-4 md:mt-0">
            Sign In
          </button>
          <button className="inline-flex items-center border-2 border-gray-200 bg-transparent py-2 px-8 hover:outline-none focus:outline-none hover:bg-white hover:text-gray-900 rounded text-base mt-4 md:mt-0">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
