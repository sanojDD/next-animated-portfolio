"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  const text = "Hi it's सनोज";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] w-full lg:w-1/2">
          <Image
            src="/cropped.png"
            alt="sanojprofilephoto"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center lg:items-start justify-center text-center lg:text-left h-full lg:w-1/2 mt-6 lg:mt-0">
          {/* TITLE */}
          <div className="flex flex-col items-center justify-center text-center px-6 py-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}{" "}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              I love crafting modern web experiences with{" "}
              <span className="font-semibold text-black">Web Development</span>,
              including{" "}
              <span className="font-semibold text-black">Machine Learning</span>{" "}
              and <span className="font-semibold text-black">Data Science</span>{" "}
              to solve real-world problems.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <button className="p-3 sm:p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href={"/portfolio"}>View My Work</Link>
            </button>
            <button className="p-3 sm:p-4 rounded-lg ring-1 ring-black mb-3">
              <Link href={"/contact"}>Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
