import { ICard } from '../../../components/UI/Card/interfaces/ICard';
import MovieListActionType from '../../action-types.ts/MovieListActionType';
import { MovieListAction } from '../../actions/MovieListAction';

interface MovieListState {
    movieListLoading: boolean,
    movieListData: ICard[],
    movieListError: string | null;
}

const initialMovieListState: MovieListState = {
  movieListLoading: false,
  movieListData: [],
  movieListError: null,
};

const MovieListReducer = (
  state: MovieListState = initialMovieListState,
  action: MovieListAction = { type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST },
): MovieListState => {
  switch (action.type) {
    case MovieListActionType.FETCH_MOVIE_LIST_REQUEST:
      return {
        ...state,
        movieListLoading: true,
        movieListError: null,
        movieListData: [],
      };
    case MovieListActionType.FETCH_MOVIE_LIST_REQUEST_SUCCESS:

      return {
        ...state,
        movieListLoading: false,
        movieListData: action.payload,
        movieListError: null,
      };
    case MovieListActionType.FETCH_MOVIE_LIST_REQUEST_ERROR:
      return {
        ...state,
        movieListLoading: false,
        movieListData: [],
        movieListError: action.payload,
      };
    case MovieListActionType.UPDATE_LIKE_MOVIE_LIST_REQUEST: {
      const movieListWithUpdatedLike = [...state.movieListData];
      const movieToUpdateLike = movieListWithUpdatedLike
        .filter((movie) => movie.id === action.payload)[0];
      movieToUpdateLike.liked = !movieToUpdateLike.liked;
      return {
        ...state,
        movieListLoading: false,
        movieListData: [...movieListWithUpdatedLike],
        movieListError: null,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default MovieListReducer;
