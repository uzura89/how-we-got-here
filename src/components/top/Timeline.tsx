import { TimelineDataType } from "@/types/data";
import Century from "./Century";

interface TimelineProps {
  timelineData: TimelineDataType;
}

export default function Timeline({ timelineData }: TimelineProps) {
  return (
    <div>
      {Object.keys(timelineData)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((century) => (
          <Century
            key={century}
            century={century}
            events={timelineData[century].events}
            lastUpdated={timelineData[century].lastUpdated}
          />
        ))}
    </div>
  );
}
