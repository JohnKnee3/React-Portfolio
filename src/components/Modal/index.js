import React from "react";

const Modal = ({ onClose, currentProject }) => {
  console.log(currentProject);
  const { name, description, linkPage, linkGit, index } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/images/websites/big/${index}.jpg`)}
          alt="current display"
        />

        <p className="modalText">{description}</p>
        <a href={linkPage} target="_blank">
          <button>Official Website</button>
        </a>
        <a href={linkGit} target="_blank">
          <button>GitHub Page</button>
        </a>
        <button onClick={onClose} type="button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
