import { Dispatch } from "redux"
import { sendAPIRequest, getErrorMsgAPI } from "../../utils/api";
import { IRawMovieReviewListDataFromAPI } from './interfaces';
import { MovieReviewListAction } from "../actions/MovieReviewListAction";
import { MovieReviewListActionType } from "../action-types.ts/MovieReviewActionType";
import { IReviewItem } from "../../components/Reviewer/interfaces/IReviewer";
import { getMappingMovieReviewListData } from "../../utils/mapping";

export const fetchMovieReviewList = (idMovie: number) => {
    return async (dispatch: Dispatch<MovieReviewListAction>) => {
        dispatch({
            type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST,
        })
        try {
            const rawMovieReviewListDataFromAPI: IRawMovieReviewListDataFromAPI = 
            await sendAPIRequest<IRawMovieReviewListDataFromAPI>(`movie/${idMovie}/reviews`, 'GET')
            .then(data => data);

            const movieReviewList: IReviewItem[] = getMappingMovieReviewListData(rawMovieReviewListDataFromAPI);

            dispatch({
                type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_SUCCESS,
                payload: movieReviewList
            });
        } catch (error: unknown) {
            dispatch({
                type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_ERROR,
                payload: getErrorMsgAPI(error)
            })
        }
    }
}