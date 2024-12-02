import { useContext, useEffect } from "react";
import { fetchFullMonth } from "../utils/geezCalander";
import DayContext from "./DayContext";

export const Week = ({ month, year, week }) => {
  useEffect(() => {});
  const { today } = useContext(DayContext);
  const weekDays = fetchFullMonth(1, month, year).filter((x) => x.week == week);

  return (
    <div className="flexBox">
      {weekDays.map((x, index) => (
        <span
          onMouseOver={() => {}}
          className={`${
            x.day == today.day && x.month == today.month && x.year == today.year
              ? "today"
              : x.month == month
              ? "active"
              : ""
          }`}
          key={index}
        >
          {x.day}
        </span>
      ))}
    </div>
  );
};
