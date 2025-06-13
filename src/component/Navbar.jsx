"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-[var(--primary)] text-[#F8FAFC] z-50 relative shadow-md">
      <div className="max-w-[1260px] mx-auto flex justify-between items-center p-6 md:p-8">
        <h1 className="font-bold text-2xl md:text-3xl transition cursor-pointer tracking-wide">
          MarkUP<span className="text-[var(--secondary)]">Media</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-lg md:text-xl">
          <li>
            <a href="/Services" className="hover:text-[#22D3EE] transition">
              Services
            </a>
          </li>
          <li>
            <a href="/Results" className="hover:text-[#22D3EE] transition">
              Results
            </a>
          </li>
          <li>
            <a
              href="/CreatorProgram"
              className="hover:text-[#22D3EE] transition"
            >
              Creator Program
            </a>
          </li>
          {/* <li>
            <a
              href="/book"
              className="bg-[#1A73E8] hover:bg-[#3B82F6] text-[#F8FAFC] font-bold px-4 py-2 rounded-md shadow-[-4px_6px_0px_0px_rgba(14,165,233,0.15)] uppercase tracking-wider border border-[#E0F2FE] transition"
            >
              Book a Call
            </a>
          </li> */}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-[var(--secondary)]"></span>
          <span className="block w-6 h-0.5 bg-[var(--secondary)]"></span>
          <span className="block w-6 h-0.5 bg-[var(--secondary)]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-[var(--primary)] text-lg border-t border-[var(--secondary)]">
          <li>
            <a
              href="/"
              className="hover:text-[var(--secondary)]"
              onClick={() => setNavOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/Services"
              className="hover:[var(--secondary)]"
              onClick={() => setNavOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/Results"
              className="hover:[var(--secondary)]"
              onClick={() => setNavOpen(false)}
            >
              Results
            </a>
          </li>
          <li>
            <a
              href="/CreatorProgram"
              className="hover:[var(--secondary)]"
              onClick={() => setNavOpen(false)}
            >
              Creator Program
            </a>
          </li>
          {/*  <li>
            <a
              href="/book"
              className="bg-[#1A73E8] hover:bg-[#3B82F6] text-[#F8FAFC] font-bold px-4 py-2 rounded-md shadow-[-4px_6px_0px_0px_rgba(14,165,233,0.15)] uppercase tracking-wider border border-[#E0F2FE] transition"
              onClick={() => setNavOpen(false)}
            >
              Book a Call
            </a>
          </li> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
