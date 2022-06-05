import { getYear, getMonths, getMonth } from '../../lib/datetime';
import {
  useState,
  ChangeEvent,
  FC,
  SetStateAction,
  Dispatch,
} from 'react';

interface CalendarProps {
  setParentMonth: Dispatch<SetStateAction<string>>;
}

const MonthSelect: FC<CalendarProps> = ({ setParentMonth }): JSX.Element => {
  const year = getYear;
  const currentMonth = getMonth;
  const allMonths = getMonths();

  const [month, setMonth] = useState('');

  const months = allMonths.map((month: string, index: number) => {
    return (
      <option value={month} key={index}>
        {month}
      </option>
    );
  });

  const handleMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
    setParentMonth(event.target.value);
  };

  console.log(month);

  return (
    <div>
      <div>
        <button>Prev</button>
        <button>Next</button>
        <h3>
          {month} {year}
        </h3>
      </div>
      <label htmlFor='months'>Pick a month:</label>
      <select
        defaultValue={currentMonth}
        onChange={handleMonth}
        name='months'
        id='months'>
        {months}
      </select>
    </div>
  );
};

export default MonthSelect;
