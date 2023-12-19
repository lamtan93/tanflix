import { FC, useEffect } from 'react';
import Trending from '../components/Trending/Trending';
import MovieList from '../components/MovieList/MovieList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const MovieHome:FC = () => {
    const { fetchMovieList } = useActions();
    const { movieListLoading ,movieListData, movieListError } = useTypedSelector(state => state.movieList);

    useEffect(() => {
        fetchMovieList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {/* <Trending /> */}
            {movieListLoading && <h1>Loading...</h1>}
            {movieListError && <h1>Error</h1>}
            <MovieList movieList={movieListData} />
        </>
    )
}

export default MovieHome;