import { Dispatch } from 'redux'
import { getErrorMsgAPI, sendAPIRequest } from '../../utils/api'
import { IRawMovieGenreListDataFromAPI } from './interfaces'
import { MovieGenreListAction } from '../actions/MovieGenreListAction'
import MovieGenreListActionType from '../action-types.ts/MovieGenreListActionType'
import { IGenre } from '../../components/UI/Genre/interfaces/IGenre'

const fetchMovieGenreList =
  () => async (dispatch: Dispatch<MovieGenreListAction>) => {
    dispatch({
      type: MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST,
    })
    try {
      const rawDataFromAPI =
        await sendAPIRequest<IRawMovieGenreListDataFromAPI>(
          'genre/movie/list',
          'GET'
        ).then((data) => data)

      const movieGenreList: IGenre[] = rawDataFromAPI.genres

      dispatch({
        type: MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST_SUCCESS,
        payload: movieGenreList,
      })
    } catch (error: unknown) {
      dispatch({
        type: MovieGenreListActionType.FETCH_MOVIE_GENRE_LIST_REQUEST_ERROR,
        payload: getErrorMsgAPI(error),
      })
    }
  }

export default fetchMovieGenreList
