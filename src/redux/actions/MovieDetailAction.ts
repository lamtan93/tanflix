import { IMovieDetail } from './../../components/MovieDetail/interfaces/IMovieDetail';
import { MovieDetailActionType } from './../action-types.ts/MovieDetailActionType';

interface FetchMovieDetailRequestAction {
    type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST
}

interface FetchMovieDetailRequestSucessAction {
    type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST_SUCCESS
    payload: IMovieDetail,
}

interface FetchMovieDetailRequestErrorAction {
    type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST_ERROR
    payload: string,
}

export type MovieDetailAction = FetchMovieDetailRequestAction
| FetchMovieDetailRequestSucessAction
| FetchMovieDetailRequestErrorAction;
