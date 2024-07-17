import React, { useEffect } from "react";
import Image from "next/image";

import { HiOutlineExternalLink } from "react-icons/hi";

interface ModalProps {
  visible: boolean;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  title,
  description,
  imageUrl,
  link,
  closeModal,
}) => {
  const handleClickBackground = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  const handleClickWindow = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.getSelection()?.toString()) return;
    closeModal();
  };

  const handleClickLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link, "_blank");
  };

  useEffect(() => {
    if (visible) {
      // disable scrolling on document
      document.body.style.overflow = "hidden";
    } else {
      // enable scrolling on document
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-start md:justify-center z-50
      transition-all duration-300 ease-in-out
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      onClick={handleClickBackground}
    >
      {/* Scroller */}
      <div className="py-8 px-2 overflow-y-scroll h-[100vh] w-full flex justify-center items-start md:items-center">
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
              <button
                onClick={handleClickLink}
                className="bg-black text-white px-4 py-2 rounded-md inline-flex gap-2 items-center justify-center clickable"
              >
                <HiOutlineExternalLink className="text-lg opacity-90" />
                Open Wikipedia
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
