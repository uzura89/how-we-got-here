import { Fragment } from "react";

import { EventType } from "@/types/data";
import ImageCard from "./ImageCard";
import { getNumberSuffix } from "@/utils/stringUtils";

interface CenturyProps {
  events: EventType[];
  yearFrom: number;
  yearTo: number;
  lastUpdated: string;
}

export default function Century({
  events,
  yearFrom,
  yearTo,
  lastUpdated,
}: CenturyProps) {
  return (
    <div className="py-4 md:py-8 border-t border-border flex flex-col md:flex-row gap-5 md:gap-12">
      <div className="flex items-center md:items-start md:flex-col justify-between shrink-0">
        <CenturyLabel yearFrom={yearFrom} yearTo={yearTo} />
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

function CenturyLabel({
  yearFrom,
  yearTo,
}: {
  yearFrom: number;
  yearTo: number;
}) {
  const isBC = yearFrom < 0;
  const byCentury = yearFrom >= -1200;
  const centuryStr = byCentury
    ? `${isBC ? (yearFrom * -1) / 100 : yearTo / 100}`
    : "";

  return (
    <h2 className="font-bold flex items-end md:items-start gap-1 md:gap-0 md:flex-col font-serif">
      {!byCentury ? (
        <Fragment>
          <div className="flex items-center">
            <span className="text-xl">{`${yearFrom / 1000},000`}</span>
            <span className="text-sm mt-0.5">~</span>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <span className="text-2xl">{centuryStr}</span>
            <span className="text-lg">
              {getNumberSuffix(parseInt(centuryStr))}
            </span>
          </div>
          <span className="text-lg md:text-base">Century</span>
        </Fragment>
      )}

      {isBC && <span className="text-sm mt-0.5 text-[#707070]">B.C.E.</span>}
    </h2>
  );
}
