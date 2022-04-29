import React, { useState } from "react";
import Modal from "../Modal";

function Project() {
  const [currentProject, setCurrentProject] = useState();
  const [projects] = useState([
    {
      name: "Copy Cat Games",
      linkPage: "https://morning-spire-87893.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Copy-Cat-Games",
      description: "A silly little site for a fictional board game company.",
    },
    {
      name: "Crypto Checker",
      linkPage: "https://bullmoosedev.github.io/Crypto-Checker/",
      linkGit: "https://github.com/BullMooseDev/Crypto-Checker",
      description: "A site that helps people track the top trending Cryptos",
    },
    {
      name: "Track My Budget",
      linkPage: "https://stark-badlands-41125.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Track-My-Budget",
      description:
        "Track your budget while in on or offline.  Can convert to a PWA as well.",
    },
    // {
    //   name: "Restaurant table",

    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Cafe interior",

    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (project, i) => {
    console.log("I am image", project);

    // current photo
    setCurrentProject({ ...project, index: i });

    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentProject={currentProject} onClose={toggleModal} />
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
