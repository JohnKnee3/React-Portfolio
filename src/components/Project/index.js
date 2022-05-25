import React, { useState } from "react";
import Modal from "../Modal";

function Project() {
  const [currentProject, setCurrentProject] = useState();
  const [projects] = useState([
    {
      name: "Blockbuster Video",
      linkPage: "https://tranquil-caverns-31701.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Blockbuster-Video",
      description:
        "A site of what it would look like if Blockbuster Video came back and got into designer VHS movies.",
      tech: "React/GraphQL/Node.js/",
      tech2: "Express.js/Mongo/Mongoose",
    },
    {
      name: "Copy Cat Games",
      linkPage: "https://morning-spire-87893.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Copy-Cat-Games",
      description: "A silly little site for a fictional board game company.",
      tech: "Bootstrap/JavaScript/Node.js/",
      tech2: "Express.js/MySQL/Handlebars",
    },
    {
      name: "Crypto Checker",
      linkPage: "https://bullmoosedev.github.io/Crypto-Checker/",
      linkGit: "https://github.com/BullMooseDev/Crypto-Checker",
      description: "A site that helps people track the top trending Cryptos",
      tech: "HTML/CSS/Materialize/",
      tech2: "JavaScript/API",
    },
    {
      name: "Track My Budget",
      linkPage: "https://stark-badlands-41125.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Track-My-Budget",
      description:
        "Track your budget while on or offline.  Can convert to a PWA as well.",
      tech: "IndexDB/Service Workers/",
      tech2: "Web Manifest",
    },
    {
      name: "Yet Another Tech Blog",
      linkPage: "https://damp-temple-43763.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Yet-Another-Tech-Blog",
      description:
        "A site where tech lovers can chat about all the love they love.",
      tech: "HTML/CSS/Express/MySQL/",
      tech2: "JavaScript",
    },
    {
      name: "Weather Dashboard",
      linkPage: "https://johnknee3.github.io/Weather-Dashboard/",
      linkGit: "https://github.com/JohnKnee3/Weather-Dashboard",
      description: "A site where you can track the weather by city name.",
      tech: "HTML/CSS/JavaScript/",
      tech2: "API",
    },
    {
      name: "Note Taker",
      linkPage: "https://arcane-beyond-71149.herokuapp.com/",
      linkGit: "https://github.com/JohnKnee3/Note-Taker",
      description: "A handy-dandy little note taking site.",
      tech: "Node/Express/AJAX/",
      tech2: "jQuery",
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
      <div>
        <h1 className="my-name">Projects</h1>

        {projects.map((project, index) => (
          <div className="project-container" key={index}>
            {/* <p>{project.name}</p> */}
            <img
              src={require(`../../assets/images/websites/tiny/${index}.jpg`)}
              className="img-thumbnail-project "
              alt={project.name}
              onClick={() => toggleModal(project, index)}
              key={project.name}
            />

            <div
              className="project-text"
              onClick={() => toggleModal(project, index)}
            >
              <h2 className="project-title">{project.name}</h2>
              <p>
                {project.tech}
                <br />
                {project.tech2}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
