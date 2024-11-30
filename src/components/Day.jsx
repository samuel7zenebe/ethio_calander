import {
  Children,
  useReducer,
  createContext,
  useState,
  useEffect,
} from "react";
import DayContext from "./DayContext";
import { Week } from "./Week";
import WeekNames from "./WeekNames";
import MonthHeader from "./monthHeader";
import { fetchFullMonth, johnsNumber } from "../utils/geezCalander";

const dateReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_YEAR":
      return { ...state, month: 1, year: state.year + 1 };
      break;
    case "LAST_YEAR":
      return { ...state, month: 13, year: state.year - 1 };
      break;
    case "NEXT_MONTH":
      return { ...state, month: state.month + 1 };
      break;
    case "LAST_MONTH":
      return { ...state, month: state.month - 1 };
      break;
    default:
      throw new Error("Invalid Action Type");
      break;
  }
};

const initialState = {
  year: 2017,
  month: 1,
  johnNumber: 2,
};

const Day = () => {
  const [state, dispatch] = useReducer(dateReducer, initialState);
  useEffect(() => {
    console.log(johnsNumber(0, 1, 2017));
  }, [state]);
  return (
    <DayContext.Provider value={{ state, dispatch }}>
      <div className="wrapper">
        <MonthHeader />
        <WeekNames />
        <Week month={state.month} year={state.year} week={1} />
        <Week month={state.month} year={state.year} week={2} />
        <Week month={state.month} year={state.year} week={3} />
        <Week month={state.month} year={state.year} week={4} />
        <Week month={state.month} year={state.year} week={5} />
        <Week month={state.month} year={state.year} week={6} />
      </div>
    </DayContext.Provider>
  );
};
export default Day;
