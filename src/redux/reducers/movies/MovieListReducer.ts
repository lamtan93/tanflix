import { ICard } from "../../../components/Card/interfaces/ICard";
import { IMovieList } from "../../../components/MovieList/interfaces/IMovieList";
import { MovieListActionType } from "../../action-types.ts/MovieListActionType";
import { MovieListAction } from "../../actions/MovieListAction"


interface MovieListState {
    movieListLoading: boolean,
    movieListData: ICard[],
    movieListError: string | null;
}

const initialMovieListState: MovieListState = {
    movieListLoading: false,
    movieListData: [],
    movieListError: null
}

const MovieListReducer = (state: MovieListState = initialMovieListState, action: MovieListAction): MovieListState => {
    switch(action.type){
        case MovieListActionType.FETCH_MOVIE_LIST_REQUEST:
            return {
                ...state,
                movieListLoading: true,
                movieListError: null,
                movieListData: [],
            }
        case MovieListActionType.FETCH_MOVIE_LIST_REQUEST_SUCCESS:
            return {
                ...state,
                movieListLoading: false,
                movieListData: action.payload,
                movieListError: null,
            }
        case MovieListActionType.FETCH_MOVIE_LIST_REQUEST_ERROR:
            return {
                ...state,
                movieListLoading: false,
                movieListData: [],
                movieListError: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default MovieListReducer;