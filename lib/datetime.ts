const moment = require('moment');

export const getYear: string = moment().format('YYYY');

export const getWeekdays = (): string[] => {
  const days = moment.weekdays();
  const newDays = days.shift()!;
  days.push(newDays);

  return days;
};

export const getMonths = (): string[] => moment.months()

export const getMonth: string = moment().format("MMMM");

export const getNumOfDaysInMonth  = moment().daysInMonth();

export const getFirstDayOfMonth = (): number => {
  const day1 = moment().startOf('month');
  const day = day1.day();

  return Number(day);
};
