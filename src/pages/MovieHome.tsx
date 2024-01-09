import { FC, useEffect } from 'react';
import Trending from '../components/Trending/Trending';
import MovieList from '../components/MovieList/MovieList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getMoviesByName, scrollToViewId } from '../utils/utils';
import Title from '../components/Title/Title';
import Navbar from '../components/Navbar/Navbar';
import { useSearchInput } from '../hooks/useSearchInput';

const MovieHome:FC = () => {
    const {
        searchValue,
        handleOnChangeSearchValue,
    } = useSearchInput();

    const { fetchMovieList, fetchTrendingMovieList } = useActions();
    const { movieListLoading ,movieListData, movieListError } = useTypedSelector(state => state.movieList);
    const { trendingMovieListLoading, trendingMovieListData,trendingMovieListError} = useTypedSelector(state => state.trendingMovieList);

    useEffect(() => {
        fetchMovieList();
        fetchTrendingMovieList();
        scrollToViewId('movie-section');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            <Navbar />
            {movieListLoading && <Title name='Loading...' position='center' size='small' />}
            {movieListError && <Title name='Sorry, something went wrong :(' position='center' size='small'/>}
            {!trendingMovieListLoading && !trendingMovieListError 
            && <Trending 
                categoryLabel='Trending movies'
                movieList={trendingMovieListData.slice(0,3)}
                searchValue=''
            />}

            {!movieListLoading && !movieListError 
            && <MovieList 
                categoryLabel='Other movies'
                movieList={getMoviesByName(searchValue,movieListData)} 
                onChange={handleOnChangeSearchValue} 
                searchValue={searchValue}
            />}
        </>
    )
}

export default MovieHome;