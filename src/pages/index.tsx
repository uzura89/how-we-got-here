import { TimelineType } from "@/types/data";

import { getImagePath, getTimelineData } from "@/utils/dataUtils";
import Timeline from "@/components/top/Timeline";
import DetailModal from "@/components/top/DetailModal";
import useModalStore from "@/store/modalStore";
import DisclaimerModal from "@/components/top/DisclaimerModal";
import { useEffect, useState } from "react";
import Head from "next/head";
import HeadSetter from "@/components/common/HeadSetter";
import { CONS_APP_URL, CONS_IMG_PATH_OGP } from "@/constants/basic.cons";

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
      {/* <Head> */}
      <HeadSetter
        title="How We Got Here - A World History Timeline"
        description="An AI-generated visual timeline of the world history. Explore key historical events with engaging illustrations."
        image={CONS_IMG_PATH_OGP}
        url={CONS_APP_URL}
      />
      {/* </Head> */}

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
