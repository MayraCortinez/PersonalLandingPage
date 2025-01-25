'use client'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-lvh overflow-hidden flex items-end justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('/me.png')` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-white/50 to-transparent"></div>
      <div className="relative z-10 text-center text-white px-4 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-shadow-creativa sans text-4xl md:text-7xl font-bold tracking-wide transform-gpu gradient-text md:pt-48 p-2"
        >
          Transforming ideas into unique experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-xl md:text-2xl sans text-shadow text-orange-950 tracking-wide font-sans font-normal text-opacity-90 p-4"
        >
          I am Mayra Cortinez,<br /> a developer passionate about innovation and functionality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex justify-center gap-6"
        >
          <a
            href="https://portfoliocortinezmayra.netlify.app/"
            className="btn bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 md:text-lg"
          >
            Explore Portfolio
          </a>
          <a
            href="#contact"
            className="btn bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 md:text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
