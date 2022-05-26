import moment from "moment";
const date = new Date();

export const getDate = (date): Number => moment(date).date();
export const getMonth = (date): Number => moment(date).month();
export const getYear = (date): Number => moment(date).year();
export const getWeekday = (date): String => moment(date).format("dddd");
