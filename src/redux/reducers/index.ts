import { combineReducers } from 'redux';
import MovieListReducer from './movies/MovieListReducer';
import MovieDetailReducer from './moviedetail/MovieDetailReducer';
import TrendingMovieListReducer from './movies/TrendingMovieListReducer';
import MovieVideoReducer from './movievideo/MovieVideoReducer';

const reducers = combineReducers({
    movieList: MovieListReducer,
    trendingMovieList: TrendingMovieListReducer,
    movieDetail: MovieDetailReducer,
    movieVideos: MovieVideoReducer,
})

export default reducers;
export type RootState = ReturnType<typeof reducers>;