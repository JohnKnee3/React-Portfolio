import React, { useState } from "react";
import Modal from "../Modal";

function Project() {
  const [currentPhoto, setCurrentPhoto] = useState();
  const [projects] = useState([
    {
      name: "Copy Cat Games",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Grocery booth",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Restaurant table",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    console.log("I am image", image);

    // current photo
    setCurrentPhoto({ ...image, index: i });

    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        <h1>Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <div key={index}>
              <img
                src={require(`../../images/commercial/${index}.jpg`)}
                alt={project.name}
                onClick={() => toggleModal(project, index)}
                key={project.name}
              />
              <p>{project.name}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
