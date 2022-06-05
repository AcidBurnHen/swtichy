import { getMonthAndYear, getMonths } from '../../lib/datetime';

const MonthSelect = () => {
  const monthAndYear = getMonthAndYear();
  const allMonths = getMonths();

  const months = allMonths.map((month: string, index: number) => {
    return <option key={index}>{month}</option>;
  });

  return (
    <div>
      <div>
        <button>Prev</button>
        <button>Next</button>

        <h3>{monthAndYear}</h3>
      </div>
      <label htmlFor='months'>Pick a month:</label>
      <select name='months' id='months'>
        {months}
      </select>
    </div>
  );
};

export default MonthSelect;
