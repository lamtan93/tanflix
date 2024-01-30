import MovieReviewListActionType from '../action-types.ts/MovieReviewActionType'
import { IReviewItem } from '../../components/Reviewer/interfaces/IReviewer'

interface FetchMovieReviewListRequestAction {
  type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST
}

interface FetchMovieReviewListRequestSucessAction {
  type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_SUCCESS
  payload: IReviewItem[]
}

interface FetchMovieReviewListRequestErrorAction {
  type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_ERROR
  payload: string
}

export type MovieReviewListAction =
  | FetchMovieReviewListRequestAction
  | FetchMovieReviewListRequestSucessAction
  | FetchMovieReviewListRequestErrorAction
