import { FC, useEffect, useState } from 'react';
import Trending from '../components/Trending/Trending';
import MovieList from '../components/MovieList/MovieList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getMoviesByName, scrollToViewId } from '../utils/utils';
import Title from '../components/Title/Title';

const MovieHome:FC = () => {
    const { fetchMovieList } = useActions();
    const { movieListLoading ,movieListData, movieListError } = useTypedSelector(state => state.movieList);
    useEffect(() => {
        fetchMovieList();
        scrollToViewId('movie-section');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [searchValue, setSearchValue] = useState('');
    const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    return (
        <>
            {movieListLoading && <Title name='Loading...' position='center'/>}
            {movieListError && <Title name='Sorry, something went wrong :(' position='center'/>}
            {!movieListLoading && !movieListError && <Trending movieList={movieListData.slice(0,3)}/>}
            {!movieListLoading && !movieListError && <MovieList movieList={getMoviesByName(searchValue,movieListData)} onChange={handleOnChangeSearch} />}
        </>
    )
}

export default MovieHome;