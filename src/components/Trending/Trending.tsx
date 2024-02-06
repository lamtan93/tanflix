import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Title, Card } from '../UI'
import { IMovieList } from '../MovieList/interfaces/IMovieList'
import '../../styles/_layouts/_moviesContainer.scss'

function Trending({ movieList, categoryLabel }: IMovieList) {
  const navigate = useNavigate()
  const onClickHandle = (idMovie: number) => {
    navigate(`/movies/detail/${idMovie}`)
  }
  return (
    <section className="movies-section">
      <Title name={categoryLabel} position="right" size="big" />
      <div className="movies-section__content">
        <div className="movies-section__moviesList movies-section__moviesList--trending">
          {movieList.map((movie) => (
            <Card
              type="trending"
              key={movie.id}
              id={movie.id}
              name={movie.name}
              description={movie.description}
              imgSrc={movie.imgSrc}
              genre_ids={movie.genre_ids}
              liked={movie.liked}
              handleOnClick={(idMovie) => onClickHandle(idMovie)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending
