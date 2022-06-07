import { dateData, getMonths, getMonth, getYear, getYears } from '../../lib/datetime';
import { useState, ChangeEvent, FC, SetStateAction, Dispatch } from 'react';

interface MonthProps {
  setParentMonth: Dispatch<SetStateAction<string>>;
  setParentYear:  Dispatch<SetStateAction<string>>
}

const SelectDate: FC<MonthProps> = ({ setParentMonth, setParentYear }) => {
  const [month, setMonth] = useState(getMonth);
  const [year, setYear] = useState(getYear);

  const months = getMonths.map((month: string, index: number) => {
    return (
      <option value={month} key={index}>
        {month}
      </option>
    );
  });

  const years = getYears().map((year: string, index: number) => {
    return (
      <option value={year} key={index}>
        {year}
      </option>
    )
  })

  const nextMonth = () => {
    const month = dateData.add(1, 'month').format('MMMM');
    let year = dateData.format('YYYY')
    setMonth(month);
    setParentMonth(month);
    setYear(year);
    setParentYear(year);
  };

  const prevMonth = () => {
    let month = dateData.subtract(1, 'month').format('MMMM');
    let year = dateData.format('YYYY')
    setMonth(month);
    setParentMonth(month);
    setYear(year);
    setParentYear(year)
  };

  const handleMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
    setParentMonth(event.target.value);
  };

  const handleYear = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
    setParentYear(event.target.value);
  }

  return (
    <div>
      <div>
        <button onClick={prevMonth}>Prev</button>
        <button onClick={nextMonth}>Next</button>
      </div>
     <div>
     <select
        defaultValue={month}
        onChange={handleMonth}
        name='months'
        id='months'>
        {months}
      </select>
      <select
        defaultValue={year}
        onChange={handleYear}
        name='years'
        id='years'>
        {years}
      </select>
     </div>
    </div>
  );
};

export default SelectDate;