import { IMovieDetail } from '../../../components/MovieDetail/interfaces/IMovieDetail'
import MovieDetailActionType from '../../action-types.ts/MovieDetailActionType'
import { MovieDetailAction } from '../../actions/MovieDetailAction'

interface MovieDetailState {
  movieDetailLoading: boolean
  movieDetailData: IMovieDetail | null
  movieDetailError: string | null
}

const initialMovieListState: MovieDetailState = {
  movieDetailLoading: false,
  movieDetailData: null,
  movieDetailError: null,
}

const MovieDetailReducer = (
  state: MovieDetailState = initialMovieListState,
  action: MovieDetailAction = {
    type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST,
  }
): MovieDetailState => {
  switch (action.type) {
    case MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        movieDetailLoading: true,
        movieDetailData: null,
        movieDetailError: null,
      }
    case MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        movieDetailLoading: false,
        movieDetailData: action.payload,
        movieDetailError: null,
      }
    case MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST_ERROR:
      return {
        ...state,
        movieDetailLoading: false,
        movieDetailData: null,
        movieDetailError: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default MovieDetailReducer
