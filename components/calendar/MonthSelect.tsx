import { getYear, getMonths, getMonth } from '../../lib/datetime';
import {
  useState,
  ChangeEvent,
  FC,
  SetStateAction,
  Dispatch,
} from 'react';

interface MonthProps {
  setParentMonth: Dispatch<SetStateAction<string>>;
}

const MonthSelect: FC<MonthProps> = ({ setParentMonth }) => {
  const year = getYear;
  const allMonths = getMonths();

  const [month, setMonth] = useState(getMonth);

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
        defaultValue={month}
        onChange={handleMonth}
        name='months'
        id='months'>
        {months}
      </select>
    </div>
  );
};

export default MonthSelect;
