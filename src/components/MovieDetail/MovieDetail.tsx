import React, { useState } from 'react'
import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'
import useSearchInput from '../../hooks/useSearchInput'
import { ButtonLink, Actor, Title, Popup } from '../UI'
import Reviewer from '../Reviewer/Reviewer'
import MovieList from '../MovieList/MovieList'
import PreviewVideo from '../PreviewVideo/PreviewVideo'
import '../../styles/_components/_movieDetail.scss'
import { IMovieDetail } from './interfaces/IMovieDetail'
import { CONFIG_API } from '../../utils/api'
import Disclaimer from '../Utils/Disclaimer'
import { getMoviesByName } from '../../utils/mapping'
import { scrollToViewId, stopVideo } from '../../utils/utils'
import Dico from '../../utils/dico'
import Genre from '../UI/Genre/Genre'

function MovieDetail({
  id,
  name,
  description,
  genres,
  popularity,
  date,
  companies,
  countries,
  imgSrc,
}: IMovieDetail) {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [oldIdMovieVideo, setOldIdMovieVideo] = useState(0)
  const { searchValue, handleOnChangeSearchValue } = useSearchInput()

  const { fetchMovieVideo } = useActions()

  const { movieVideosLoading, movieVideosData, movieVideosError } =
    useTypedSelector((state) => state.movieVideos) || {}

  const { movieReviewListLoading, movieReviewListData, movieReviewListError } =
    useTypedSelector((state) => state.movieReviewList) || {}

  const {
    similarMovieListLoading,
    similarMovieListData,
    similarMovieListError,
  } = useTypedSelector((state) => state.similarMovieList) || {}

  const showPopup = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (movieVideosError || oldIdMovieVideo !== id) {
      fetchMovieVideo(id)
      setOldIdMovieVideo(id)
    }
    setIsOpenPopup(true)
    scrollToViewId('root')
  }

  const closePopup = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setIsOpenPopup(false)
    stopVideo()
  }

  return (
    <section id="movie-detail-section" className="detailmovie-section">
      <div className="detailmovie">
        <div id="preview" className="detailmovie__preview">
          <img
            src={`${CONFIG_API.BASE_IMAGE_URL}/${imgSrc}`}
            alt={`img-${name}`}
          />
          {movieVideosError && (
            <Disclaimer
              type="error"
              msgGlobal="sorry"
              msgDetail={Dico.DISCLAIMER.DETAILS.ERROR_LOADING_VIDEO}
            />
          )}
          {!movieVideosLoading && !movieVideosError && movieVideosData && (
            <Popup name={name} close={closePopup} open={isOpenPopup}>
              {movieVideosData.length > 0 ? (
                <PreviewVideo
                  src={`${CONFIG_API.BASE_VIDEO_URL_YOUTUBE}/${movieVideosData[0].key}`}
                  title={name}
                  width="100%"
                  height="100%"
                />
              ) : (
                <Disclaimer
                  type="error"
                  msgGlobal="Sorry"
                  msgDetail="trailer not available :("
                />
              )}
            </Popup>
          )}
          <ButtonLink
            name={Dico.SECTION_DETAIL_MOVIE.BUTTONLINK_WATCH_TRAILER}
            animated
            color="orange"
            size="med"
            loading={movieVideosLoading}
            onClick={(e) => showPopup(e)}
          />
        </div>

        <div className="detailmovie__content">
          <Title name={name} size="med" position="left" />
          <div className="detailmovie__tags">
            {genres.map((genre) => (
              <Genre
                key={genre.id}
                genre={genre}
                color="white"
                withSharp
                disabled
              />
            ))}
          </div>
          <p className="detailmovie__resume">{description}</p>
          <span className="detailmovie__companies">
            {`${Dico.SECTION_DETAIL_MOVIE.PRODUCTION_COMPANIES_LABEL}:`}
          </span>
          <div className="detailmovie__actors">
            {companies.map((company) => (
              <Actor
                key={company.name}
                name={company.name}
                imgSrc={`${CONFIG_API.BASE_IMAGE_URL}/${company.logo_path}`}
              />
            ))}
          </div>

          <span className="detailmovie__country">
            {`${Dico.SECTION_DETAIL_MOVIE.COUNTRY_LABEL}: `}
            {countries.map((country) => `${country.name} `)}
          </span>
          <span className="detailmovie__popularity">
            {`${Dico.SECTION_DETAIL_MOVIE.POPULARITY_LABEL}: ${popularity}`}
          </span>
          <span className="detailmovie__autor">
            {`${Dico.SECTION_DETAIL_MOVIE.AUTHOR_LABEL}: 
            ${Dico.SECTION_DETAIL_MOVIE.UPDATED_IN_PROGRESS_LABEL}`}
          </span>
          <span className="detailmovie__date">
            {`${Dico.SECTION_DETAIL_MOVIE.DATE_LABEL}: ${date}`}
          </span>
        </div>
      </div>

      {movieReviewListLoading && <Disclaimer type="loading" />}
      {movieReviewListError && (
        <Disclaimer type="error" msgDetail={movieReviewListError} />
      )}
      {!movieReviewListError &&
        movieReviewListData &&
        movieReviewListData.length === 0 && (
          <Disclaimer
            type="infos"
            msg={Dico.SECTION_REVIEWER.NO_REVIEWER_MSG}
          />
        )}
      {!movieReviewListLoading &&
        !movieReviewListError &&
        movieReviewListData &&
        movieReviewListData.length > 0 && (
          <Reviewer title="Reviewers" reviewerList={movieReviewListData} />
        )}
      {similarMovieListLoading && <Disclaimer type="loading" />}
      {similarMovieListError && (
        <Disclaimer type="error" msgDetail={similarMovieListError} />
      )}
      {!similarMovieListLoading && !similarMovieListError && (
        <MovieList
          categoryLabel={Dico.SECTION_MOVIES_LIST.OTHERS.SIMILAR.TITLE_SIMILAR}
          movieList={getMoviesByName(searchValue, similarMovieListData)}
          onChange={handleOnChangeSearchValue}
          searchValue={searchValue}
        />
      )}
    </section>
  )
}

export default MovieDetail
