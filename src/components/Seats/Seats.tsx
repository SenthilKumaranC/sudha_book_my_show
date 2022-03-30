import { useContext } from "react";
import { TicketPlatformContext } from "../OnlineTicketPlatform/logic/context";
import Seat from "./Seat";

const Seats = () => {
  const { state } = useContext(TicketPlatformContext);

  const { seatArrangement } = state;

  return (
    <>
      <div className="container">
        <div className="screen"></div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10,1fr)",
            width: "100%",
          }}
        >
          {seatArrangement.map((seat) => {
            return <Seat key={seat.id} {...seat}></Seat>;
          })}
        </div>
      </div>
    </>
  );
};

export default Seats;
