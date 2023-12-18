import { FC, useEffect, useState } from 'react';
import Trending from '../components/Trending';
import MovieList from '../components/MovieList';

interface IMovie {
    name: string,
    categorie: string,
    description: string,
}

type IMoviesList = IMovie[];

const MovieHome:FC = () => {
    const [movies, setMovies] = useState<IMoviesList>([]);

    // useEffect(() => {
    //     fetch('https://api.themoviedb.org/3/discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en-US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false')
    //     .then(response => response.json())
    //     .then(data => {console.log(data); setMovies(data)})
    //     .catch(error => console.error(error));

    // }, [])

    return (
        <>
            <Trending />
            <MovieList />
        </>
    )
}

export default MovieHome;