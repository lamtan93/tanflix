import fetchMovieGenreList from './FetchMovieGenreListActionCreator';
import {
  fetchMovieList,
  fetchTrendingMovieList,
  fetchSimilarMovieList,
} from './FetchMovieListActionCreator';
import fetchMovieDetail from './FetchMovieDetailActionCreator';
import updateLikeMovieList from './UpdateLikeMovieListActionCreator';
import fetchMovieVideo from './FetchMovieVideoActionCreator';
import fetchMovieReviewList from './FetchMovieReviewListActionCreator';

const actionCreators = {
  fetchMovieList,
  fetchTrendingMovieList,
  fetchSimilarMovieList,
  fetchMovieVideo,
  fetchMovieDetail,
  updateLikeMovieList,
  fetchMovieReviewList,
  fetchMovieGenreList,
};

export default actionCreators;
