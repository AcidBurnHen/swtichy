import { getMonthAndYear } from "../../lib/datetime";

const MonthSelect = () => {
    const monthAndYear = getMonthAndYear();

    return (
        <div>
            <h3>{monthAndYear}</h3>
        </div>
    )
}

export default MonthSelect