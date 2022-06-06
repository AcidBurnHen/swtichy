const moment = require('moment');

export const getYear: string = moment().format('YYYY');

export const getWeekdays = (): string[] => {
  const days = moment.weekdays();
  const newDays = days.shift()!;
  days.push(newDays);

  return days;
};

export const getMonths = (): string[] => moment.months()

export const getMonth = moment().format("MMMM");

export const getNumOfDaysInMonth  = (month: string): number => moment(month, "MMMM").daysInMonth();

export const getFirstDayOfMonth = (month: string): number => {
  const day1 = moment(month, "MMMM").startOf('month');
  const day = day1.day();

  return Number(day);
};
