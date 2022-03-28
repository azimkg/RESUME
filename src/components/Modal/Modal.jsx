import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal = () => {
  const navigate = useNavigate();
  function closeModal() {
    navigate("/");
  }
  return (
    <div className="modal">
      <div className="modal-message">
        <input className="input" type="text" placeholder="Message" />
        <button className="close" onClick={closeModal}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Modal;
