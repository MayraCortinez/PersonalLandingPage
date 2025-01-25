'use client'

import { Parallax } from 'react-scroll-parallax';

const projects = [
  {
    title: 'Restaurant',
    description: 'Landing Page',
    image: '/luli.png',
    tags: ['UX/UI Design', 'Web Design', 'Web Development'],
    url: 'https://appluli.netlify.app/',
    textContent: "A modern and responsive landing page designed for a local restaurant. This project showcases user-friendly navigation, appealing visuals, and a sleek design for an enhanced dining experience.",

  },
  {
    title: 'Empanada Fest',
    description: 'Community Manager',
    image: '/community.png',
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
    <section id="work" className="py-24 mb-9 w-3/4 m-auto bg-gray-50/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="title inline-block font-bold px-6 py-4 mb-6 text-3xl bg-gradient-to-r from-gray-700 to-green-900 bg-clip-text text-transparent rounded-full">
            Portfolio
          </span>

        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.title} className="grid md:grid-cols-2 gap-12 items-center">
<Parallax speed={-10}>
  <div className="relative group overflow-hidden rounded-xl shadow-lg">
    <img
      src={project.image}
      alt={project.title}
      className="aspect-video object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-green-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
      <p className="text-sm md:text-lg text-gray-600">{project.textContent}</p>
    </div>
  </div>
</Parallax>


              <div className="space-y-6">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-blue-200 bg-clip-text text-transparent">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  className="text-lg md:text-xl inline-flex items-center text-green-500 hover:text-purple-500 transition-colors"
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
