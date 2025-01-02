import { useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { useEffect } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container flex flex-col justify-center mx-auto py-4 pt-20 md:px-20 lg:px-32 w-full overflow-hidden" id="projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        projects <span className="underline underline-offset-4 decoration-1 under font-light"> completed</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mx-auto mb-8 normal-case">Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button className="p-3 bg-gray-200 rounded mr-2" onClick={prevProject} aria-label="Previous Project">
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button className="p-3 bg-gray-200 rounded mr-2" onClick={nextProject} aria-label="Next Project">
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* Slider buttons */}

      {/* Project slider container */}
      <div className="overflow-hidden">
        <div
          className=" flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />

              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block px-4 py-2 bg-white w-3/4 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                  <p className=" text-gray-500 text-sm">
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project slider container */}
    </div>
  );
};

export default Projects;
