const moment = require('moment');

export const dateData = moment().clone()

export const getYear: string = dateData.format('YYYY');

export const getMonth: string = dateData.format("MMMM");

export const getMonths: string[] = moment.months()

export const getWeekdays = (): string[] => {
  const days = moment.weekdays();
  const newDays = days.shift()!;
  days.push(newDays);

  return days;
};

export const getNumOfDaysInMonth  = (month: string): number => moment(month, "MMMM").daysInMonth();

export const getFirstDayOfMonth = (month: string): number => {
  const day1 = moment(month, "MMMM").startOf('month');
  const day = day1.day();

  const test = moment("July 2022", "MMMM YYYY").startOf('month')
  console.log(test.day)

  return Number(day);
};
