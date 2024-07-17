import { TimelineDataType } from "@/types/data";

import { getImagePath, getTimelineData } from "@/utils/dataUtils";
import Timeline from "@/components/top/Timeline";
import DetailModal from "@/components/top/DetailModal";
import useModalStore from "@/store/modalStore";

export default function Home({
  timelineData,
}: {
  timelineData: TimelineDataType;
}) {
  const modalStore = useModalStore();

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
