import { getNumberSuffix } from "./stringUtils";

export const convertYearToCentury = (year: number): string => {
  const isBCE = year < 0;
  const century = Math.ceil(Math.abs(year) / 100);
  const suffix = getNumberSuffix(century);
  return `${century}${suffix} century ${isBCE ? " BC" : "AD"}`;
};

export const convertYearToHumanReadable = (year: number): string => {
  const isBCE = year < 0;
  const absYear = Math.abs(year);
  return `${absYear}${isBCE ? " BC" : " AD"}`;
};
