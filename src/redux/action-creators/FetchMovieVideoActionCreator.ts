import { getMappingMovieVideoListData } from './../../utils/mapping';
import { Dispatch } from "redux"
import { getErrorMsgAPI, sendAPIRequest } from "../../utils/api";
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

            const moviesVideos = getMappingMovieVideoListData(rawMovieVideoData);

            dispatch({
                type: MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST_SUCCESS,
                payload: moviesVideos
            });
            
        } catch (error: unknown) {
            dispatch({
                type: MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST_ERROR,
                payload: getErrorMsgAPI(error)
            })
        }
    }
}