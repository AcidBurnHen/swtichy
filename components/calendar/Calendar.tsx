import Weekdays from './Weekdays';
import DaysInMonth from './DaysInMonth';
import SelectDate from './SelectDate';

import { useState } from 'react';
import { getDay, getMonth, getYear } from '../../lib/datetime';

import styled from 'styled-components';

const Calendar = () => {
  const [parentMonth, setParentMonth] = useState(getMonth);
  const [parentYear, setParentYear] = useState(getYear);
  const [parentDay, setParentDay] = useState(getDay);

  return (
    <CalendarContainer>

      <SelectDate
        day={parentDay}
        setParentMonth={setParentMonth}
        setParentYear={setParentYear}
      />

      <CalendarTableContainer>
        <CalendarTable>
          <CalendarHeadings>
            <Weekdays />
          </CalendarHeadings>
          <DaysInMonth
            setParentDay={setParentDay}
            month={parentMonth}
            year={parentYear}
          />
        </CalendarTable>
      </CalendarTableContainer>
    </CalendarContainer>
  );
};

export default Calendar;

export const CalendarContainer = styled.div`
  margin: 40px 0;
`

export const CalendarTableContainer = styled.div`
  margin:  0;
  border: 1px solid #cccccf;
  border-radius: 10px;
  overflow: hidden;
`;

export const CalendarTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  
`;

export const CalendarHeadings = styled.thead`
`;
