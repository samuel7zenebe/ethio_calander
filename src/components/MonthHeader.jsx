import { useContext, useEffect, useState } from "react";
import DayContext from "./DayContext";
import "./style.css";
import { MonthNames } from "../utils/geezCalander";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MonthHeader = (pros) => {
  const { state, dispatch } = useContext(DayContext);
  const [status, setStatus] = useState("");

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
      <div className="">
        <div className="status">{status}</div>
        <div className="monthHeader">
          <ChevronLeft onClick={lastMonthHandler} />
          <span> {MonthNames(state.month)}</span>
          <span>{state.year}</span>
          <ChevronRight onClick={nextMonthHandler} />
        </div>
      </div>
    </>
  );
};

export default MonthHeader;
