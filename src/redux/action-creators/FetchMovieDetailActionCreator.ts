import { Dispatch } from 'redux';
import { getErrorMsgAPI, sendAPIRequest } from '../../utils/api';
import { IRawMovieDetailDataFromAPI } from './interfaces';
import MovieDetailActionType from '../action-types.ts/MovieDetailActionType';
import { MovieDetailAction } from '../actions/MovieDetailAction';
import { getMappingMovieDetailData } from '../../utils/mapping';

const fetchMovieDetail = (idMovie: number) => async (dispatch: Dispatch<MovieDetailAction>) => {
  dispatch({
    type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST,
  });
  try {
    const rawMovieDetailDataFromAPI = await
    sendAPIRequest<IRawMovieDetailDataFromAPI>(`movie/${idMovie}`, 'GET')
      .then((data) => data);

    const movieDetail = getMappingMovieDetailData(rawMovieDetailDataFromAPI);

    dispatch({
      type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST_SUCCESS,
      payload: movieDetail,
    });
  } catch (error: unknown) {
    dispatch({
      type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST_ERROR,
      payload: getErrorMsgAPI(error),
    });
  }
};

export default fetchMovieDetail;
