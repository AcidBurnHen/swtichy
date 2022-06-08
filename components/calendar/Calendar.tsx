import Weekdays from './Weekdays';
import DaysInMonth from './DaysInMonth';
import SelectDate from './SelectDate';

import { useState } from 'react';
import { getDay, getMonth, getYear } from '../../lib/datetime';

const Calendar = () => {
  const [parentMonth, setParentMonth] = useState(getMonth);
  const [parentYear, setParentYear] = useState(getYear);
  const [parentDay, setParentDay] = useState(getDay);

  return (
    <div>
      <h1>
        {parentDay} {parentMonth} {parentYear}
      </h1>

      <div>
        <SelectDate
          day={parentDay}
          setParentMonth={setParentMonth}
          setParentYear={setParentYear}
        />
      </div>
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
