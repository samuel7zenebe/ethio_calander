import { useContext, useEffect } from "react";
import { fetchFullMonth } from "../utils/geezCalander";
import DayContext from "./DayContext";

export const Week = ({ month, year, week }) => {
  useEffect(() => {});
  const { today } = useContext(DayContext);
  const weekDays = fetchFullMonth(1, month, year).filter((x) => x.week == week);

  return (
    <tr className="flexBox">
      {weekDays.map((x, index) => (
        <td
          onMouseOver={() => {}}
          className={`${
            x.day == today.day && x.month == today.month && x.year == today.year
              ? "today cell"
              : x.month == month
              ? "active cell"
              : "inactive cell"
          }`}
          key={index}
        >
          {x.day}
        </td>
      ))}
    </tr>
  );
};
