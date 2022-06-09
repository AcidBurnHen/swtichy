import { getWeekdays } from "../../lib/datetime"
import styled from "styled-components";

const Weekdays = () => {
    const weekdays = getWeekdays();

    const tableHeadings = weekdays.map((day, index) => {
        return <CalendarHeading key={index}>{day}</CalendarHeading>;
      });

    return <tr>{tableHeadings}</tr>
}

export default Weekdays

export const CalendarHeading = styled.th`
  font-size: 0.6rem;
  color: #429fa8;
  height: 1.65rem;
  border-right: 1px solid #cccccf;
  border-bottom: 1px solid #cccccf;
  background-color: #e4f6f7;
  
  &:last-child {
    border-right: none;
  }
`