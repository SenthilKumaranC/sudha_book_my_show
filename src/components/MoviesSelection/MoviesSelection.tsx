import { useContext } from "react";
import { TicketPlatformContext } from "../OnlineTicketPlatform/logic/context";
import { Actions, IMovie } from "../OnlineTicketPlatform/logic/reducer";

const MoviesSelection = () => {
  const { state, dispatch } = useContext(TicketPlatformContext);

  const { movieList } = state;

  const onMovieSelected = (event: any) => {
    dispatch({ type: Actions.SET_MOVIE_ID, movieId: event.target.value });
  };

  return (
    <>
      <label>Pick a movie:</label>
      <select
        id="movie"
        onChange={onMovieSelected}
        value={state.currentMovieId}
      >
        {movieList.map((singleMovie: IMovie) => {
          return (
            <option value={singleMovie.id} key={singleMovie.id}>
              {singleMovie.movieName} (₹{singleMovie.ticketPrice})
            </option>
          );
        })}
      </select>
    </>
  );
};

export default MoviesSelection;
