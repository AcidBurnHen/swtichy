import { getFirstDayOfMonth, getDaysOfMonth } from '../../lib/datetime';

const DaysInMonth = () => {
  const firstDay = getFirstDayOfMonth();
  const monthDays = getDaysOfMonth();

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
