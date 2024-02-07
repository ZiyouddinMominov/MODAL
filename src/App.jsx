import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="container">
      <button className="openModal" onClick={() => setModalIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h1>This is Modal</h1>
        <p className="text">Lorem ipsum dolor sit, amet consectetur elit</p>
      </Modal>
    </div>
  );
}

export default App;
