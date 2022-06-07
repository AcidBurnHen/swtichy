import Weekdays from './Weekdays';
import DaysInMonth from './DaysInMonth';
import SelectDate from './SelectDate';

import { useState } from 'react';
import { getMonth, getYear } from '../../lib/datetime';

const Calendar = () => {
  const [parentMonth, setParentMonth] = useState(getMonth);
  const [parentYear, setParentYear] = useState(getYear)

  return (
    <div>
      <h1>{parentMonth}  {parentYear}</h1>
    
      <div>
        <SelectDate setParentMonth={setParentMonth} setParentYear={setParentYear}/>
      </div>
      <div>
        <table>
          <thead>
            <Weekdays />
          </thead>
          <DaysInMonth month={parentMonth} year={parentYear}/>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
