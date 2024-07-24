import { TimelineType } from "@/types/data";

import { getImagePath, getTimelineData } from "@/utils/dataUtils";
import Timeline from "@/components/top/Timeline";
import DetailModal from "@/components/top/DetailModal";
import useModalStore from "@/store/modalStore";
import DisclaimerModal from "@/components/top/DisclaimerModal";
import { useEffect, useState } from "react";

export default function Home({ timelineData }: { timelineData: TimelineType }) {
  const modalStore = useModalStore();
  // local states
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);
  }, [null]);

  return (
    <div className="">
      <Timeline timelineData={timelineData} />

      <DetailModal
        visible={modalStore.isModalOpen}
        title={modalStore.selectedEvent.title}
        description={modalStore.selectedEvent.description}
        imageUrl={getImagePath(modalStore.selectedEvent.id)}
        link={modalStore.selectedEvent.link}
        closeModal={() => modalStore.setIsModalOpen(false)}
      />
      <DisclaimerModal visible={isModalOpen} closeModal={onCloseModal} />
    </div>
  );
}

export async function getStaticProps() {
  const timelineData = getTimelineData();

  return {
    props: {
      timelineData,
    },
  };
}
