import { combineReducers } from 'redux';
import MovieListReducer from './movies/MovieListReducer';
import MovieDetailReducer from './moviedetail/MovieDetailReducer';
import TRendingMovieListReducer from './movies/TrendingMovieListReducer';

const reducers = combineReducers({
    movieList: MovieListReducer,
    movieDetail: MovieDetailReducer,
    trendingMovieList: TRendingMovieListReducer,
})

export default reducers;
export type RootState = ReturnType<typeof reducers>;