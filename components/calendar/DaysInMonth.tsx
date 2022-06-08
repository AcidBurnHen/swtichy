import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import {
  getDay,
  getFirstDayOfMonth,
  getNumOfDaysInMonth,
} from '../../lib/datetime';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Month {
  setParentDay: Dispatch<SetStateAction<string>>;
  month: string;
  year: string;
}

const DaysInMonth: FC<Month> = ({ setParentDay, month, year }) => {
  const firstDay = getFirstDayOfMonth(month, year);
  const monthDays = getNumOfDaysInMonth(month, year);
  const { push } = useRouter();

  const [day, setDay] = useState(getDay);

  const handleDay = (event: MouseEvent<HTMLButtonElement>) => {
    const day = (event.target as HTMLButtonElement).value;

    push({
      pathname: '',
      query: { day: day, month: month, year: year },
    });

    setDay(day);
    setParentDay(day);
  };

  let emptySpace = [];
  for (let i = 1; i < firstDay; i++) {
    emptySpace.push(<td>{''}</td>);
  }

  let daysInAMonth = [];
  for (let d = 1; d <= monthDays; d++) {
    daysInAMonth.push(
      <td key={d}>
        <button value={d} onClick={handleDay}>
          {d}
        </button>
      </td>
    );
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
