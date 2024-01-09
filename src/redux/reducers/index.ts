import { combineReducers } from 'redux';
import MovieListReducer from './movies/MovieListReducer';
import MovieDetailReducer from './moviedetail/MovieDetailReducer';
import TrendingMovieListReducer from './movies/TrendingMovieListReducer';
import MovieVideoReducer from './movievideo/MovieVideoReducer';
import SimilarMovieListReducer from './movies/SimilarMovieListReducer';
import MovieReviewListReducer from './reviews/MovieReviewListReducer';

const reducers = combineReducers({
    movieList: MovieListReducer,
    trendingMovieList: TrendingMovieListReducer,
    similarMovieList: SimilarMovieListReducer,
    movieDetail: MovieDetailReducer,
    movieVideos: MovieVideoReducer,
    movieReviewList: MovieReviewListReducer,
})

export default reducers;
export type RootState = ReturnType<typeof reducers>;