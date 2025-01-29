'use client'
import Image from 'next/image';

import { Parallax } from 'react-scroll-parallax';

const projects = [
  {
    title: 'Restaurant',
    description: 'Landing Page',
    image: '/luli.jpg',
    tags: ['UX/UI Design', 'Web Design', 'Web Development'],
    url: 'https://appluli.netlify.app/',
    textContent: "A modern and responsive landing page designed for a local restaurant. This project showcases user-friendly navigation, appealing visuals, and a sleek design for an enhanced dining experience.",

  },
  {
    title: 'Empanada Fest',
    description: 'Community Manager',
    image: '/community.jpg',
    tags: ['Digital Marketing', 'Social Media', 'Content Creation'],
    url: 'https://www.instagram.com/fiestadelaempanada.gorostiaga',
    textContent: "Led the social media strategy and community management for a local cultural festival. Focused on engaging content creation and building a strong online presence.",
  },
  {
    title: 'PlantaMía',
    description: 'UX Analysis',
    image: '/design.jpg',
    tags: ['UX Design', 'UX Research', 'UX Insights', 'User Experience'],
    url: 'https://new.express.adobe.com/webpage/t270sbO6FdcHf',
    textContent: "A comprehensive UX analysis for a conceptual plant care app. Explored user needs, provided actionable insights, and designed intuitive user experiences.",
  },
];

function ProjectsSection() {
  return (
    <section id="work" className="py-24 mb-9 w-3/4 m-auto relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="title colorTitle inline-block font-bold px-6 py-4 mb-6 text-3xl bg-gradient-to-r from-gray-700 to-green-900 bg-clip-text text-transparent rounded-full">
            Portfolio
          </span>

        </div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <div key={project.title} className="grid md:grid-cols-2 gap-16 items-center">
<Parallax speed={-10}>
  <div className="relative group overflow-hidden rounded-xl shadow-lg">
    <Image
      src={project.image}
      alt={project.title}
      width={500}
      height={200}
      className="aspect-video object-cover"
    />
    <div className="w-full h-full absolute overflow-hidden inset-0 bg-card-project opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="w-full h-full absolute overflow-hidden inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
    <p className="text-sm md:text-lg p-4">{project.textContent}</p>
    </div>
  </div>
</Parallax>


              <div className="space-y-6">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-blue-200 bg-clip-text text-transparent">{project.title}</h3>
                <p className="text italic">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="py-1 text-sm "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  className="text-lg md:text-xl inline-flex items-center text-blue-500 hover:text-purple-500 transition-colors"
                >
                  Explore Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h5m0 0v5m0-5L10 15m4-8H7m0 0v5m0-5l8 8"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default ProjectsSection;
