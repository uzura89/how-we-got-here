import React from "react";

import Modal from "../common/Modal";
import Ahref from "../common/buttons/Ahref";

interface ModalProps {
  visible: boolean;
  closeModal: () => void;
}

const DisclaimerModal: React.FC<ModalProps> = ({ visible, closeModal }) => {
  return (
    <Modal visible={visible} closeModal={closeModal}>
      <div
        className={`
      bg-card rounded-3xl shadow-lg overflow-hidden 
      max-w-md md:max-w-md p-7
      transition-all duration-1000 ease-out
      ${visible ? "translate-y-0" : "translate-y-10"}
    `}
      >
        <h2 className="font-bold text-3xl mb-4">Disclaimer</h2>
        <p className="text-lg leading-relaxed">
          <strong>All content is AI-generated</strong> and may not be as
          reliable as verified historical sources. For accuracy, please verify
          information by checking the linked Wikipedia page or other reputable
          sources. To learn more about our content generation process, visit our{" "}
          <Ahref href="/about">About</Ahref> page.
        </p>
      </div>
    </Modal>
  );
};

export default DisclaimerModal;
