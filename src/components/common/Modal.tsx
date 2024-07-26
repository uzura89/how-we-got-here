import { useEffect } from "react";

interface Props {
  visible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export default function Modal({ visible, children, closeModal }: Props) {
  const handleClickBackground = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
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
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  );
}
