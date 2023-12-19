import { MovieListActionType } from './../action-types.ts/MovieListActionType';
import { Dispatch } from "redux"
import { MovieListAction } from "../actions/MovieListAction";
import sendAPIRequest from '../../utils/utils';
import { ICard } from '../../components/Card/interfaces/ICard';
import { IRawMovieListDataFromAPI } from './interfaces';

// const movieListURL = 'https://api.themoviedb.org/3/discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false';
// const movieListURL = 'https://api.themoviedb.org/3/movie/popular';
export const fetchMovieList = () => {
    return async (dispatch: Dispatch<MovieListAction>) => {
        dispatch({
            type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST,
        })
        try {
            const rawDataFromAPI: IRawMovieListDataFromAPI = await sendAPIRequest<IRawMovieListDataFromAPI>('movie/popular', 'GET')
            .then(data => data);

            const movieList: ICard[] = rawDataFromAPI.results.map(data => {
                return {
                    id: data.id,
                    name: data.title,
                    description: data.overview,
                    imgSrc: data.poster_path
                }
            });
            dispatch({
                type: MovieListActionType.FETCH_MOVIE_LIST_REQUEST_SUCCESS,
                payload: movieList
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