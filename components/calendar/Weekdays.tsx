import { getWeekdays } from "../../lib/datetime"

const Weekdays = () => {
    const weekdays = getWeekdays();

    const tableHeadings = weekdays.map((day, index) => {
        return <th key={index}>{day}</th>;
      });

    return <tr>{tableHeadings}</tr>
}

export default Weekdays