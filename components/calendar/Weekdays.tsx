import { getWeekdays } from '@/lib/datetime';
import styled from 'styled-components';
import { device } from '@/lib/helpers/devices';

const Weekdays = () => {
  const weekdays = getWeekdays();

  const tableHeadings = weekdays.map((day, index) => {
    return <CalendarHeading key={index}>{day}</CalendarHeading>;
  });

  return <tr>{tableHeadings}</tr>;
};

export default Weekdays;

export const CalendarHeading = styled.th`
  font-size: 0.3rem;
  color: #429fa8;
  height: 1.65rem;
  border-right: 1px solid #cccccf;
  border-bottom: 1px solid #cccccf;
  background-color: #e4f6f7;

  &:last-child {
    border-right: none;
  }

  @media ${device.atMobileS} {
    font-size: 0.4rem;
  }

  @media ${device.atMobileM} {
    font-size: 0.5rem;
  }

  @media ${device.atMobileL} {
    font-size: 0.6rem;
  }
`;
