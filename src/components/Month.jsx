import { useContext } from "react";
import DayContext from "./DayContext";
import { Week } from "./Week";
import WeekNames from "./WeekNames";
import { MonthNames } from "../utils/geezCalander";
const Month = ({ withHeader, month, year }) => {
  const { state, dispatch } = useContext(DayContext);
  return (
    <table
      className={
        state.month == month ? "monthContainer activeMonth" : "monthContainer"
      }
    >
      {withHeader && (
        <h2 className="header"> {MonthNames(month || state.month)}</h2>
      )}
      <WeekNames />
      <Week month={month || state.month} year={year || state.year} week={1} />
      <Week month={month || state.month} year={year || state.year} week={2} />
      <Week month={month || state.month} year={year || state.year} week={3} />
      <Week month={month || state.month} year={year || state.year} week={4} />
      <Week month={month || state.month} year={year || state.year} week={5} />
      <Week month={month || state.month} year={year || state.year} week={6} />
    </table>
  );
};
export default Month;
