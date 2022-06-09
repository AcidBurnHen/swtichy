import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import {
  getDay,
  getFirstDayOfMonth,
  getNumOfDaysInMonth,
} from '../../lib/datetime';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

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
    let currentDay = d === Number(day) ? "today" : "";
    daysInAMonth.push(
      <DayContainer className={currentDay} key={d}>
        <DayBtn value={d} onClick={handleDay}>
          {d}
        </DayBtn>
      </DayContainer>
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

  const days = rows.map((d: string, i: number) => {
    return <DaysRow key={i}>{d}</DaysRow>;
  });

  return <DaysBody>{days}</DaysBody>;
};

export default DaysInMonth;

export const DaysBody = styled.tbody`
  text-align: center;

  td {
    border-right: 1px solid #dcdedc;
    border-bottom: 1px solid #dcdedc;
  }
`;

export const DaysRow = styled.tr`
  td:last-child {
    border-right: none;
  }

  &:last-child td {
    border-bottom: none;
    border-right: 1px solid #dcdedc;
  }
`;

export const DayContainer = styled.td`
  height: 3rem;

  &.today button {
    color: #429fa8;
    font-weight: bold;
  }
`;

export const DayBtn = styled.button`
  border: none;
  background-color: white;

  &:hover {
    border-bottom: 1px solid #bad7da;
  }
`;
