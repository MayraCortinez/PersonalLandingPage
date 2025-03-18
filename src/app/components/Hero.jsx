'use client'
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  return (
    <section className="relative h-lvh overflow-hidden flex items-end justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/me.jpg')` }}>
      <div className="absolute inset-0 bg-hero"></div>
      <div className="relative z-10 text-center text-white px-4 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-shadow-creativa sans p-16 text-5xl md:text-7xl lg:text-9xl font-bold tracking-wide transform-gpu gradient-text md:pt-48 md:p-2"
        >
          Transforming ideas into unique experiences
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex justify-center gap-6 md:gap-16"
        >
          <a
            href="https://portfoliocortinezmayra.netlify.app/"
            className="btn text-white px-6 py-3 rounded-lg md:text-lg"
          >
            Explore Portfolio
          </a>
          <a
            href="#contact"
            className="btn text-white px-6 py-3 rounded-lg md:text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    <ThemeToggle />
    </section>
  );
}

export default Hero;
