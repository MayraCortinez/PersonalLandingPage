'use client'

import React from 'react';
import { GlobeAltIcon, ComputerDesktopIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full relative m-auto py-20 px-4 bg-[url('/bg1.png')] bg-opacity-10 bg-fixed bg-cover bg-center text-center bg-url['/bg1.png'] "
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-10 title text-black"
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white shadow-lg rounded-lg bg-card-project"
          >
            <GlobeAltIcon className="w-8 h-8 text-blue-500 mb-3 mx-auto" />
            <h3 className="text-xl font-bold mb-3">Web Development</h3>
            <p className="">Modern and responsive websites tailored to client needs.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-6 bg-white shadow-lg rounded-lg bg-card-project"
          >
            <ComputerDesktopIcon className="w-8 h-8 text-green-500 mb-3 mx-auto" />
            <h3 className="text-xl font-bold  mb-3">UI/UX Design</h3>
            <p className="">Attractive and functional interfaces that enhance the user experience.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="p-6 bg-white shadow-lg rounded-lg bg-card-project"
          >
            <UserGroupIcon className="w-8 h-8 text-purple-500 mb-3 mx-auto" />
            <h3 className="text-xl font-bold  mb-3">Community Manager</h3>
            <p className="">Managing online communities and creating engaging content for social media.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
