import { Moment } from "moment";

const moment = require('moment');

export const dateData = moment().clone();

export const getYear: string = dateData.format('YYYY');

export const getMonth: string = dateData.format('MMMM');

export const getDay: string = dateData.format('DD');

export const getMonths: string[] = moment.months();

export const getYears = (): string[] => {
  let dates = [];
  let startDate = moment('1980-01-01');
  let stopDate = moment('2050-01-01');

  while (startDate <= stopDate) {
    dates.push(moment(startDate).format('YYYY'));
    startDate = moment(startDate).add(1, 'year');
  }

  return dates;
};

export const getWeekdays = (): string[] => {
  const days = moment.weekdays();
  const newDays = days.shift()!;
  days.push(newDays);

  return days;
};

export const getFirstDayOfMonth = (month: string, year: string): Moment => {
  const day1 = moment(`${month} ${year}`, 'MMMM YYYY').startOf('month')

  return day1
}

export const getFirstDayOfCalendar = (month: string, year: string): Moment => {
  const startDay = moment(`${month} ${year}`, 'MMMM YYYY').startOf("month").startOf("week");

  return startDay;
};

export const getLastDayOfMonth = (month: string, year: string): Moment => {
  const lastDay = moment(`${month} ${year}`, 'MMMM YYYY').endOf('month')

  return lastDay
}

export const getLastDayOfCalendar = (month: string, year: string): Moment => { 
  const endDay = moment(`${month} ${year}`, 'MMMM YYYY').endOf("month").endOf("week");

  return endDay;
 }
