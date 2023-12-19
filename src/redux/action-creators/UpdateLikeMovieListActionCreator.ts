import { MovieListActionType } from '../action-types.ts/MovieListActionType';
import { Dispatch } from "redux"
import { MovieListAction } from "../actions/MovieListAction";

export const updateLikeMovieList = (idMovie: number) => {
    return async (dispatch: Dispatch<MovieListAction>) => {
        dispatch({
            type: MovieListActionType.UPDATE_LIKE_MOVIE_LIST_REQUEST,
            payload: idMovie,
        })
    }
}