import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../images/commercial/${index}.jpg`)}
          alt="current display"
        />

        <p className="modalText">{description}</p>
        <a
          href="https://morning-spire-87893.herokuapp.com/"
          target="_blank"
          className="modalText"
        >
          GitHub
        </a>
        <button onClick={onClose} type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
