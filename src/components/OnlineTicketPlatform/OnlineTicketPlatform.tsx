import Legends from "../Legends/Legends";
import MoviesSelection from "../MoviesSelection/MoviesSelection";
import Seats from "../Seats/Seats";
import TotalPriceInfo from "../TotalPriceInfo/TotalPriceInfo";
import classes from "./OnlineTicketPlatform.module.css";

import { useReducer } from "react";
import { initialState, reducer } from "./logic/reducer";
import { TicketPlatformContext } from "./logic/context";
import useReducerMemo from "./logic/useReducerMemo";

const OnlineTicketPlatform = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const derivedState = useReducerMemo(state, dispatch);

  return (
    <TicketPlatformContext.Provider value={{ state, dispatch ,derivedState}}>
      <div className={classes.MovieContainer}>
        <MoviesSelection></MoviesSelection>
        <Legends></Legends>
        <Seats></Seats>
        <TotalPriceInfo></TotalPriceInfo>
      </div>
    </TicketPlatformContext.Provider>
  );
};

export default OnlineTicketPlatform;
