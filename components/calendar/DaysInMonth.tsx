import { FC } from 'react';
import { getFirstDayOfMonth, getNumOfDaysInMonth } from '../../lib/datetime';

interface Month {
  month: string;
  year: string;
}

const DaysInMonth: FC<Month> = ({ month, year }) => {
  const firstDay = getFirstDayOfMonth(month, year);
  const monthDays = getNumOfDaysInMonth(month, year);

  let emptySpace = [];
  for (let i = 1; i < firstDay; i++) {
    emptySpace.push(<td>{''}</td>);
  }

  let daysInAMonth = [];
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

  const days = rows.map((day: string, index: number) => {
    return <tr key={index}>{day}</tr>;
  });

  return <tbody>{days}</tbody>;
};

export default DaysInMonth;
