import { ICard } from '../../../components/UI/Card/interfaces/ICard';
import MovieListActionType from '../../action-types.ts/MovieListActionType';
import { SimilarMovieListAction } from '../../actions/MovieListAction';

interface SimilarMovieListState {
    similarMovieListLoading: boolean,
    similarMovieListData: ICard[],
    similarMovieListError: string | null;
}

const initialSimilarMovieListState: SimilarMovieListState = {
  similarMovieListLoading: false,
  similarMovieListData: [],
  similarMovieListError: null,
};

const SimilarMovieListReducer = (
  state: SimilarMovieListState = initialSimilarMovieListState,
  action: SimilarMovieListAction = { type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST },
)
: SimilarMovieListState => {
  switch (action.type) {
    case MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST:
      return {
        ...state,
        similarMovieListLoading: true,
        similarMovieListError: null,
        similarMovieListData: [],
      };
    case MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST_SUCCESS:

      return {
        ...state,
        similarMovieListLoading: false,
        similarMovieListData: action.payload,
        similarMovieListError: null,
      };
    case MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST_ERROR:
      return {
        ...state,
        similarMovieListLoading: false,
        similarMovieListData: [],
        similarMovieListError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default SimilarMovieListReducer;
