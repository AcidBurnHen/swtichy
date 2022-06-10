import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import {
  getDay,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getFirstDayOfCalendar,
  getLastDayOfCalendar,
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

  const firstDay = getFirstDayOfCalendar(month, year);
  const startDay = firstDay.clone();
  const lastDay = getLastDayOfCalendar(month, year);
  
  const daysInAMonth = [];

  while (firstDay.isBefore(lastDay, 'day')) {
    daysInAMonth.push(
      Array(7)
        .fill(0)
        .map(() => firstDay.add(1, 'day').clone().format("DD"))
    );
  }

  function classes(d: string) {
    if (d === day) {
      return "selected"
    }

    if (d === getDay) {
      return "today"
    }
  }

  const days = daysInAMonth.map((week,i) => (
    <DaysRow key={i}>
      {week.map((d) => (
        <DayContainer className={classes(d.toString())} key={d}>
        <DayBtn value={d} onClick={handleDay}>
          {d}
        </DayBtn>
      </DayContainer>
      ))}
    </DaysRow>
  ))

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
