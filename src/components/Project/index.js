import React from "react";

function Project() {
  const projects = [
    {
      name: "Grocery aisle",

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
  ];

  return (
    <div className="flex-row">
      <h1>Projects</h1>
      <ul>
        {projects.map((work, index) => (
          <li key={index}>
            <img src={require(`../../images/commercial/${index}.jpg`)} />
            Name: {work.name}
            <p>description: {work.description}</p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
