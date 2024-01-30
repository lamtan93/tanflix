import { ICard } from '../../components/UI/Card/interfaces/ICard'
import MovieListActionType from '../action-types.ts/MovieListActionType'

// Fetch movie list
interface FetchMovieListRequestAction {
  type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST
}

interface FetchMovieListRequestSucessAction {
  type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_SUCCESS
  payload: ICard[]
}

interface FetchMovieListRequestErrorAction {
  type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_ERROR
  payload: string
}

// Fetch trending movie list
interface FetchTrendingMovieListRequestAction {
  type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST
}

interface FetchTrendingMovieListRequestSucessAction {
  type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST_SUCCESS
  payload: ICard[]
}

interface FetchTrendingMovieListRequestErrorAction {
  type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST_ERROR
  payload: string
}

// Fetch similar movie list
interface FetchSimilarMovieListRequestAction {
  type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST
}

interface FetchSimilarMovieListRequestSucessAction {
  type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST_SUCCESS
  payload: ICard[]
}

interface FetchSimilarMovieListRequestErrorAction {
  type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST_ERROR
  payload: string
}

// Update liked movies
interface UpdateLikeMovieListRequestAction {
  type: MovieListActionType.UPDATE_LIKE_MOVIE_LIST_REQUEST
  payload: number
}

export type MovieListAction =
  | FetchMovieListRequestAction
  | FetchMovieListRequestSucessAction
  | FetchMovieListRequestErrorAction
  | UpdateLikeMovieListRequestAction

export type TrendingMovieListAction =
  | FetchTrendingMovieListRequestAction
  | FetchTrendingMovieListRequestSucessAction
  | FetchTrendingMovieListRequestErrorAction

export type SimilarMovieListAction =
  | FetchSimilarMovieListRequestAction
  | FetchSimilarMovieListRequestSucessAction
  | FetchSimilarMovieListRequestErrorAction
