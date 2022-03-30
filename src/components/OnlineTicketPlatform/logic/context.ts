import React from "react";
import {
  ITicketPlatform,
  initialState,
  ITicketPlatformDerivedState,
} from "./reducer";

export interface ITicketPlatformContext {
  state: ITicketPlatform;
  dispatch: any;
  derivedState: ITicketPlatformDerivedState;
}

export const TicketPlatformContext =
  React.createContext<ITicketPlatformContext>({
    state: initialState,
    dispatch: (data: any) => {},
    derivedState: { id: "", movieName: "", ticketPrice: 0 ,totalPrice:0,numOfSelectedSeats:0},
  });
