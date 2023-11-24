export function setToMidnightUTC(inputDate: Date): Date {
  const midnightUTCDate = new Date(inputDate);

  // Set hours, minutes, seconds, and milliseconds to zero in UTC
  midnightUTCDate.setUTCHours(0, 0, 0, 0);

  return midnightUTCDate;
}

export const getNextDayOfWeekFromDate = (
  providedDate: Date,
  targetDayOfWeek: number,
): Date => {
  const currentDayOfWeek = providedDate.getDay();
  const daysUntilNextTargetDay =
    targetDayOfWeek -
    currentDayOfWeek +
    (targetDayOfWeek >= currentDayOfWeek ? 0 : 7);

  // Calculate the date for the next occurrence of the specified day of the week
  const nextTargetDay = new Date(providedDate);
  nextTargetDay.setDate(providedDate.getDate() + daysUntilNextTargetDay);

  return nextTargetDay;
};
