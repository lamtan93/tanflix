import { Dispatch } from "redux"
import sendAPIRequest from '../../utils/utils';
import { IRawMovieVideoDataFromAPI, IRawMovieVideoListDataFromAPI } from './interfaces';
import { MovieVideoActionType } from "../action-types.ts/MovieVideoActionType";
import { MovieVideoAction } from "../actions/MovieVideoAction";

export const fetchMovieVideo = (idMovie: number) => {
    return async (dispatch: Dispatch<MovieVideoAction>) => {
        dispatch({
            type: MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST
        })
        try {
            const rawMovieVideoData: IRawMovieVideoDataFromAPI[] 
            = await sendAPIRequest<IRawMovieVideoListDataFromAPI>(`movie/${idMovie}/videos`, 'GET')
            .then(data => data.results);

            const moviesVideos = rawMovieVideoData.filter(video => {
                return video.site.toLocaleLowerCase() === 'youtube'
                && video.type.toLocaleLowerCase() === 'trailer'
            })

            dispatch({
                type: MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST_SUCCESS,
                payload: moviesVideos
            });
        } catch (error: unknown) {
            let errorMsg = 'sorry but something went wrong :(';
            if(typeof error === 'string'){
                errorMsg = error
            }else if(error instanceof Error){
                errorMsg = error.message
            }
            dispatch({
                type: MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST_ERROR,
                payload: errorMsg
            })
        }
    }
}