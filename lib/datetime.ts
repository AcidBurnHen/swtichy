const moment = require('moment');

export const dateData = moment().clone();

export const getYear: string = dateData.format('YYYY');

export const getMonth: string = dateData.format('MMMM');

export const getMonths: string[] = moment.months();

export const getYears = (): string[] => {
  let dates = [];
  let startDate = moment("1980-01-01");
  let stopDate = moment("2050-01-01");

  while (startDate <= stopDate) {
    dates.push(moment(startDate).format("YYYY"));
    startDate = moment(startDate).add(1, "year");
  }

  return dates;
}

export const getWeekdays = (): string[] => {
  const days = moment.weekdays();
  const newDays = days.shift()!;
  days.push(newDays);

  return days;
};

export const getNumOfDaysInMonth = (month: string, year: string): number =>
  moment(`${month} ${year}`, 'MMMM YYYY').daysInMonth();

export const getFirstDayOfMonth = (month: string, year: string): number => {
  const day1 = moment(`${month} ${year}`, 'MMMM YYYY').startOf('month');
  const day = day1.day();

  return Number(day);
};
