import { Dispatch } from 'redux'
import MovieListActionType from '../action-types.ts/MovieListActionType'
import { MovieListAction } from '../actions/MovieListAction'

const updateLikeMovieList =
  (idMovie: number) => async (dispatch: Dispatch<MovieListAction>) => {
    dispatch({
      type: MovieListActionType.UPDATE_LIKE_MOVIE_LIST_REQUEST,
      payload: idMovie,
    })
  }

export default updateLikeMovieList
