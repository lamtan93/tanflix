import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoadMore } from '../../hooks/useLoadMore'
import { Title, Card, ButtonLink } from '../UI'
import { IMovieList } from './interfaces/IMovieList'
import '../../styles/_layouts/_moviesContainer.scss'
import '../../styles/_base/_utility.scss'
import Input from '../UI/Input/Input'
import useTypedSelector from '../../hooks/useTypedSelector'
import Disclaimer from '../Utils/Disclaimer'
import { getMoviesByGenres } from '../../utils/mapping'
import GenreList from '../GenreList/GenreList'
import { IGenre } from '../UI/Genre/interfaces/IGenre'
import Dico from '../../utils/dico'

function MovieList({
  categoryLabel,
  movieList,
  onChange = () => {},
  searchValue,
}: IMovieList) {
  const [isShowAll, setIsShowAll] = useState(false)
  const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([])

  const navigate = useNavigate()
  const onClickHandle = (idMovie: number) => {
    navigate(`/movies/detail/${idMovie}`)
  }

  const {
    listDataFinal: movieListLoadMore,
    loadMore,
    isLoadMoreCompleted,
  } = useLoadMore(movieList) || {}

  useEffect(() => {
    if (selectedGenres.length > 0) {
      setIsShowAll(true)
    } else {
      setIsShowAll(false)
    }
  }, [selectedGenres])

  const { movieGenreListLoading, movieGenreListData, movieGenreListError } =
    useTypedSelector((state) => state.movieGenreList) || {}

  const handleOnClickGenre = (genre: IGenre) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre])
    } else {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      )
    }
  }

  const clearSelectedGenres = () => setSelectedGenres([])
  const moviesListByGenres = getMoviesByGenres(movieList, selectedGenres)
  const movieListLoadMoreByGenres = getMoviesByGenres(
    movieListLoadMore,
    selectedGenres
  )

  const movieListToRender = isShowAll
    ? moviesListByGenres
    : movieListLoadMoreByGenres

  return (
    <section className="movies-section">
      <div className="movies-section__header">
        <div className="movies-section__header--main">
          <Title name={categoryLabel} position="left" size="big" />
          <Input
            type="text"
            placeholder={Dico.SECTION_MOVIES_LIST.SEARCH_INPUT.PLACE_HOLDER}
            onChange={(e) => onChange(e)}
            labelName={Dico.SECTION_MOVIES_LIST.SEARCH_INPUT.LABEL}
            value={searchValue}
          />
        </div>
        <div className="movies-section__header--sub">
          {movieGenreListLoading && <Disclaimer type="loading" />}
          {movieGenreListError && (
            <Disclaimer
              type="error"
              msgDetail="error when fetch movie genres"
            />
          )}
          {!movieGenreListLoading &&
            !movieGenreListError &&
            movieGenreListData && (
              <GenreList
                genresList={movieGenreListData}
                selectedGenresList={selectedGenres}
                onClickGenre={handleOnClickGenre}
                clearSelectedGenres={clearSelectedGenres}
              />
            )}
        </div>
      </div>
      <div className="movies-section__content">
        <div className="movies-section__moviesList movies-section__moviesList--others">
          {movieListToRender.length === 0 ? (
            <Disclaimer
              type="infos"
              msg={Dico.DISCLAIMER.DETAILS.NO_MOVIE_TO_DISPLAY}
            />
          ) : (
            movieListToRender.map((movie) => (
              <Card
                type="others"
                key={movie.id}
                id={movie.id}
                name={movie.name}
                description={movie.description}
                imgSrc={movie.imgSrc}
                genre_ids={movie.genre_ids}
                liked={movie.liked}
                handleOnClick={(idMovie) => onClickHandle(idMovie)}
              />
            ))
          )}
          <div className="movies-section__cta-loadmore">
            {!isShowAll &&
              !isLoadMoreCompleted &&
              movieListToRender.length > 0 &&
              !searchValue && (
                <ButtonLink
                  name="loadmore"
                  color="orange"
                  animated
                  onClick={loadMore}
                  size="med"
                />
              )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieList
