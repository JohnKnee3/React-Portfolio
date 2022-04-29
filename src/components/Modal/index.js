import React from "react";

const Modal = ({ onClose, currentProject }) => {
  console.log(currentProject);
  const { name, description, linkPage, linkGit, index } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <div>
          <h3 className="modalTitle">{name}</h3>
        </div>
        <img
          src={require(`../../assets/images/websites/big/${index}.jpg`)}
          alt="current display"
        />

        <p className="modalText">{description}</p>
        <a href={linkPage} target="_blank">
          <img src="https://img.icons8.com/clouds/100/000000/domain.png" />
        </a>

        <a href={linkGit} target="_blank">
          <img src="https://img.icons8.com/plasticine/100/000000/github.png" />
        </a>
        <a onClick={onClose} type="button">
          <img src="https://img.icons8.com/flat-round/64/000000/delete-sign.png" />
        </a>
      </div>
    </div>
  );
};

export default Modal;
