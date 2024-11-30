import { useEffect } from "react";
import { fetchFullMonth } from "../utils/geezCalander";

export const Week = ({ month, year, week }) => {
  useEffect(() => {});
  const weekDays = fetchFullMonth(1, month, year).filter((x) => x.week == week);

  return (
    <div className="flexBox">
      {weekDays.map((x, index) => (
        <span
          onMouseOver={() => {
            console.log(x.day, x.month, x.year);
          }}
          className={`${x.month == month ? "active" : ""}`}
          key={index}
        >
          {x.day}
        </span>
      ))}
    </div>
  );
};
