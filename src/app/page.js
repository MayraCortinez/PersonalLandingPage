'use client'

import { ParallaxProvider } from 'react-scroll-parallax';

import Hero from './components/Hero';
import About from "./components/About";
import Services from "./components/Services";
import Contact from './components/Contact';
import ProjectsSection from './components/ProjectsSection';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ParallaxProvider>
        <ProjectsSection />
      </ParallaxProvider>
      <Contact />
      <Toaster />
    </>
  );
}
