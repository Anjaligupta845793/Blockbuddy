"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-[#0f1b14] text-[#f5f5f5] z-50 relative shadow-md">
      <div className="max-w-[1260px] mx-auto flex justify-between items-center p-6 md:p-8">
        <h1 className="font-bold text-2xl md:text-3xl text-green-400 hover:text-green-300 transition cursor-pointer">
          BLOCKBUDDY
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-lg md:text-xl">
          <li>
            <a href="/Services" className="hover:text-green-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="/Results" className="hover:text-green-400 transition">
              Results
            </a>
          </li>
          <li>
            <a
              href="/CreatorProgram"
              className="hover:text-green-400 transition"
            >
              Creator Program
            </a>
          </li>
          <li>
            <a
              href="/book"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded-md shadow-lg uppercase tracking-wider border border-white"
            >
              Book a Call
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-green-400"></span>
          <span className="block w-6 h-0.5 bg-green-400"></span>
          <span className="block w-6 h-0.5 bg-green-400"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-[#0f1b14] text-lg border-t border-[#1e2b23]">
          <li>
            <a
              href="/"
              className="hover:text-green-400"
              onClick={() => setNavOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/Services"
              className="hover:text-green-400"
              onClick={() => setNavOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/Results"
              className="hover:text-green-400"
              onClick={() => setNavOpen(false)}
            >
              Results
            </a>
          </li>
          <li>
            <a
              href="/CreatorProgram"
              className="hover:text-green-400"
              onClick={() => setNavOpen(false)}
            >
              Creator Program
            </a>
          </li>
          <li>
            <a
              href="/book"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded-md shadow-lg uppercase tracking-wider border border-white"
              onClick={() => setNavOpen(false)}
            >
              Book a Call
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
