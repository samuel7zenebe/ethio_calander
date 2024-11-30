import { useContext, useEffect } from "react";
import DayContext from "./DayContext";
import "./style.css";

const MonthHeader = (pros) => {
  const { state, dispatch } = useContext(DayContext);

  const nextMonthHandler = (e) => {
    if (state.month === 13) {
      dispatch({
        type: "NEXT_YEAR",
      });
      return;
    }
    dispatch({
      type: "NEXT_MONTH",
    });
  };

  const lastMonthHandler = (e) => {
    if (state.month === 1) {
      dispatch({
        type: "LAST_YEAR",
      });
      return;
    }
    dispatch({
      type: "LAST_MONTH",
    });
  };
  return (
    <>
      <div className="flexBox monthHeader">
        <span onClick={lastMonthHandler}>Prev</span>
        <span>Month {state.month}</span>
        <span onClick={nextMonthHandler}>Next</span>
        <span>{state.year}</span>
      </div>
    </>
  );
};

export default MonthHeader;
