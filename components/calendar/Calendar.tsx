import Weekdays from './Weekdays';
import DaysInMonth from './DaysInMonth';
import SelectDate from './SelectDate';

import { useState } from 'react';
import { getMonth } from '../../lib/datetime';

const Calendar = () => {
  const [parentMonth, setParentMonth] = useState(getMonth)


  return (
    <div>
      <div>
        {parentMonth}
        <SelectDate setParentMonth={setParentMonth} />
      </div>
      <div>
        <table>
          <thead>
            <Weekdays />
          </thead>
          <DaysInMonth month={parentMonth} />
        </table>
      </div>
    </div>
  );
};

export default Calendar;
