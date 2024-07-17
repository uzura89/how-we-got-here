import Image from "next/image";

import { EventType } from "@/types/data";
import { getImagePath } from "@/utils/dataUtils";
import useModalStore from "@/store/modalStore";

interface ImageCardProps {
  event: EventType;
}

export default function ImageCard({ event }: ImageCardProps) {
  // store
  const modalStore = useModalStore();
  // data
  const imagePath = getImagePath(event.id);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:scale-[102%] hover:-translate-y-1 transition-all duration-150 ease-out active:opacity-75"
      onClick={() => {
        modalStore.setSelectedEvent(event);
        modalStore.setIsModalOpen(true);
      }}
    >
      <Image
        src={imagePath}
        alt={event.title}
        width={300}
        height={200}
        layout="responsive"
        loading="lazy"
      />
    </div>
  );
}
