import { fetchMovieGenreList } from './FetchMovieGenreListActionCreator';
import { fetchMovieList } from "./FetchMovieListActionCreator";
import { fetchMovieDetail } from "./FetchMovieDetailActionCreator";
import { updateLikeMovieList } from "./UpdateLikeMovieListActionCreator";
import { fetchTrendingMovieList } from "./FetchMovieListActionCreator";
import { fetchMovieVideo } from "./FetchMovieVideoActionCreator";
import { fetchSimilarMovieList } from "./FetchMovieListActionCreator";
import { fetchMovieReviewList } from "./FetchMovieReviewListActionCreator";

const actionCreators = {
    fetchMovieList,
    fetchTrendingMovieList,
    fetchSimilarMovieList,
    fetchMovieVideo, 
    fetchMovieDetail,
    updateLikeMovieList, 
    fetchMovieReviewList ,
    fetchMovieGenreList,
}

export default actionCreators;