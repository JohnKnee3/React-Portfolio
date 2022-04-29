import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../images/commercial/${index}.jpg`).default}
          alt="current display"
        />
        <p>{description}</p>
        <button onClick={onClose} type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
