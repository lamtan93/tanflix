import { Dispatch } from 'redux';
import MovieListActionType from '../action-types.ts/MovieListActionType';
import {
  MovieListAction,
  SimilarMovieListAction,
  TrendingMovieListAction,
} from '../actions/MovieListAction';
import { getErrorMsgAPI, sendAPIRequest } from '../../utils/api';
import { IRawMovieListDataFromAPI } from './interfaces';
import { getMappingMovieListData } from '../../utils/mapping';

export const fetchMovieList = () => async (dispatch: Dispatch<MovieListAction>) => {
  dispatch({
    type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST,
  });
  try {
    const rawDataFromAPI: IRawMovieListDataFromAPI = await
    sendAPIRequest<IRawMovieListDataFromAPI>('movie/popular', 'GET')
      .then((data) => data);

    const movieList = getMappingMovieListData(rawDataFromAPI);

    dispatch({
      type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_SUCCESS,
      payload: movieList,
    });
  } catch (error: unknown) {
    dispatch({
      type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_ERROR,
      payload: getErrorMsgAPI(error),
    });
  }
};

export const fetchTrendingMovieList = () => async (dispatch: Dispatch<TrendingMovieListAction>) => {
  dispatch({
    type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST,
  });
  try {
    const rawDataFromAPI: IRawMovieListDataFromAPI = await
    sendAPIRequest<IRawMovieListDataFromAPI>('trending/movie/day', 'GET')
      .then((data) => data);

    const movieList = getMappingMovieListData(rawDataFromAPI);

    dispatch({
      type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST_SUCCESS,
      payload: movieList,
    });
  } catch (error: unknown) {
    dispatch({
      type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST_ERROR,
      payload: getErrorMsgAPI(error),
    });
  }
};

export const fetchSimilarMovieList = (
  id: number,
) => async (dispatch: Dispatch<SimilarMovieListAction>) => {
  dispatch({
    type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST,
  });
  try {
    const rawDataFromAPI: IRawMovieListDataFromAPI = await
    sendAPIRequest<IRawMovieListDataFromAPI>(`movie/${id}/similar`, 'GET')
      .then((data) => data);

    const movieList = getMappingMovieListData(rawDataFromAPI).filter((m) => m.imgSrc !== null);

    dispatch({
      type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST_SUCCESS,
      payload: movieList,
    });
  } catch (error: unknown) {
    dispatch({
      type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST_ERROR,
      payload: getErrorMsgAPI(error),
    });
  }
};
