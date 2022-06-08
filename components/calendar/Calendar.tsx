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
    <div>
      <DateTitle>
        {parentDay} {parentMonth} {parentYear}
      </DateTitle>

      <SelectDate
        day={parentDay}
        setParentMonth={setParentMonth}
        setParentYear={setParentYear}
      />

      <div>
        <table>
          <thead>
            <Weekdays />
          </thead>
          <DaysInMonth
            setParentDay={setParentDay}
            month={parentMonth}
            year={parentYear}
          />
        </table>
      </div>
    </div>
  );
};

export default Calendar;

export const DateTitle = styled.h1`
  font-size: 20px;
`;
