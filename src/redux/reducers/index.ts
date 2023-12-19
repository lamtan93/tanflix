import { combineReducers } from 'redux';
import MovieListReducer from './movies/MovieListReducer';
import MovieDetailReducer from './moviedetail/MovieDetailReducer';

const reducers = combineReducers({
    movieList: MovieListReducer,
    movieDetail: MovieDetailReducer
})

export default reducers;
export type RootState = ReturnType<typeof reducers>;