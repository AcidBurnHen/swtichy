import Weekdays from './Weekdays';
import DaysInMonth from './DaysInMonth';
import MonthSelect from './MonthSelect';

const Calendar = () => {
  return (
    <div>
      <div>
        <MonthSelect />
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
