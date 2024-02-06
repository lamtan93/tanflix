import { IGenre } from '../components/UI/Genre/interfaces/IGenre'
import { IMovieDetail } from '../components/MovieDetail/interfaces/IMovieDetail'
import { IReviewItem } from '../components/Reviewer/interfaces/IReviewer'
import { ICard } from '../components/UI/Card/interfaces/ICard'
import {
  IRawMovieDetailDataFromAPI,
  IRawMovieListDataFromAPI,
  IRawMovieReviewListDataFromAPI,
  IRawMovieVideoDataFromAPI,
} from '../redux/action-creators/interfaces'
import { CONFIG_API } from './api'
import { truncateString } from './utils'

export const getMappingMovieListData = (
  rawDataFromAPI: IRawMovieListDataFromAPI
): ICard[] =>
  rawDataFromAPI.results.map((data) => ({
    id: data.id,
    name: data.title,
    description: truncateString(data.overview, 55),
    imgSrc: data.poster_path,
    genre_ids: data.genre_ids,
    liked: false,
    handleOnClick: () => {},
  }))

export const getMappingMovieDetailData = (
  rawDataFromAPI: IRawMovieDetailDataFromAPI
): IMovieDetail => {
  const {
    id,
    title,
    overview,
    poster_path: posterPath,
    popularity,
    genres,
    release_date: releaseDate,
    production_companies: productionCompanies,
    production_countries: productionCountries,
  } = rawDataFromAPI || {}

  return {
    id,
    popularity,
    genres,
    name: title,
    description: overview,
    imgSrc: posterPath,
    date: new Date(releaseDate).toLocaleDateString(),
    companies: productionCompanies.filter((company) => company.logo_path),
    countries: productionCountries,
  }
}

export const getMappingMovieReviewListData = (
  rawDataFromAPI: IRawMovieReviewListDataFromAPI
): IReviewItem[] =>
  rawDataFromAPI.results.map((r, i) => ({
    id: r.id,
    name: r.author || r.author_details.name || r.author_details.username,
    img: `${CONFIG_API.BASE_IMAGE_URL_RANDOM},${i}`,
    stars: Math.round(r.author_details.rating / 2),
    message: truncateString(r.content, 150),
    date: new Date(r.updated_at).toLocaleDateString(),
  }))

export const getMappingMovieVideoListData = (
  rawDataFromAPI: IRawMovieVideoDataFromAPI[]
): IRawMovieVideoDataFromAPI[] =>
  rawDataFromAPI.filter(
    (video) =>
      video.site.toLocaleLowerCase() === 'youtube' &&
      video.type.toLocaleLowerCase() === 'trailer'
  )

export const getMoviesByName = (movieName: string, movieList: Array<ICard>) =>
  movieList.filter((movie) =>
    movie.name.toLowerCase().includes(movieName.toLocaleLowerCase())
  )

export const getMoviesByGenres = (
  movieList: ICard[],
  selectedGenres: IGenre[]
) => {
  if (selectedGenres.length === 0) return movieList

  return movieList.filter((movie) =>
    selectedGenres.some((selectedGenre) =>
      movie.genre_ids.includes(selectedGenre.id)
    )
  )
}
