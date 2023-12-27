import { MovieVideoAction } from './../../actions/MovieVideoAction';
import { MovieVideoActionType } from './../../action-types.ts/MovieVideoActionType';
import { IRawMovieVideoDataFromAPI } from '../../action-creators/interfaces';

interface MovieVideoState {
    movieVideosLoading: boolean,
    movieVideosData: IRawMovieVideoDataFromAPI[] | null,
    movieVideosError: string | null;
}

const initialMovieVideoState: MovieVideoState = {
    movieVideosLoading: false,
    movieVideosData: null,
    movieVideosError: null
}

const MovieVideoReducer = (state: MovieVideoState = initialMovieVideoState, action: MovieVideoAction): MovieVideoState => {
    switch(action.type){
        case MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST:
            return {
                ...state,
                movieVideosLoading: true,
                movieVideosData: null,
                movieVideosError: null,
            }
        case MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST_SUCCESS:
            return {
                ...state,
                movieVideosLoading: false,
                movieVideosData: action.payload,
                movieVideosError: null,
            }
        case MovieVideoActionType.FETCH_MOVIE_VIDEO_REQUEST_ERROR:
            return {
                ...state,
                movieVideosLoading: false,
                movieVideosData: null,
                movieVideosError: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default MovieVideoReducer;