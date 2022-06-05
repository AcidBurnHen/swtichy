import Weekdays from "./Weekdays";
import DaysInMonth from "./DaysInMonth";
import MonthSelect from "./MonthSelect";

const Calendar = () => {

  return (
    <div>
      <div>
        <div>
          <MonthSelect />
        </div>
        <div>
          <button>Prev</button>
          <button>Next</button>
          
        </div>
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
