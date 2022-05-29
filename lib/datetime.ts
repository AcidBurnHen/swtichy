import moment from "moment";

export const getMonthAndYear = (date: Date): string => {
  const month = moment(date).month();
  const monthAndYear = moment(date).month(month).format("MMMM YYYY");

  return monthAndYear;
};

export const getDays = (date: Date): number => moment(date).weekday();

export const getWeekdays = (date: Date): string[] => {
  const days = moment.weekdays();
  const newDays = days.shift()!;
  days.push(newDays);

  return days;
};

export const getMonth = (date: Date): number => moment(date).month();

export const getDaysOfMonth = (date: Date): number => moment(date).daysInMonth();

export const getFirstDayOfMonth = (date: Date): number => {
  const day = moment(date).startOf("month");
  if (day.day() % 7 === 0) {
    const firstDay = day.add(1, "day").day(1);
    return Number(firstDay);
  } else {
    return Number(day);
  }
};
