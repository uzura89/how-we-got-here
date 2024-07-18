import { TimelineType } from "@/types/data";
import Century from "./Century";

interface TimelineProps {
  timelineData: TimelineType;
}

export default function Timeline({ timelineData }: TimelineProps) {
  return (
    <div>
      {timelineData.map((century) => (
        <Century
          key={century.from}
          yearFrom={century.from}
          yearTo={century.to}
          events={century.events}
          lastUpdated={century.lastUpdated}
        />
      ))}
    </div>
  );
}
