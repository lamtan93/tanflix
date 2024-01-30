import { ICard } from '../../../components/UI/Card/interfaces/ICard';
import MovieListActionType from '../../action-types.ts/MovieListActionType';
import { TrendingMovieListAction } from '../../actions/MovieListAction';

interface MovieListState {
    trendingMovieListLoading: boolean,
    trendingMovieListData: ICard[],
    trendingMovieListError: string | null;
}

const initialMovieListState: MovieListState = {
  trendingMovieListLoading: false,
  trendingMovieListData: [],
  trendingMovieListError: null,
};

const TrendingMovieListReducer = (
  state: MovieListState = initialMovieListState,
  action: TrendingMovieListAction = { type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST },
): MovieListState => {
  switch (action.type) {
    case MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST:
      return {
        ...state,
        trendingMovieListLoading: true,
        trendingMovieListError: null,
        trendingMovieListData: [],
      };
    case MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST_SUCCESS:

      return {
        ...state,
        trendingMovieListLoading: false,
        trendingMovieListData: action.payload,
        trendingMovieListError: null,
      };
    case MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST_ERROR:
      return {
        ...state,
        trendingMovieListLoading: false,
        trendingMovieListData: [],
        trendingMovieListError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default TrendingMovieListReducer;
