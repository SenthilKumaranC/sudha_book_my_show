import MovieListJson from "../../../data/movieslist.json";
import { ISeat } from "../../Seats/Seat";
import SeatArrangement from "../../../data/seatArrangement.json";

export interface IMovie {
  id: string;
  movieName: string;
  ticketPrice: number;
}

export interface ITicketPlatformDerivedState extends IMovie {
  totalPrice: number;
  numOfSelectedSeats: number;
}

export interface ITicketPlatform {
  movieList: IMovie[];
  seatArrangement: ISeat[];
  currentMovieId: string;
 
}

export const Actions = {
  SET_MOVIE_ID: "SET_MOVIE_ID",
  CHANGE_SEAT_STATE: "CHANGE_SEAT_STATE"
};

export const initialState: ITicketPlatform = {
  seatArrangement: SeatArrangement,
  movieList: MovieListJson,
  currentMovieId: ""
};

export const reducer = (state: ITicketPlatform, action: any) => {
  let newState: ITicketPlatform;
  let seat: ISeat;
  let seatIndex: number;

  switch (action.type) {
    case Actions.SET_MOVIE_ID:
      console.log("SET_MOVIE_ID");
      return { ...state, currentMovieId: action.movieId };
    case Actions.CHANGE_SEAT_STATE:
      console.log("SET_MOVIE_ID");
      //Cloining
      newState = { ...state, seatArrangement: [...state.seatArrangement] };

      //Find the index of the seat
      seatIndex = newState.seatArrangement.findIndex((seat) => {
        return seat.id === action.seatId;
      });
      //Take that SEat Object
      seat = newState.seatArrangement[seatIndex];

      newState.seatArrangement[seatIndex] = { ...seat, seatState: action.newSeatState };

      return newState;
    default:
      return state;
  }
};
