import { Dispatch } from 'redux';
import { sendAPIRequest, getErrorMsgAPI } from '../../utils/api';
import { IRawMovieReviewListDataFromAPI } from './interfaces';
import { MovieReviewListAction } from '../actions/MovieReviewListAction';
import MovieReviewListActionType from '../action-types.ts/MovieReviewActionType';
import { getMappingMovieReviewListData } from '../../utils/mapping';

const fetchMovieReviewList = (
  idMovie: number,
) => async (dispatch: Dispatch<MovieReviewListAction>) => {
  dispatch({
    type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST,
  });
  try {
    const rawMovieReviewListDataFromAPI = await
    sendAPIRequest<IRawMovieReviewListDataFromAPI>(`movie/${idMovie}/reviews`, 'GET')
      .then((data) => data);

    const movieReviewList = getMappingMovieReviewListData(rawMovieReviewListDataFromAPI);

    dispatch({
      type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_SUCCESS,
      payload: movieReviewList,
    });
  } catch (error: unknown) {
    dispatch({
      type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_ERROR,
      payload: getErrorMsgAPI(error),
    });
  }
};

export default fetchMovieReviewList;
