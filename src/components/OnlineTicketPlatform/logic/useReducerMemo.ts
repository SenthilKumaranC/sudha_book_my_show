import { useContext, useEffect, useMemo } from "react";
import { TicketPlatformContext } from "./context";
import { Actions, IMovie, ITicketPlatform } from "./reducer";

const useReducerMemo = (state: ITicketPlatform, dispatch: any) => {
  //const { state, dispatch } = useContext(TicketPlatformContext);

  const { movieList, currentMovieId , seatArrangement } = state;

  const [{ id: firstMovieId }] = movieList;

  //To Set the Default Movie Id
  useEffect(() => {
    if (currentMovieId === "") {
      dispatch({ type: Actions.SET_MOVIE_ID, movieId: firstMovieId });
    }
  }, [currentMovieId, dispatch, firstMovieId]);

  /// To Derive Current Movie Object
  const { id, movieName, ticketPrice } = useMemo(() => {
    const defaultObject = { id: "", movieName: "", ticketPrice: 0 };
    if (currentMovieId === "") {
      return defaultObject;
    }

    const movieObject = movieList.find(
      (movie: IMovie) => movie.id === currentMovieId
    );
    return movieObject ? movieObject : defaultObject;
  }, [movieList, currentMovieId]);

  const numOfSelectedSeats = useMemo(() => {

    let localNumOfSeats = 0;

    seatArrangement.forEach((seat)=>{
         if(seat.seatState==="selected"){
          localNumOfSeats=localNumOfSeats+1;
         }
    },[])

    return localNumOfSeats;
       
  }, [seatArrangement]);

  // to Derive the Total Price
  const totalPrice = useMemo(() => {
    return ticketPrice * numOfSelectedSeats;
  }, [ticketPrice,numOfSelectedSeats]);


  return { id, movieName, ticketPrice, totalPrice ,numOfSelectedSeats};
};

export default useReducerMemo;
