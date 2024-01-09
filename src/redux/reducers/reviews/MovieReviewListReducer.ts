import { MovieReviewListAction } from './../../actions/MovieReviewListAction';
import { MovieReviewListActionType } from './../../action-types.ts/MovieReviewActionType';
import { IReviewItem } from "../../../components/Reviewer/interfaces/IReviewer";

interface MovieReviewListState {
    movieReviewListLoading: boolean,
    movieReviewListData: IReviewItem[] | null,
    movieReviewListError: string | null;
}

const initialMovieReviewListState: MovieReviewListState = {
    movieReviewListLoading: false,
    movieReviewListData: null,
    movieReviewListError: null
}

const MovieReviewListReducer = (state: MovieReviewListState = initialMovieReviewListState, action: MovieReviewListAction): MovieReviewListState => {
    switch(action.type){
        case MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST:
            return {
                ...state,
                movieReviewListLoading: true,
                movieReviewListData: null,
                movieReviewListError: null,
            }
        case MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_SUCCESS:
            return {
                ...state,
                movieReviewListLoading: false,
                movieReviewListData: action.payload,
                movieReviewListError: null,
            }
        case MovieReviewListActionType.FETCH_MOVIE_REVIEW_LIST_REQUEST_ERROR:
            return {
                ...state,
                movieReviewListLoading: false,
                movieReviewListData: null,
                movieReviewListError: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default MovieReviewListReducer;