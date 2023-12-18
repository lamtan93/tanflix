import { combineReducers } from 'redux';
import MovieListReducer from './movies/MovieListReducer';

const reducers = combineReducers({
    movieList: MovieListReducer,
})

export default reducers;
export type RootState = ReturnType<typeof reducers>;