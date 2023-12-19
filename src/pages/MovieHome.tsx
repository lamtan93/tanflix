import { FC, useEffect, useState } from 'react';
// import Trending from '../components/Trending/Trending';
import MovieList from '../components/MovieList/MovieList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getMoviesByName } from '../utils/utils';

const MovieHome:FC = () => {
    const { fetchMovieList } = useActions();
    const { movieListLoading ,movieListData, movieListError } = useTypedSelector(state => state.movieList);
    useEffect(() => {
        fetchMovieList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [searchValue, setSearchValue] = useState('');
    const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    return (
        <>
            {/* <Trending /> */}
            {movieListLoading && <h1>Loading...</h1>}
            {movieListError && <h1>Error</h1>}
            <MovieList movieList={getMoviesByName(searchValue,movieListData)} onChange={handleOnChangeSearch} />
        </>
    )
}

export default MovieHome;