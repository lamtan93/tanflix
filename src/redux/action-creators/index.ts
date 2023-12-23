import { fetchMovieList } from "./FetchMovieListActionCreator";
import { fetchMovieDetail } from "./FetchMovieDetailActionCreator";
import { updateLikeMovieList } from "./UpdateLikeMovieListActionCreator";
import { fetchTrendingMovieList } from "./FetchMovieListActionCreator";

const actionCreators = {
    fetchMovieList,
    fetchTrendingMovieList,
    fetchMovieDetail,
    updateLikeMovieList,    
}

export default actionCreators;