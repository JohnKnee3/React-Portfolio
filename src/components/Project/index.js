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
    {
      name: "Yet Another Tech Blog",
      linkPage: "https://damp-temple-43763.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Yet-Another-Tech-Blog",
      description:
        "A site where tech lovers can chat about all the love they love.",
    },
    {
      name: "Weather Dashboard",
      linkPage: "https://johnknee3.github.io/Weather-Dashboard/",
      linkGit: "https://github.com/JohnKnee3/Weather-Dashboard",
      description: "A site where you can track the weather by city name.",
    },
    {
      name: "Note Taker",
      linkPage: "https://arcane-beyond-71149.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Note-Taker",
      description: "A handy-dandy little note taking site.",
    },
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
                src={require(`../../assets/images/websites/tiny/${index}.jpg`)}
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
