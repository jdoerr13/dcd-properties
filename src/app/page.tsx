"use client";
import { useState } from "react";
import React from "react";  
import Image from "next/image";
import { motion } from "framer-motion";
import { Nunito } from "next/font/google";
import { FiMenu, FiX } from "react-icons/fi";

const nunito = Nunito({ subsets: ["latin"], weight: ["800"] });

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("https://formspree.io/f/xrbkzqyw", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });
    if (response.ok) {
      setContactSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/wv2.jpeg"
          alt="Hero background"
          fill
          unoptimized
          priority
          className="object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0" />

        {/* Sticky Logo - Desktop */}
        <div className="fixed top-4 left-6 z-50 pointer-events-none select-none hidden md:block">
          <span
            className="inline-block rounded-xl"
            style={{
              boxShadow:
                "0 0 0 6px rgba(30,41,59,0.8), 0 6px 28px 8px rgba(0,0,0,0.85)"
            }}
            aria-hidden="true"
          >
            <Image
              src="/FullLogo_Transparent.png"
              alt="DCD Logo"
              width={275}
              height={100}
              priority
              className="object-contain"
              style={{
                filter: `
                  drop-shadow(0 0 6px #2563eb)
                  drop-shadow(0 0 2px #fff)
                  drop-shadow(0 2px 12px #000)
                `
              }}
            />
          </span>
        </div>

        {/* Sticky Logo - Mobile Only */}
        <div className="fixed top-3 left-3 z-50 md:hidden pointer-events-none select-none">
          <span
            className="inline-block rounded-2xl bg-black/60 p-1"
            style={{
              boxShadow: "0 0 0 6px rgba(30,41,59,0.2), 0 4px 18px 6px rgba(0,0,0,0.35)"
            }}
            aria-hidden="true"
          >
            <Image
              src="/FullLogo_Transparent.png"
              alt="DCD Logo"
              width={160}
              height={64}
              priority
              className="object-contain"
              style={{
                filter: `
                  drop-shadow(0 0 4px #2563eb)
                  drop-shadow(0 0 2px #fff)
                  drop-shadow(0 2px 8px #000)
                `
              }}
            />
          </span>
        </div>

        {/* NAV BAR */}
        <nav className="absolute top-0 left-0 w-full grid grid-cols-3 items-center px-8 py-6 z-20">
          {/* Left: Logo placeholder for spacing (no logo here on mobile now) */}
          <div className="flex-shrink-0 z-30">
            <span className="hidden md:inline-block" style={{ width: 120, height: 48 }} />
          </div>

          {/* Center: Nav Links (desktop only) */}
          <div className="hidden md:flex justify-center space-x-10 text-white font-semibold uppercase tracking-widest text-base drop-shadow-md">
          <a href="/maintenance" className="hover:text-blue-300 transition whitespace-nowrap">Maintenance Request</a>
            <a href="#listings" className="hover:text-blue-300 transition whitespace-nowrap">Rental Properties</a>
            <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
            <a href="/login" className="hover:text-blue-300 transition whitespace-nowrap">Tenant / Owner Login</a>

          </div>

          {/* Right: Contact link (desktop only) */}
          <div className="hidden md:flex justify-end">
            <a href="tel:3046147029" className="text-lg font-bold text-white hover:text-blue-300 transition drop-shadow-md">
              Call: 304-614-7029
            </a>
          </div>

          {/* Hamburger (mobile only, right side) */}
          <div className="md:hidden flex justify-end z-30 col-start-3">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              className="text-white text-3xl focus:outline-none"
            >
              {mobileNavOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU OVERLAY */}
        {mobileNavOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl font-semibold uppercase tracking-widest transition-all">
          <a href="/maintenance" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-300 transition"> Maintenance Request</a>
            <a href="#listings" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-300 transition whitespace-nowrap">Rental Properties</a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-300 transition">Contact</a>
            <a href="/login" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-300 transition whitespace-nowrap">
                Tenant / Owner Login
                      </a>

            <a href="tel:3046147029" onClick={() => setMobileNavOpen(false)} className="text-lg font-bold hover:text-blue-300 transition">Call: 304-614-7029</a>
          </div>
        )}

        {/* HERO CONTENT */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
          >
            {/* MAIN HEADER */}
            <h1
              className={`text-5xl md:text-7xl mb-4 tracking-tight font-extrabold uppercase ${nunito.className}`}
              style={{
                color: "#fff",
                textShadow: `
                  -3px -3px 0 #245191,
                  0   -3px 0 #245191,
                  3px -3px 0 #245191,
                  -3px  0   0 #245191,
                  3px  0   0 #245191,
                  -3px  3px 0 #245191,
                  0    3px 0 #245191,
                  3px  3px 0 #245191,
                  0 2px 10px rgba(0,0,0,0.45)
                `,
                fontWeight: 800,
                letterSpacing: '0.03em',
              }}
            >
              DCD PROPERTIES
            </h1>

            <h2 className="text-lg md:text-2xl text-blue-100 font-medium mb-6 drop-shadow-md">
              West Virginia’s Premiere Residential Property Management
            </h2>
            <motion.a
              href="#listings"
              whileHover={{ scale: 1.08 }}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
            >
              View Available Rentals
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Property Management",
                desc: "Full-service residential management from leasing to maintenance.",
              },
              {
                title: "Leasing & Placement",
                desc: "Tenant screening, advertising, and placement handled professionally.",
              },
              {
                title: "Eviction Handling",
                desc: "We manage legal and respectful eviction processes when necessary.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
                whileHover={{ scale: 1.04 }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#245191" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <section id="listings" className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Property Listings
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-2">
            Serving Elkins & Buckhannon, West Virginia
          </p>
          <p className="text-gray-700">
            All units are currently occupied.  Please contact us for next available rental.  
          </p>
        </div>
      </section>

     {/* CONTACT */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Contact Us
          </h2>
          {contactSubmitted ? (
            <div className="text-green-600 text-center font-semibold text-lg">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form
              onSubmit={handleContactSubmit}
              className="mx-auto max-w-2xl bg-gray-50 p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
                  <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address (optional)"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full md:col-span-3 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition md:col-span-3 font-semibold shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>



      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info: address, phone, email */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-10 text-sm text-center md:text-left mb-4 md:mb-0">
            <span>
              <strong>Address:</strong> 100 Westridge Drive, Elkins, WV 26241
            </span>
            <span>
              <strong>Phone:</strong> <a href="tel:3046147029" className="underline hover:text-blue-300">304-614-7029</a>
            </span>
            <span>
              <strong>Email:</strong> <a href="mailto:daviddoerr44@gmail.com" className="underline hover:text-blue-300">daviddoerr44@gmail.com</a>
            </span>
          </div>
          {/* Logins */}
       <div className="space-x-4">
          <a href="/login" className="hover:underline">
            Tenant / Owner Login
          </a>
        </div>
        </div>
      </footer>
    </div>
  );
}
