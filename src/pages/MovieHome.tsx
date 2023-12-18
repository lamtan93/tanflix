import { FC, useState, useEffect } from 'react';
import Trending from '../components/Trending/Trending';
import MovieList from '../components/MovieList/MovieList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

// interface IMovie {
//     name: string,
//     categorie: string,
//     description: string,
// }

// type IMoviesList = IMovie[];

const MovieHome:FC = () => {
    const { fetchMovieList } = useActions();
    const { movieListLoading ,movieListData, movieListError } = useTypedSelector(state => state.movieList);

    console.log({movieListLoading, movieListData, movieListError});

    useEffect(() => {
        fetchMovieList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Trending />
            <MovieList />
        </>
    )
}

export default MovieHome;