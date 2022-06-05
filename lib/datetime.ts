const moment = require("moment");

export const getMonthAndYear = (date: Date): string => {
  const month = moment(date).month();
  const monthAndYear = moment(date).month(month).format("MMMM YYYY");

  return monthAndYear;
};

export const getDays = (date: Date) => moment(date).weekday();

export const getWeekdays = (date: Date): string[] => {
  const days = moment.weekdays();
  const newDays = days.shift()!;
  days.push(newDays);

  return days;
};

export const getMonth = (date: Date) => moment(date).month();

export const getDaysOfMonth = (date: Date)=> moment(date).daysInMonth();

export const getFirstDayOfMonth = (date: Date): number => {
  const day1 = moment(date).startOf("month");
  const day = day1.day();

  console.log(day1)

  return Number(day);
};
