import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

const Project = ({ imageSrc, text, onVisible }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Llama a la función onVisible cuando el componente es visible
  if (inView) {
    onVisible();
  }

  return (
    <div ref={ref} className="flex">
      <Parallax speed={-10}>
        <img src={imageSrc} alt="Project" className="w-1/2" />
      </Parallax>
      <div className="w-1/2 p-4">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Project;
