"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });
import { Varela_Round } from "next/font/google";
const varela = Varela_Round({ subsets: ["latin"], weight: ["400"] }); // Varela Round is only one weight
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: ["800"] });



export default function Home() {
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

        {/* Sticky Logo - only visible on desktop */}
        <div className="fixed top-4 left-6 z-50 pointer-events-none select-none hidden md:block">
          <span
            className="inline-block rounded-xl"
            style={{
              boxShadow:
                "0 0 0 6px rgba(30,41,59,0.8), 0 6px 28px 8px rgba(0,0,0,0.85)"
            }}
            aria-hidden="true"
          >

      {/* DESKTOP */}
            <Image
              src="/FullLogo_Transparent.png"
              alt="DCD Logo"
              width={275} // or 120 for mobile
              height={100}
              priority
              className="object-contain"
              style={{
                filter: `
                  drop-shadow(0 0 6px #2563eb)    /* blue glow */
                  drop-shadow(0 0 2px #fff)      /* white inner edge */
                  drop-shadow(0 2px 12px #000)   /* black outer shadow */
                `
              }}
            />
          </span>
        </div>

        {/* MOBILE */}
        <nav className="absolute top-0 left-0 w-full grid grid-cols-3 items-center px-8 py-6 z-20">
          {/* First column: logo on mobile, placeholder on desktop */}
          <div className="flex-shrink-0">
            {/* Show logo on mobile only, hide on md+ */}
            <span className="block md:hidden">
             <Image
                src="/FullLogo_Transparent.png"
                alt="DCD Logo"
                width={120}
                height={48}
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

            
            {/* Invisible placeholder div on desktop to preserve grid */}
            <span className="hidden md:inline-block" style={{ width: 120, height: 48 }} />
          </div>
          {/* Center nav links */}
          <div className="hidden md:flex justify-center space-x-10 text-white font-semibold uppercase tracking-widest text-base drop-shadow-md">
            <a href="#services" className="hover:text-blue-300 transition">Services</a>
            <a href="#listings" className="hover:text-blue-300 transition whitespace-nowrap">Rental Properties</a>
            <a href="#contact" className="hover:text-blue-300 transition">Contact</a>
            <a href="#" className="hover:text-blue-300 transition whitespace-nowrap">Tenant / Owner Login</a>
          </div>
          {/* Right side contact link */}
          <div className="hidden md:flex justify-end">
            <a href="tel:3046147020" className="text-lg font-bold text-white hover:text-blue-300 transition drop-shadow-md">
              Call: 304-614-7020
            </a>
          </div>
        </nav>

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
          letterSpacing: '0.03em', // tighter tracking
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
              style={{ color: "#245191" }} // Custom navy blue
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
            [Placeholder for live listings or property cards]
          </p>
        </div>
    </section>

   {/* CONTACT */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Contact Us
          </h2>
          <form
            className="mx-auto max-w-2xl bg-gray-50 p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full md:col-span-3 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition md:col-span-3 font-semibold shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>



      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            <p>
              <strong>Address:</strong> 100 Westridge Drive, Elkins, WV 26241
            </p>
            <p>
              <strong>Phone:</strong> 304-614-7020
            </p>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Owner Login
            </a>
            <a href="#" className="hover:underline">
              Tenant Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
