import moment from "moment";
const date = new Date();

export const getMonthAndYear = (date): String => {
  const month = moment(date).month();
  const monthAndYear = moment(date).month(month).format("MMMM YYYY");

  return monthAndYear;
};

export const getDays = (date): Number => moment(date).weekday();

export const getWeekdays = (date): String[] => {
  const days = moment.weekdays();
  days.push(days.shift());

  return days;
};

export const getMonth = (date): Number => moment(date).month();

export const getDaysOfMonth = (date): Number => moment(date).daysInMonth();

export const getFirstDayOfMonth = (date): Number => {
  const day = moment(date).startOf("month").format("DD");

  return Number(day);
};
