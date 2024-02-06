import React, { useEffect } from 'react'
import useActions from '../hooks/useActions'
import useTypedSelector from '../hooks/useTypedSelector'
import useSearchInput from '../hooks/useSearchInput'
import { Trending, MovieList } from '../components'
import { getMoviesByName } from '../utils/mapping'
import { scrollToViewId } from '../utils/utils'
import Disclaimer from '../components/Utils/Disclaimer'
import Dico from '../utils/dico'

function MovieHome() {
  const { searchValue, handleOnChangeSearchValue } = useSearchInput()

  const { fetchMovieList, fetchTrendingMovieList, fetchMovieGenreList } =
    useActions()

  const { movieListLoading, movieListData, movieListError } = useTypedSelector(
    (state) => state.movieList
  )

  const {
    trendingMovieListLoading,
    trendingMovieListData,
    trendingMovieListError,
  } = useTypedSelector((state) => state.trendingMovieList) || {}

  useEffect(() => {
    fetchMovieList()
    fetchTrendingMovieList()
    fetchMovieGenreList()
    scrollToViewId('root')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {trendingMovieListLoading && <Disclaimer type="loading" />}
      {trendingMovieListError && (
        <Disclaimer type="error" msgDetail={trendingMovieListError} />
      )}
      {!trendingMovieListLoading && !trendingMovieListError && (
        <Trending
          categoryLabel={Dico.SECTION_MOVIES_LIST.TRENDING.TITLE_TRENDING}
          movieList={trendingMovieListData.slice(0, 3)}
        />
      )}

      {movieListLoading && <Disclaimer type="loading" />}
      {movieListError && <Disclaimer type="error" msgDetail={movieListError} />}
      {!movieListLoading && !movieListError && (
        <MovieList
          categoryLabel={Dico.SECTION_MOVIES_LIST.OTHERS.POPULAR.TITLE_POPULAR}
          movieList={getMoviesByName(searchValue, movieListData)}
          onChange={handleOnChangeSearchValue}
          searchValue={searchValue}
        />
      )}
    </>
  )
}

export default MovieHome
