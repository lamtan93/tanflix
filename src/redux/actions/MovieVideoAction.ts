import { MovieVideoActionType } from '../action-types.ts/MovieVideoActionType';
import { IRawMovieVideoDataFromAPI } from '../action-creators/interfaces';

interface FetchMovieVideoRequestAction {
    type: MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST
}

interface FetchMovieVideoRequestSucessAction {
    type: MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST_SUCCESS
    payload: IRawMovieVideoDataFromAPI[],
}

interface FetchMovieVideoRequestErrorAction {
    type: MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST_ERROR
    payload: string,
}

export type MovieVideoAction = FetchMovieVideoRequestAction
| FetchMovieVideoRequestSucessAction
| FetchMovieVideoRequestErrorAction;
