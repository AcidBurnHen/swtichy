import React, { FunctionComponent, ReactElement } from "react";
import { getMonthAndYear, getWeekdays, getFirstDayOfMonth, getDaysOfMonth } from "../lib/datetime";

const Calendar: FunctionComponent = () => {
  const date = new Date();
  const weekdays = getWeekdays(date);
  const month = getMonthAndYear(date);
  const firstDay = getFirstDayOfMonth(date);
  const monthDays = getDaysOfMonth(date);

  const tableHeadings: ReactElement[] = weekdays.map((day, index) => {
    return <th key={index}>{day}</th>;
  });

  let emptySpace: any[] = [];
  for (let i = 0; i < firstDay; i++) {
    emptySpace.push(<td>{""}</td>);
  }

  let daysInAMonth: any[] = [];
  for (let d = 1; d <= monthDays; d++) {
    daysInAMonth.push(<td key={d}>{d}</td>);
  }

  const totalSpace = [...emptySpace, ...daysInAMonth];
  let rows: any[] = [];
  let cells: any[] = [];

  totalSpace.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }

    if (i === totalSpace.length - 1) {
      rows.push(cells);
    }
  });

  const days: ReactElement[] = rows.map((day, index) => {
    return <tr key={index}>{day}</tr>;
  });

  return (
    <div>
      <div>
        <div>
          <h3>{month}</h3>
        </div>
        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>{tableHeadings}</tr>
          </thead>
          <tbody>{days}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
