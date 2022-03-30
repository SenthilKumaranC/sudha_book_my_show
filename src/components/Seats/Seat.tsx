import { useCallback, useContext, useMemo } from "react";
import { TicketPlatformContext } from "../OnlineTicketPlatform/logic/context";
import { Actions } from "../OnlineTicketPlatform/logic/reducer";

export interface ISeat {
  id: string;
  seatState: string;
}

const Seat = ({ id, seatState }: ISeat) => {
  const { state, dispatch } = useContext(TicketPlatformContext);

  const seatSelected = useCallback(() => {
    dispatch({
      type: Actions.CHANGE_SEAT_STATE,
      seatId: id,
      newSeatState: "selected",
    });
  }, [id]);

  const seatDeselected = useCallback(() => {
    dispatch({
      type: Actions.CHANGE_SEAT_STATE,
      seatId: id,
      newSeatState: "empty",
    });
  }, [id]);

  const seatUI = useMemo(() => {
    switch (seatState) {
      case "empty":
        return <div className="seat" onClick={seatSelected}></div>;
      case "selected":
        return <div className="seat selected" onClick={seatDeselected}></div>;
      case "occupied":
        return <div className="seat occupied"></div>;
      default:
        return <div className="seat" onClick={seatSelected}></div>;
    }
  }, [state]);

  return seatUI;
};

export default Seat;
