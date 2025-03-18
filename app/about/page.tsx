
import ShowcaseNavbar from "@/components/navbar";
import Link from "next/link";

const Showcase = () => {
    return (
        <div
            className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
        >
            <ShowcaseNavbar />
            <section className="md:px-0 p-28 mx-6 xl:w-4/5 2xl:w-[70%] md:mx-auto">
                <div className="container mx-auto max-w-6xl">
                    {/* Headline */}
                    <div className="text-center mb-16 ">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                            Kreelab: <span className="text-blue-500">Marketing That Never Sleeps!</span>
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Your business runs 24/7, and so do we. We’re your always-on partner, driving growth with relentless energy, creativity, and a commitment to your success.
                        </p>
                        <span className="block mt-6 text-2xl text-gray-400">✨</span> {/* Decorative flourish */}
                    </div>

                    {/* Main Content */}
                    <div className="space-y-20">
                        {/* Who We Are */}
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2 inline-block">
                                Always On, Always Ahead
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                With round-the-clock support, Kreelab keeps your brand thriving—no matter the hour. Need a last-minute campaign tweak? Real-time analytics? Urgent content updates? Our team is always on, ready to fuel your vision and elevate your brand, anytime, anywhere.
                            </p>
                            <span className="text-blue-500 font-xl font-semibold">Because growth doesn’t wait—and neither do we.</span> 🚀

                        </div>

                        {/* Our Mission */}
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2 inline-block">
                                Our Mission
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                At Kreelab, we believe marketing should be as dynamic as the businesses it serves. Our mission is to empower brands with innovative strategies, cutting-edge technology, and unwavering dedication—delivering results that don’t just meet expectations but redefine them.
                            </p>
                        </div>

                        {/* Our Values */}
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                                What We Stand For
                            </h2>
                            <ul className="space-y-6 text-gray-600 leading-relaxed">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span><strong>Relentless Drive:</strong> We work tirelessly to keep your brand ahead of the curve.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span><strong>Creative Excellence:</strong> Every idea is crafted to inspire and convert.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span><strong>Transparency:</strong> Clear communication and honest results, always.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span><strong>Adaptability:</strong> We pivot fast to meet your evolving needs.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Our Journey */}
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2 inline-block">
                                Our Journey
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Founded in 2024, Kreelab started with a simple idea: marketing shouldn’t sleep when your business doesn’t. From a small team in Kanpur, we’ve grown into a powerhouse serving clients across  India and beyond, delivering over more than 50 successful campaigns and counting. Our journey is fueled by passion, innovation, and a love for seeing our clients soar.
                            </p>
                        </div>

                        
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2 inline-block">
                                See the Proof
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                From bold campaigns to measurable results, our work speaks for itself. Curious how we’ve transformed brands like yours? Explore our <a href="/showcase" className="text-blue-500 hover:underline font-semibold">Showcase</a> to see the magic in action.
                            </p>
                        </div>
                    </div>

                    {/* Founders Section */}
                    <div className="mt-20 text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 relative">
                            Meet the Founders
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-16 h-1 bg-blue-500"></span>
                        </h2>
                        <div className="space-y-16 md:space-y-0 md:flex md:justify-center md:gap-20">
                            {/* Founder 1 */}
                            <div className="max-w-xs mx-auto">
                                <img
                                    src="/images/founder.png" // Replace with actual image path
                                    alt="Rishav Rathore, Co-Founder"
                                    className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                                />
                                <h3 className="text-2xl font-semibold text-gray-900">Rishav Rathore</h3>
                                <p className="text-sm text-gray-500 italic">Co-Founder & Creative Director</p>
                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    With a passion for storytelling and a knack for strategy, Rishav drives Kreelab’s creative vision, ensuring every campaign hits the mark. He’s the mastermind behind our most iconic projects.
                                </p>
                            </div>
                            {/* Founder 2 (Placeholder) */}
                            <div className="max-w-xs mx-auto">
                                <img
                                    src="/images/founder.png" // Replace with actual image path
                                    alt="Priya Sharma, Co-Founder"
                                    className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                                />
                                <h3 className="text-2xl font-semibold text-gray-900">Priya Sharma</h3>
                                <p className="text-sm text-gray-500 italic">Co-Founder & Operations Lead</p>
                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    Priya keeps Kreelab running like clockwork, blending precision with a relentless drive to deliver results. Her operational expertise ensures we’re always ready for action.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20 text-center">
                        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                            Ready to see what 24/7 marketing can do for your brand?
                        </p>
                        <div
                            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
                        >
                            <Link
                                href="/meeting"
                                className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
                            >
                                Contact Now
                            </Link>


                        </div>
                    </div>
                </div>

            </section>
            <footer className="bg-[#fafafa] py-12 px-6 md:px-12 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              <strong>Kreelab</strong>
            </h1>
            <p className=" text-gray-600 max-w-xs">
              Marketing That Never Sleeps!
            </p>
            <div className="flex space-x-4">
              {/* Placeholder for social icons - replace with actual icons */}
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter SVG Path */}
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>+91 99353 67839</li>
              <li>
                <a href="mailto:rishavrathore@gmail.com" className="hover:text-blue-500 transition-colors">
                  rishavrathore@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Our Address</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              124/57 A, D Block<br />
              Govind Nagar<br />
              Kanpur, Uttar Pradesh- 208006<br />
              India
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto max-w-7xl mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kreelab. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0">
            <Link href="/privacy-policy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="text-blue-500 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>

        </div>
    );
};

export default Showcase;