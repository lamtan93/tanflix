import { truncateString } from './../../utils/utils';
import { MovieListActionType } from '../action-types.ts/MovieListActionType';
import { Dispatch } from "redux"
import { MovieListAction, SimilarMovieListAction, TrendingMovieListAction } from "../actions/MovieListAction";
import { sendAPIRequest } from '../../utils/api';
import { ICard } from '../../components/UI/Card/interfaces/ICard';
import { IRawMovieListDataFromAPI } from './interfaces';

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
                    description: truncateString(data.overview, 55),
                    imgSrc: data.poster_path,
                    liked: false
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

export const fetchTrendingMovieList = () => {
    return async (dispatch: Dispatch<TrendingMovieListAction>) => {
        dispatch({
            type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST,
        })
        try {
            const rawDataFromAPI: IRawMovieListDataFromAPI = await sendAPIRequest<IRawMovieListDataFromAPI>('trending/movie/day', 'GET')
            .then(data => data);

            const movieList: ICard[] = rawDataFromAPI.results.map(data => {
                return {
                    id: data.id,
                    name: data.title,
                    description: truncateString(data.overview, 55),
                    imgSrc: data.poster_path,
                    liked: false
                }
            });
            dispatch({
                type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST_SUCCESS,
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
                type: MovieListActionType.FETCH_TRENDING_MOVIE_LIST_REQUEST_ERROR,
                payload: errorMsg
            })
        }
    }
}

export const fetchSimilarMovieList = (id: number) => {
    return async (dispatch: Dispatch<SimilarMovieListAction>) => {
        dispatch({
            type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST,
        })
        try {                                                                                                   
            const rawDataFromAPI: IRawMovieListDataFromAPI = await sendAPIRequest<IRawMovieListDataFromAPI>(`movie/${id}/similar`, 'GET')
            .then(data => data);
            const movieList: ICard[] = rawDataFromAPI.results
            .filter(m => m.poster_path !== null)
            .map(data => {
                return {
                    id: data.id,
                    name: data.title,
                    description: truncateString(data.overview, 55),
                    imgSrc: data.poster_path,
                    liked: false
                }
            });
            dispatch({
                type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST_SUCCESS,
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
                type: MovieListActionType.FETCH_SIMILAR_MOVIE_LIST_REQUEST_ERROR,
                payload: errorMsg
            })
        }
    }
}