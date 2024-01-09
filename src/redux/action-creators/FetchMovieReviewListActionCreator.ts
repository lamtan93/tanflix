import { Dispatch } from "redux"
import sendAPIRequest, { truncateString } from '../../utils/utils';
import { IRawMovieReviewListDataFromAPI } from './interfaces';
import { MovieReviewListAction } from "../actions/MovieReviewListAction";
import { MovieReviewListActionType } from "../action-types.ts/MovieReviewActionType";
import { IReviewItem } from "../../components/Reviewer/interfaces/IReviewer";

export const fetchMovieReviewList = (idMovie: number) => {
    return async (dispatch: Dispatch<MovieReviewListAction>) => {
        dispatch({
            type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST,
        })
        try {
            const rawMovieReviewListDataFromAPI: IRawMovieReviewListDataFromAPI = 
            await sendAPIRequest<IRawMovieReviewListDataFromAPI>(`movie/${idMovie}/reviews`, 'GET')
            .then(data => data);

            const movieReviewList: IReviewItem[] = rawMovieReviewListDataFromAPI.results
            .map((r, i) => {
                return {
                    id: r.id,
                    name: r.author || r.author_details.name || r.author_details.username,
                    img: `https://source.unsplash.com/random/?face,beautiful,top${i}`,
                    stars: Math.round(r.author_details.rating/2),
                    message: truncateString(r.content, 150),
                    date: new Date(r.updated_at).toLocaleDateString(),
                }
            })

            dispatch({
                type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_SUCCESS,
                payload: movieReviewList
            });
        } catch (error: unknown) {
            let errorMsg = 'sorry but something went wrong :(';
            if(typeof error === 'string'){
                errorMsg = error
            }else if(error instanceof Error){
                errorMsg = error.message
            }
            dispatch({
                type: MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_ERROR,
                payload: errorMsg
            })
        }
    }
}