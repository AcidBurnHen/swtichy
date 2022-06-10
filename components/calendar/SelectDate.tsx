import {
  dateData,
  getMonths,
  getMonth,
  getYear,
  getYears,
} from '@/lib/datetime';
import { useState, ChangeEvent, FC, SetStateAction, Dispatch } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { device } from '@/lib/helpers/devices';

interface MonthProps {
  day: string;
  setParentMonth: Dispatch<SetStateAction<string>>;
  setParentYear: Dispatch<SetStateAction<string>>;
}

const SelectDate: FC<MonthProps> = ({ day, setParentMonth, setParentYear }) => {
  const [month, setMonth] = useState(getMonth);
  const [year, setYear] = useState(getYear);
  const { push } = useRouter();

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
    );
  });

  const nextMonth = () => {
    let month = dateData.add(1, 'month').format('MMMM');
    let year = dateData.format('YYYY');

    push({
      pathname: '/',
      query: { day: day, month: month, year: year },
    });

    setMonth(month);
    setParentMonth(month);
    setYear(year);
    setParentYear(year);
  };

  const prevMonth = () => {
    let month = dateData.subtract(1, 'month').format('MMMM');
    let year = dateData.format('YYYY');

    push({
      pathname: '/',
      query: { day: day, month: month, year: year },
    });

    setMonth(month);
    setParentMonth(month);
    setYear(year);
    setParentYear(year);
  };

  const handleMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    let month = event.target.value;

    setMonth(month);
    setParentMonth(month);

    push({
      pathname: '/',
      query: { day: day, month: month, year: year },
    });
  };

  const handleYear = (event: ChangeEvent<HTMLSelectElement>) => {
    let year = event.target.value;

    setYear(year);
    setParentYear(year);

    push({
      pathname: '/',
      query: { day: day, month: month, year: year },
    });
  };

  return (
    <SelectContainer>
      <div>
        <DateTitle>
          {day}/{month}/{year}
        </DateTitle>
      </div>
      <DateSelectContainer>
        <DateSelect
          className='margin-r'
          defaultValue={month}
          onChange={handleMonth}
          name='months'
          id='months'>
          {months}
        </DateSelect>
        <DateSelect
          defaultValue={year}
          onChange={handleYear}
          name='years'
          id='years'>
          {years}
        </DateSelect>
      </DateSelectContainer>
      <MonthBtnContainer>
        <MonthBtn className='margin-r' onClick={prevMonth}>
          {'<'}
        </MonthBtn>
        <MonthBtn onClick={nextMonth}>{'>'}</MonthBtn>
      </MonthBtnContainer>
    </SelectContainer>
  );
};

export default SelectDate;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-template-rows: 1fr, 1fr @media ${device.atMobileM} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.atTabletS} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const DateTitle = styled.h1`
  font-size: 15px;
`;

export const DateSelectContainer = styled.div`
  align-self: center;
  justify-self: start;
  grid-row: 2;
  grid-column: 1;

  @media ${device.atMobileM} {
    grid-row: 1;
    grid-column: 2 / span 3;
    justify-self: center;
  }

  @media ${device.atTabletS} {
    grid-column: 4 / span 2;
    justify-self: end;
  }
`;

export const MonthBtnContainer = styled.div`
  align-self: center;
  justify-self: end;
  grid-row: 2;
  grid-column: 6;

  @media ${device.atMobileM} {
    grid-row: 1;
  }
`;

export const DateSelect = styled.select`
  border: 1px solid #bad7da;
  color: #429fa8;
  justify-self: center;

  &.margin-r {
    margin-right: 8px;
  }

  &:hover {
    border: 1px solid #429fa8;
  }
`;

export const MonthBtn = styled.button`
  border: 1px solid #bad7da;
  color: #429fa8;
  font-weight: bold;
  background-color: white;
  border-radius: 4px;
  margin-right: 2px;

  &.margin-r {
    margin-right: 6px;
  }

  &:hover {
    border: 1px solid #429fa8;
  }
`;
