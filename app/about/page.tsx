"use client";
import ShowcaseNavbar from "@/components/navbar";
import Link from "next/link";

const Showcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafafa] via-white to-blue-50">
      <ShowcaseNavbar />

      {/* Main Section */}
      <section className="px-6 py-24 md:py-32 xl:w-4/5 2xl:w-[70%] mx-auto">
        <div className="container mx-auto max-w-6xl">
          {/* Headline */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              Kreelab: <span>Marketing That Never Sleeps!</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Your business runs 24/7, and so do we. We’re your unstoppable partner, igniting growth with bold creativity and relentless passion.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-28">
            {/* Who We Are */}
            <div className="max-w-3xl mx-auto p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-5">
                Always On, Always Ahead
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                With 24/7 support, Kreelab keeps your brand unstoppable. Last-minute tweaks? Real-time insights? We’ve got you covered—anytime, anywhere. Our team is dedicated to ensuring your brand remains at the forefront of innovation and success.
              </p>
            </div>

            {/* Our Mission */}
            <div className="max-w-3xl mx-auto p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-5">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                We’re here to revolutionize marketing—dynamic, innovative, and relentless. Our goal? To empower your brand with strategies that shatter limits and redefine success. We believe in pushing boundaries and creating marketing solutions that are as unique as your business.
              </p>
            </div>

            {/* Our Values */}
            <div className="max-w-3xl mx-auto p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Stand For
              </h2>
              <ul className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <li>
                  <strong>Relentless Drive:</strong> We push boundaries to keep you ahead. Our team is committed to continuous improvement and innovation.
                </li>
                <li>
                  <strong>Creative Excellence:</strong> Bold ideas that captivate and convert. We strive to deliver creative solutions that resonate with your audience.
                </li>
                <li>
                  <strong>Transparency:</strong> Honest results, no smoke and mirrors. We believe in clear communication and delivering on our promises.
                </li>
                <li>
                  <strong>Adaptability:</strong> We evolve as fast as your vision does. Our flexible approach ensures we can meet your changing needs.
                </li>
              </ul>
            </div>

            {/* Our Journey */}
            <div className="max-w-3xl mx-auto p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-5">
                Our Journey
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                Born in 2024 in Kanpur, Kreelab started with a spark: marketing should match your hustle. Now, with 50+ campaigns across India and beyond, we’re a force of passion and innovation. Our journey is a testament to our commitment to excellence and our drive to make a difference.
              </p>
            </div>

            {/* See the Proof */}
            <div className="max-w-3xl mx-auto p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-5">
                See the Proof
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                Our work? Bold. Impactful. Proven. Check out our{" "}
                <a href="/showcase" className="text-blue-600 hover:text-indigo-500 font-semibold">
                  Showcase
                </a>{" "}
                and witness the magic. We take pride in our achievements and are excited to share our success stories with you.
              </p>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mt-24 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-12">
              Meet the Founders
            </h2>
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {[
                {
                  name: "Rishabh Rathore",
                  role: "Founder",
                  desc: "A storyteller with a strategic edge, Rishabh crafts campaigns that leave a mark.",
                  img: "/images/founder.png",
                },
                {
                  name: "Piyush Chhabra",
                  role: "Co-Founder",
                  desc: "Piyush powers Kreelab with precision and unstoppable energy.",
                  img: "/images/founder.png",
                },
              ].map((founder, index) => (
                <div key={index} className="p-8">
                  <img
                    src={founder.img}
                    alt={`${founder.name}, ${founder.role}`}
                    className="w-44 h-44 rounded-full mx-auto mb-6 object-cover border-4 border-blue-200"
                  />
                  <h3 className="text-3xl font-semibold text-gray-900">{founder.name}</h3>
                  <p className="text-sm text-gray-500 italic mt-1">{founder.role}</p>
                  <p className="mt-4 text-gray-600 leading-relaxed text-lg">{founder.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <p className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Ready to unleash 24/7 marketing magic for your brand?
            </p>
            <Link
              href="/meeting"
              className="inline-block py-4 px-12 md:text-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full shadow-lg font-semibold"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-50 to-white py-16 px-6 md:px-12 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Kreelab
            </h1>
            <p className="text-gray-600 max-w-xs text-lg">Marketing That Never Sleeps!</p>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 text-lg">
              <li>+91 9369938791</li>
              <li>
                <a href="mailto:contact@kreelab.com" className="hover:text-blue-600">
                  contact@kreelab.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Our Address</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              124/57 A, D Block<br />
              Govind Nagar<br />
              Kanpur, Uttar Pradesh- 208006<br />
              India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto max-w-7xl mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kreelab. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/privacy-policy" className="text-blue-600 hover:text-indigo-500">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-of-service" className="text-blue-600 hover:text-indigo-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Showcase;