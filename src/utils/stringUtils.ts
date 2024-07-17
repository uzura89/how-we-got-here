function getNumberSuffix(number: number) {
  const lastDigit = number.toString().slice(-1);

  if (lastDigit === "1") {
    return "st";
  } else if (lastDigit === "2") {
    return "nd";
  } else if (lastDigit === "3") {
    return "rd";
  } else {
    return "th";
  }
}

export { getNumberSuffix };
