export function setToMidnightUTC(inputDate: Date): Date {
  const midnightUTCDate = new Date(inputDate);

  // Set hours, minutes, seconds, and milliseconds to zero in UTC
  midnightUTCDate.setUTCHours(0, 0, 0, 0);

  return midnightUTCDate;
}
