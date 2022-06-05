import Weekdays from './Weekdays';
import DaysInMonth from './DaysInMonth';
import MonthSelect from './MonthSelect';

import { useState } from 'react';

const Calendar = () => {
  const [parentMonth, setParentMonth] = useState("")


  return (
    <div>
      <div>
        {parentMonth}
        <MonthSelect setParentMonth={setParentMonth} />
      </div>
      <div>
        <table>
          <thead>
            <Weekdays />
          </thead>
          <DaysInMonth />
        </table>
      </div>
    </div>
  );
};

export default Calendar;
