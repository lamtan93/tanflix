import { fetchMovieList } from "./FetchMovieListActionCreator";
import { fetchMovieDetail } from "./FetchMovieDetailActionCreator";
import { updateLikeMovieList } from "./UpdateLikeMovieListActionCreator";

const actionCreators = {
    fetchMovieList,
    fetchMovieDetail,
    updateLikeMovieList,
}

export default actionCreators;