import React, { useEffect } from "react";
import Image from "next/image";

import { HiOutlineExternalLink } from "react-icons/hi";
import Modal from "../common/Modal";

interface ModalProps {
  visible: boolean;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  closeModal: () => void;
}

const DetailModal: React.FC<ModalProps> = ({
  visible,
  title,
  description,
  imageUrl,
  link,
  closeModal,
}) => {
  const handleClickWindow = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.getSelection()?.toString()) return;
    closeModal();
  };

  const handleClickLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link, "_blank");
  };

  return (
    <Modal visible={visible} closeModal={closeModal}>
      {/* Card */}
      <div
        className={`bg-card rounded-3xl shadow-lg overflow-hidden max-w-md md:max-w-4xl p-5 transition-all duration-1000 ease-out ${
          // visible ? "scale-100" : "scale-90"
          visible ? "translate-y-0" : "translate-y-10"
        }`}
        onClick={handleClickWindow}
        // onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="shrink-0 relative">
            <div className="w-full md:w-[26rem] md:h-[26rem]">
              <Image
                className="rounded-2xl"
                src={imageUrl}
                alt={title}
                // layout="fill"
                // objectFit="cover"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          {/* Description */}
          <div className="md:pl-10 md:pr-4 pt-6 pb-1.5 md:py-6 flex flex-col justify-stretch items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-[0.5em]">
              {title}
            </h2>
            <p className="text-gray-800 mb-5 leading-relaxed grow">
              {description}
            </p>
            <button onClick={handleClickLink} className="button">
              <HiOutlineExternalLink className="text-lg opacity-90" />
              Open Wikipedia
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
