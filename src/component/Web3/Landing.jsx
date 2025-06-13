import React from "react";
import Image from "next/image";
import Services from "./Services";
import Home from "../Hero";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Strategy from "./Strategy";
import CaseStudy from "./CaseStudy";
import FounderCard from "./Team";

const LandingPage = () => {
  return (
    <div className="bg-[var(--primary)] text-[var(--secondary)]">
      {/* 1. Navbar */}
      {/* <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
        <div className="text-white font-bold text-xl">
          MarkUp<span className="text-[var(--secondary)]">Media</span>
        </div>
        <div className="flex gap-6 text-white">
          <a href="#blogs">Blogs</a>
          <a href="#creative-program">Creative Program</a>
          <a href="#contact">Contact</a>
        </div>
      </nav> */}
      <Navbar />

      {/* 2. Hero Section */}
      {/* <section className="py-20">
        <div className="max-w-[1260px] mx-auto px-3 flex md:flex-row flex-col gap-6">
          <div className="md:w-3/5 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white text-center md:text-left">
              MarkUp<span className="text-[var(--secondary)]">Media</span>
            </h1>
            <p className="text-lg mt-4 text-white text-center md:text-left">
              We don't just market - We deliver Image sending in few mins
            </p>
          </div>
          <div className=" w-full flex justify-center">
            <Image
              src="/herosection.png"
              width={400}
              height={400}
              alt="Innovative Technology Illustration"
              className="rounded-lg"
            />
          </div>
        </div>
      </section> */}
      <Hero />

      {/* 3. Our Services */}
      <Services />
      {/* 4. SaaS */}
      <section className="py-20 text-center bg-[var(--primary)] text-[var(--secondary)]">
        <h2 className="text-5xl font-extrabold leading-tight">
          Powerful SaaS Solutions for Modern Teams
        </h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">
          Join 10,000+ businesses using our cloud-based platform to automate
          workflows, reduce costs, and scale effortlessly — all with zero
          downtime.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-[#0a0a0a] shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">99.99% Uptime</h3>
            <p className="text-sm text-gray-600">
              Our robust infrastructure ensures your apps are always available,
              even during peak traffic.
            </p>
          </div>

          <div className="p-6 bg-[#0a0a0a] shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              Scalable from Day One
            </h3>
            <p className="text-sm text-gray-600">
              Whether you’re a startup or an enterprise, our platform scales
              with your needs.
            </p>
          </div>

          <div className="p-6 bg-[#0a0a0a] shadow-md rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              Trusted by Global Brands
            </h3>
            <p className="text-sm text-gray-600">
              Companies like Acme Corp, Orbify, and Zentro rely on us to power
              their operations.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Web3 */}
      <section className="py-20 text-center bg-[var(--primary)] text-[var(--secondary)]">
        <h2 className="text-4xl font-bold">Web3 Innovations</h2>
        <p className="text-lg mt-4 text-gray-700 max-w-2xl mx-auto">
          Explore decentralized solutions powered by blockchain for secure and
          transparent digital experiences — including NFTs, DAOs, and DeFi
          tools.
        </p>
      </section>

      {/* 6. Case Studies / Blogs */}
      {/* <section
        className="py-20 text-center bg-[var(--primary)] text-[var(--secondary)]"
        id="blogs"
      >
        <h2 className="text-4xl font-bold text-[var(--secondary)]">
          Case Studies & Blogs
        </h2>
        <p className="text-lg mt-4 max-w-2xl text-gray-600 mx-auto">
          Discover our success stories and insights on the latest trends in
          technology and media.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              title: "How We Helped Orbify Cut Cloud Costs by 40%",
              snippet:
                "Learn how our cloud optimization strategy helped Orbify streamline infrastructure...",
            },
            {
              title: "Designing Intuitive UI for Fintech Apps",
              snippet:
                "A deep dive into the psychology and structure behind our most successful designs...",
            },
            {
              title: "Integrating Blockchain with Real-World Use Cases",
              snippet:
                "Discover how MauskUpMedia created a transparent rewards system using NFTs...",
            },
          ].map((blog, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-6 rounded-lg shadow-md text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.snippet}</p>
            </div>
          ))}
        </div>
      </section> */}
      <Strategy />
      <CaseStudy />

      {/* 7. Testimonials */}
      <section className="py-20 bg-[var(--primary)] text-[var(--secondary)] text-center">
        <h2 className="text-4xl font-bold text-[var(--secondary)]">
          Testimonials
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              quote:
                "Markup Media transformed our business with their innovative solutions!",
              name: "John Doe",
              position: "CEO, Acme Corp",
            },
            {
              quote:
                "Their Web3 platform gave us a competitive edge. Truly future-ready tech.",
              name: "Sophia Lin",
              position: "Founder, DeFiNext",
            },
            {
              quote:
                "Professional, fast, and always on-point — couldn’t have asked for more.",
              name: "Raj Patel",
              position: "CTO, Zenbyte",
            },
          ].map((t, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl">
              <p className="italic">"{t.quote}"</p>
              <span className="block mt-4 text-[var(--secondary)]">
                — {t.name}, {t.position}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Meet the Team */}
      {/* <section className="py-20 text-center bg-[var(--primary)] text-[var(--secondary)]">
        <h2 className="text-4xl font-bold text-[var(--secondary)]">
          Meet the Team
        </h2>
        <p className="text-lg mt-4 max-w-2xl text-gray-600 mx-auto">
          Our passionate team of experts is dedicated to driving your success in
          the digital world.
        </p>
        <div className="mt-10 grid md:grid-cols-4 grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
          {[
            { name: "Aanya Verma", role: "CEO & Founder" },
            { name: "Karan Mehta", role: "Lead Blockchain Developer" },
            { name: "Priya Rathi", role: "UI/UX Designer" },
            { name: "Arjun Rao", role: "Head of Marketing" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-4 rounded-lg shadow text-center"
            >
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* 9. Footer */}
      <footer className="py-10 text-center border-t border-gray-600">
        <p className="text-white">© 2025 MauskUpMedia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
