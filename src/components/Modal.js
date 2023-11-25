import Modal from "react-modal";
import { useState } from "react";

const ModalCard = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      {children}
      <button onClick={closeModal}>Fechar</button>
    </Modal>
  );
};

export default ModalCard;