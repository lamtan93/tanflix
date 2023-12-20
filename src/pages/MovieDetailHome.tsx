import { FC, useEffect } from 'react';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { scrollToViewId } from '../utils/utils';

const MovieDetailHome:FC = () => {
    const { fetchMovieDetail } = useActions();
    const { movieDetailLoading, movieDetailData, movieDetailError } = useTypedSelector(state => state.movieDetail);
    const {id: idMovie} = useParams();
    useEffect(()=> {
        if(idMovie){fetchMovieDetail(Number(idMovie));}
        scrollToViewId('movie-detail-section');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  
    return (
        <>
            {movieDetailLoading && <h1>Loading...</h1>}
            {movieDetailError && <h1>Error</h1>}
            {movieDetailData && (
                <MovieDetail {...movieDetailData}/>
            )}
            
        </>
    )
}

export default MovieDetailHome;