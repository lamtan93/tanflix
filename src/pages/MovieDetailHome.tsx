import { FC, useEffect } from 'react';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { scrollToViewId } from '../utils/utils';
import Title from '../components/Title/Title';
import Navbar from '../components/Navbar/Navbar';

const MovieDetailHome:FC = () => {
    const { fetchMovieDetail, fetchSimilarMovieList, fetchMovieReviewList } = useActions();
    const { movieDetailLoading, movieDetailData, movieDetailError } 
    = useTypedSelector(state => state.movieDetail);

    const {id: idMovie} = useParams();
    useEffect(()=> {
        if(idMovie){
            fetchMovieDetail(Number(idMovie));
            fetchMovieReviewList(Number(idMovie));
            fetchSimilarMovieList(Number(idMovie));
        }
        scrollToViewId('navbar');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idMovie])  
    return (
        <>
            <Navbar />
            {movieDetailLoading && <Title name='Loading...' position='center' size='small'/>}
            {movieDetailError && <Title name='Sorry, something went wrong :(' position='center' size='small'/>}
            {!movieDetailLoading && !movieDetailError && movieDetailData && (
                <MovieDetail {...movieDetailData} />
            )}
            
        </>
    )
}

export default MovieDetailHome;