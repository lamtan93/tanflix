import { IGenre } from '../../../components/UI/Genre/interfaces/IGenre';
import MovieGenreListActionType from '../../action-types.ts/MovieGenreListActionType';
import { MovieGenreListAction } from '../../actions/MovieGenreListAction';

interface MovieGenreListState {
    movieGenreListLoading: boolean,
    movieGenreListData: IGenre[] | null,
    movieGenreListError: string | null;
}

const initialMovieGenreListState: MovieGenreListState = {
  movieGenreListLoading: false,
  movieGenreListData: null,
  movieGenreListError: null,
};

const MovieGenreListReducer = (
  state: MovieGenreListState = initialMovieGenreListState,
  action: MovieGenreListAction = { type: MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST },
): MovieGenreListState => {
  switch (action.type) {
    case MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST:
      return {
        ...state,
        movieGenreListLoading: true,
        movieGenreListData: null,
        movieGenreListError: null,
      };
    case MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        movieGenreListLoading: false,
        movieGenreListData: action.payload,
        movieGenreListError: null,
      };
    case MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST_ERROR:
      return {
        ...state,
        movieGenreListLoading: false,
        movieGenreListData: null,
        movieGenreListError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default MovieGenreListReducer;
