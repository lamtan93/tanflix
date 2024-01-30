import { IGenre } from '../../components/UI/Genre/interfaces/IGenre';
import MovieGenreListActionType from '../action-types.ts/MovieGenreListActionType';

// Fetch movie genre list
interface FetchMovieGenreListRequestAction {
    type: MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST;
}

interface FetchMovieGenreListRequestSucessAction {
    type: MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST_SUCCESS;
    payload: IGenre[],
}

interface FetchMovieGenreListRequestErrorAction {
    type: MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST_ERROR;
    payload: string,
}

export type MovieGenreListAction = FetchMovieGenreListRequestAction
| FetchMovieGenreListRequestSucessAction
| FetchMovieGenreListRequestErrorAction;
