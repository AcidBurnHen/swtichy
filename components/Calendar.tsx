import React, { FunctionComponent } from "react";
import { getDate } from "../lib/datetime";

const Calendar: FunctionComponent = () => {
  const date = new Date();

  console.log(getDate(date));
  return (
    <div>
      <div>
        <div>
          <h3>January 2022</h3>
        </div>
        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>9</td>
              <td>6,219</td>
              <td>oook</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
