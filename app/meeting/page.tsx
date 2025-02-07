"use client";


// import Calendly from "./calendly";
// import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {



  return (
    <div className=" flex flex-col  w-full inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
    ">
      {/* <ShowcaseNavbar /> */}
     <h2 className="text-3xl font-bold text-center mt-20">
      hii , how are you this is meeting page
      </h2>
    </div>
  );
};

export default Meeting;
