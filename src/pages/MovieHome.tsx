import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useSearchInput } from '../hooks/useSearchInput';
import { Trending, MovieList } from '../components';
import { Title } from '../components/UI';
import { getMoviesByName, scrollToViewId } from '../utils/utils';

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
        scrollToViewId('root');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
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
                categoryLabel='Popular'
                movieList={getMoviesByName(searchValue,movieListData)} 
                onChange={handleOnChangeSearchValue} 
                searchValue={searchValue}
            />}
        </>
    )
}

export default MovieHome;