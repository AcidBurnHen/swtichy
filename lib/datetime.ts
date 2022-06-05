const moment = require("moment");

export const getMonthAndYear = (): string => {
  const month = moment().month();
  const monthAndYear = moment().month(month).format("MMMM YYYY");

  return monthAndYear;
};

export const getDays = (date: Date) => moment(date).weekday();

export const getWeekdays = (): string[] => {
  const days = moment.weekdays();
  const newDays = days.shift()!;
  days.push(newDays);

  return days;
};

export const getMonth = () => moment().month();

export const getMonths = () => {
  const months = moment.months()
  console.log(months)
  return months
}

export const getDaysOfMonth = () => moment().daysInMonth();

export const getFirstDayOfMonth = (): number => {
  const day1 = moment().startOf("month");
  const day = day1.day();

  return Number(day);
};
