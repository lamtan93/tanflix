import { MovieListActionType } from "../action-types.ts/MovieListActionType"

interface FetchMovieListRequestAction {
    type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST
}

interface FetchMovieListRequestSucessAction {
    type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_SUCCESS,
    payload: [],
}

interface FetchMovieListRequestErrorAction {
    type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_ERROR,
    payload: string,
}


export type MovieListAction = FetchMovieListRequestAction
| FetchMovieListRequestSucessAction
| FetchMovieListRequestErrorAction;
