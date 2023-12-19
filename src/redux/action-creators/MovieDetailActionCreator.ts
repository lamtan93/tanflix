import { Dispatch } from "redux"
import sendAPIRequest from '../../utils/utils';
import { IRawMovieDetailDataFromAPI } from './interfaces';
import { IMovieDetail } from '../../components/MovieDetail/interfaces/IMovieDetail';
import { MovieDetailActionType } from '../action-types.ts/MovieDetailActionType';
import { MovieDetailAction } from '../actions/MovieDetailAction';

export const fetchMovieDetail = (idMovie: number) => {
    return async (dispatch: Dispatch<MovieDetailAction>) => {
        dispatch({
            type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST
        })
        try {
            const rawMovieDetailDataFromAPI: IRawMovieDetailDataFromAPI = 
            await sendAPIRequest<IRawMovieDetailDataFromAPI>(`movie/${idMovie}`, 'GET')
            .then(data => data);

            const {
                id,
                title,
                overview,
                poster_path,
                popularity,
                genres,
                release_date,
                production_companies,
                production_countries
            } = rawMovieDetailDataFromAPI || {};

            const movieDetail: IMovieDetail = {
                    id,
                    name: title,
                    description: overview,
                    imgSrc: poster_path,
                    popularity,
                    genres,
                    date: release_date,
                    companies: production_companies,
                    countries: production_countries
            }

            dispatch({
                type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST_SUCCESS,
                payload: movieDetail
            });
        } catch (error: unknown) {
            let errorMsg = 'sorry but something went wrong :(';
            if(typeof error === 'string'){
                errorMsg = error
            }else if(error instanceof Error){
                errorMsg = error.message
            }
            dispatch({
                type: MovieDetailActionType.FETCH_MOVIE_DETAIL_REQUEST_ERROR,
                payload: errorMsg
            })
        }
    }
}