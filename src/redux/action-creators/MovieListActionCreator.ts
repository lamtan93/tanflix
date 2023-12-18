import { MovieListActionType } from './../action-types.ts/MovieListActionType';
import { Dispatch } from "redux"
import { MovieListAction } from "../actions/MovieListAction"

const movieListURL = 'https://api.themoviedb.org/3/discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false';
export const fetchMovieList = () => {
    return async (dispatch: Dispatch<MovieListAction>) => {
        dispatch({
            type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST,
        })

        try {
            const responseAPI = await fetch(movieListURL, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }  
            })

            const movieListData = await responseAPI.json();
            // console.log({movieListData});
            dispatch({
                type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_SUCCESS,
                payload: movieListData
            });
        } catch (error: unknown) {
            let errorMsg = 'sorry but something went wrong :(';
            if(typeof error === 'string'){
                errorMsg = error
            }else if(error instanceof Error){
                errorMsg = error.message
            }
            dispatch({
                type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_ERROR,
                payload: errorMsg
            })
        }
    }
}