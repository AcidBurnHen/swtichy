
import { dateData, getMonths, getMonth, getYear } from '../../lib/datetime';
import { useState, ChangeEvent, FC, SetStateAction, Dispatch } from 'react';

interface MonthProps {
  setParentMonth: Dispatch<SetStateAction<string>>;
}

const SelectDate: FC<MonthProps> = ({ setParentMonth }) => {
  const [month, setMonth] = useState(getMonth);
  const [year, setYear] = useState(getYear);

  const months = getMonths.map((month: string, index: number) => {
    return (
      <option value={month} key={index}>
        {month}
      </option>
    );
  });

  const nextMonth = () => {
    const next = dateData.add(1, 'month').format('MMMM');
    setMonth(next);
    setParentMonth(next);
    setYear(dateData.format("YYYY"))
  };

  const prevMonth = () => {
    const prev = dateData.subtract(1, 'month').format('MMMM');
    setMonth(prev);
    setParentMonth(prev);
    setYear(dateData.format("YYYY"))
  };

  const handleMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
    setParentMonth(event.target.value);
  };

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

export default SelectDate;
