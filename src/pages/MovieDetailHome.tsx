import { FC } from 'react';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import { useParams } from 'react-router-dom';

const MovieDetailHome:FC = () => {
    const { id } = useParams();
    console.log({id});
    return (
        <>
            <MovieDetail id={id} />
        </>
    )
}

export default MovieDetailHome;