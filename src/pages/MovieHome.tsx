import { FC, useEffect, useState } from 'react';
import Trending from '../components/Trending/Trending';
import MovieList from '../components/MovieList/MovieList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getMoviesByName, scrollToViewId } from '../utils/utils';
import Title from '../components/Title/Title';

const MovieHome:FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const { fetchMovieList, fetchTrendingMovieList } = useActions();
    const { movieListLoading ,movieListData, movieListError } = useTypedSelector(state => state.movieList);
    const { trendingMovieListLoading, trendingMovieListData,trendingMovieListError} = useTypedSelector(state => state.trendingMovieList);

    useEffect(() => {
        fetchMovieList();
        fetchTrendingMovieList();
        scrollToViewId('movie-section');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    return (
        <>
            {movieListLoading && <Title name='Loading...' position='center'/>}
            {movieListError && <Title name='Sorry, something went wrong :(' position='center'/>}
            {!trendingMovieListLoading && !trendingMovieListError 
            && <Trending 
                movieList={trendingMovieListData.slice(0,3)}
                searchValue=''
            />}

            {!movieListLoading && !movieListError 
            && <MovieList 
                movieList={getMoviesByName(searchValue,movieListData)} 
                onChange={handleOnChangeSearch} 
                searchValue={searchValue}
            />}
        </>
    )
}

export default MovieHome;