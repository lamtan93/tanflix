import { fetchMovieList } from "./FetchMovieListActionCreator";
import { fetchMovieDetail } from "./FetchMovieDetailActionCreator";
import { updateLikeMovieList } from "./UpdateLikeMovieListActionCreator";
import { fetchTrendingMovieList } from "./FetchMovieListActionCreator";
import { fetchMovieVideo } from "./FetchMovieVideoActionCreator";

const actionCreators = {
    fetchMovieList,
    fetchTrendingMovieList,
    fetchMovieVideo, 
    fetchMovieDetail,
    updateLikeMovieList,  
}

export default actionCreators;