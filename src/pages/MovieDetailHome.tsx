import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';
import { MovieDetail } from '../components';
import { scrollToViewId } from '../utils/utils';
import Disclaimer from '../components/Utils/Disclaimer';

function MovieDetailHome() {
  const { fetchMovieDetail, fetchSimilarMovieList, fetchMovieReviewList } = useActions();
  const {
    movieDetailLoading,
    movieDetailData,
    movieDetailError,
  } = useTypedSelector((state) => state.movieDetail);

  const { id: idMovie } = useParams();
  useEffect(() => {
    if (idMovie) {
      fetchMovieDetail(Number(idMovie));
      fetchMovieReviewList(Number(idMovie));
      fetchSimilarMovieList(Number(idMovie));
    }
    scrollToViewId('root');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idMovie]);
  return (
    <>
      {movieDetailLoading && <Disclaimer type="loading" />}
      {movieDetailError && <Disclaimer type="error" msgDetail={movieDetailError} />}
      {!movieDetailLoading && !movieDetailError && movieDetailData && (
        <MovieDetail
          id={movieDetailData.id}
          name={movieDetailData.name}
          description={movieDetailData.description}
          genres={movieDetailData.genres}
          popularity={movieDetailData.popularity}
          date={movieDetailData.date}
          companies={movieDetailData.companies}
          countries={movieDetailData.countries}
          imgSrc={movieDetailData.imgSrc}
        />
      )}
    </>
  );
}

export default MovieDetailHome;
