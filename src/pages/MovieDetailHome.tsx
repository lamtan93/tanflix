import { FC, useEffect } from 'react';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { scrollToViewId } from '../utils/utils';
import Title from '../components/Title/Title';

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

            {movieDetailLoading && <Title name='Loading...' position='center'/>}
            {movieDetailError && <Title name='Sorry, something went wrong :(' position='center'/>}
            {!movieDetailLoading && !movieDetailError && movieDetailData && (
                <MovieDetail {...movieDetailData}/>
            )}
            
        </>
    )
}

export default MovieDetailHome;