import { Fragment } from "react";

import { EventType } from "@/types/data";
import ImageCard from "./ImageCard";
import { getNumberSuffix } from "@/utils/stringUtils";

interface CenturyProps {
  century: string;
  events: EventType[];
  lastUpdated: string;
}

export default function Century({
  century,
  events,
  lastUpdated,
}: CenturyProps) {
  return (
    <div className="py-4 md:py-8 border-t border-border flex flex-col md:flex-row gap-5 md:gap-12">
      <div className="flex items-center md:items-start md:flex-col justify-between shrink-0">
        <CenturyLabel century={century} />
        <div className="text-xs text-foreLightest">
          <p className="">Updated:</p>
          <p className="">{lastUpdated}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
        {events.map((event) => (
          <ImageCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function CenturyLabel({ century }: { century: string }) {
  const isBC = century.startsWith("-");

  const centuryStr = isBC ? century.slice(1) : century;
  const suffix = getNumberSuffix(parseInt(centuryStr));

  return (
    <h2 className="font-bold flex items-end md:items-start gap-1 md:gap-0 md:flex-col font-serif">
      {isBC && parseInt(centuryStr) >= 20 ? (
        <Fragment>
          <div className="flex items-center">
            <span className="text-xl">{centuryStr.slice(0, -1) + ",000"}</span>
            {parseInt(centuryStr) >= 20 && (
              <span className="text-sm mt-0.5">~</span>
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <span className="text-2xl">{centuryStr}</span>
            <span className="text-lg">{suffix}</span>
          </div>
          <span className="text-lg md:text-base">Century</span>
        </Fragment>
      )}

      {isBC && <span className="text-sm mt-0.5">B.C.E.</span>}
    </h2>
  );
}
