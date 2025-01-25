'use client'

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Landing Page para Restaurante",
    description:
      "Moderna y funcional, destaca los servicios de un restaurante, optimizada para dispositivos móviles y con un diseño atractivo.",
    image: "/luli.png", 
  },
  {
    id: 4,
    title: "Community Manager - Fiesta Regional",
    description:
      "Gestioné las redes sociales de una fiesta regional, creando contenido original, respondiendo a la audiencia y aumentando la interacción de la comunidad en un 30%.",
    image: "/community.png", 
  },
  {
    id: 5,
    title: "Análisis UX/UI",
    description:
      "Realicé un análisis detallado de diseño UX/UI para un proyecto en Behance, enfocado en mejorar la experiencia del usuario y la funcionalidad.",
    image: "/design.jpg", 
  },
  {
    id: 6,
    title: "Proyectos Artísticos Ecológicos",
    description:
      "Participé en proyectos artísticos con enfoque ecológico, promoviendo la sostenibilidad a través del diseño y la comunicación visual.",
    image: "path-to-ecological-projects-image.jpg", 
  },
];

export default function AccordionSlider() {
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelClick = (id) => {
    setActivePanel(activePanel === id ? null : id); // Alterna entre expandir y colapsar
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Projects
        </h2>

        <div className="flex overflow-hidden h-[300px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative flex-grow bg-cover bg-center cursor-pointer transition-all duration-500 ${
                activePanel === project.id ? "flex-[3]" : "flex-1"
              }`}
              style={{ backgroundImage: `url(${project.image})` }}
              onClick={() => handlePanelClick(project.id)}
            >
              {/* Overlay con el título */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center transition-opacity ${
                  activePanel === project.id ? "opacity-0" : "opacity-100"
                }`}
              >
              </div>

              {/* Contenido del panel */}
              <div
                className={`absolute bottom-0 p-6 bg-white text-gray-800 overflow-auto h-full transition-opacity ${
                  activePanel === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h6 className="text-xl font-bold mb-4">{project.title}</h6>
                <p className="text-gray-700 d-flex self-end">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


