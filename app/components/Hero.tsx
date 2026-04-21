"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            className="h-screen pt-20 flex flex-col justify-center items-center text-center 
      bg-linear-to-br from-blue-500 via-purple-500 to-indigo-600 
      text-white relative overflow-hidden"
        >
            {/* Background Effect */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)] pointer-events-none"></div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold relative z-10"
            >
                PixelCraft Agency
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 text-lg max-w-xl text-gray-200 relative z-10"
            >
                We design and build modern digital experiences that help brands grow
            </motion.p>

            {/* Button */}
            <motion.button
                onClick={() => {
                    document.getElementById("portfolio")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 px-6 py-3 bg-white cursor-pointer text-black rounded-lg hover:bg-gray-200 transition font-medium relative z-10"
            >
                View Our Work
            </motion.button>
        </section>
    );
}