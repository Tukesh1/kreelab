"use client";import ShowcaseNavbar from "@/components/navbar";
import Link from "next/link";
import { motion } from "framer-motion"; // For animations

const Showcase = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fafafa] via-white to-blue-50 overflow-hidden">
      {/* Background Grid with Gradient Overlay */}
      <div
        className="
          absolute inset-0 -z-10 h-full w-full
          bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
          bg-[size:24px_24px] opacity-80"
      />
      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-20 left-1/4 animate-float" />
        <div className="w-3 h-3 bg-blue-600 rounded-full absolute bottom-40 right-1/3 animate-float delay-1000" />
      </div>

      <ShowcaseNavbar />

      {/* Main Section */}
      <section className="relative px-6 py-24 md:py-32 xl:w-4/5 2xl:w-[70%] mx-auto">
        <div className="container mx-auto max-w-6xl">
          {/* Headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Kreelab: <span>Marketing That Never Sleeps!</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Your business runs 24/7, and so do we. We’re your unstoppable partner, igniting growth with bold creativity and relentless passion.
            </p>
            <motion.span
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="block mt-8 text-4xl text-blue-500"
            >
              ✨
            </motion.span>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={staggerChildren} initial="hidden" animate="visible" className="space-y-28">
            {/* Who We Are */}
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all duration-500"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-5 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Always On, Always Ahead
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                With 24/7 support, Kreelab keeps your brand unstoppable. Last-minute tweaks? Real-time insights? We’ve got you covered—anytime, anywhere.
              </p>
              <span className="block mt-4 text-blue-600 font-semibold text-xl animate-pulse">
                Growth never sleeps—neither do we! 🚀
              </span>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all duration-500"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-5 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                We’re here to revolutionize marketing—dynamic, innovative, and relentless. Our goal? To empower your brand with strategies that shatter limits and redefine success.
              </p>
            </motion.div>

            {/* Our Values */}
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all duration-500"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                What We Stand For
              </h2>
              <ul className="space-y-6 text-gray-600 leading-relaxed text-lg">
                {[
                  { title: "Relentless Drive", desc: "We push boundaries to keep you ahead." },
                  { title: "Creative Excellence", desc: "Bold ideas that captivate and convert." },
                  { title: "Transparency", desc: "Honest results, no smoke and mirrors." },
                  { title: "Adaptability", desc: "We evolve as fast as your vision does." },
                ].map((value, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10, color: "#2563eb" }}
                    className="flex items-start group cursor-default"
                  >
                    <span className="text-blue-600 mr-3 text-2xl transition-transform group-hover:scale-125">•</span>
                    <span>
                      <strong>{value.title}:</strong> {value.desc}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Our Journey */}
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all duration-500"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-5 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                Born in 2024 in Kanpur, Kreelab started with a spark: marketing should match your hustle. Now, with 50+ campaigns across India and beyond, we’re a force of passion and innovation.
              </p>
            </motion.div>

            {/* See the Proof */}
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all duration-500"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-5 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                See the Proof
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                Our work? Bold. Impactful. Proven. Check out our{" "}
                <a href="/showcase" className="text-blue-600 hover:text-indigo-500 font-semibold transition-colors duration-300">
                  Showcase
                </a>{" "}
                and witness the magic.
              </p>
            </motion.div>
          </motion.div>

          {/* Founders Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24 text-center"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-12 relative bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Meet the Founders
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {[
                {
                  name: "Rishabh Rathore",
                  role: "Co-Founder & Creative Director",
                  desc: "A storyteller with a strategic edge, Rishabh crafts campaigns that leave a mark.",
                  img: "/images/founder.png",
                },
                {
                  name: "Piyush Chhabra",
                  role: "Co-Founder & Operations Lead",
                  desc: "Piyush powers Kreelab with precision and unstoppable energy.",
                  img: "/images/founder.png",
                },
              ].map((founder, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  className="relative bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={founder.img}
                    alt={`${founder.name}, ${founder.role}`}
                    className="w-44 h-44 rounded-full mx-auto mb-6 object-cover border-4 border-blue-200 hover:border-blue-600 transition-all duration-300"
                  />
                  <h3 className="text-3xl font-semibold text-gray-900">{founder.name}</h3>
                  <p className="text-sm text-gray-500 italic mt-1">{founder.role}</p>
                  <p className="mt-4 text-gray-600 leading-relaxed text-lg">{founder.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24 text-center"
          >
            <p className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Ready to unleash 24/7 marketing magic for your brand?
            </p>
            <Link
              href="/meeting"
              className="inline-block py-4 px-12 md:text-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-[0_10px_20px_rgba(37,99,235,0.5)] hover:scale-105 transition-all duration-300 font-semibold"
            >
              Contact Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-50 to-white py-16 px-6 md:px-12 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Kreelab
            </h1>
            <p className="text-gray-600 max-w-xs text-lg">Marketing That Never Sleeps!</p>
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -10 }}
                href="#"
                aria-label="Twitter"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li>+91 9369938791</li>
              <li>
                <a href="mailto:contact@kreelab.com" className="hover:text-blue-600 transition-colors">
                  contact@kreelab.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Address Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">Our Address</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              124/57 A, D Block<br />
              Govind Nagar<br />
              Kanpur, Uttar Pradesh- 208006<br />
              India
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto max-w-7xl mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kreelab. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/privacy-policy" className="text-blue-600 hover:text-indigo-500 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-service" className="text-blue-600 hover:text-indigo-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Showcase;



