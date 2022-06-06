import moment from 'moment';
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
  const [count, setCount] = useState(1);

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

  const nextMonth = () => {
    setCount(count + 1)
    const next = moment().clone().add(count, "month").format("MMMM")
    setMonth(next)
    setParentMonth(next)
  }

  const prevMonth = () => {
    setCount(count - 1)
    const prev = moment().clone().subtract(count, "month").format("MMMM")
    setMonth(prev)
    setParentMonth(prev)
  }

  return (
    <div>
      <div>
        <h3>
          {month} {year}
        </h3>
        <button onClick={prevMonth}>Prev</button>
        <button onClick={nextMonth}>Next</button>
      
      </div>
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
