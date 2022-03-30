import { useContext } from "react";
import { TicketPlatformContext } from "../OnlineTicketPlatform/logic/context";

const TotalPriceInfo = () => {

  const {state,derivedState} = useContext(TicketPlatformContext);

  const {totalPrice,numOfSelectedSeats} = derivedState;
  return (
    <>
      <p className="text">
        You have selected <span id="count">{numOfSelectedSeats}</span> seats for a price of $
        <span id="total">{totalPrice}</span>
      </p>
    </>
  );
};

export default TotalPriceInfo;
