import React from 'react'
import { useNavigate } from 'react-router-dom'
import Star from '../Star/Star'
import '../../../styles/_components/_card.scss'
import { ICard } from './interfaces/ICard'
import useActions from '../../../hooks/useActions'
import { CONFIG_API } from '../../../utils/api'
import useScrollAnimation from '../../../hooks/useScrollAnimation'

function Card({ type, id, name, description, imgSrc, liked }: ICard) {
  const navigate = useNavigate()
  const { updateLikeMovieList } = useActions()

  const handleOnClick = (idMovie: number) => {
    navigate(`/movies/detail/${idMovie}`)
  }

  const handleOnClickStar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idMovie: number
  ) => {
    e.stopPropagation()
    updateLikeMovieList(idMovie)
  }
  useScrollAnimation('card')

  return (
    <div
      className={`card card--${type} ${type === 'others' && 'scroll--hidden-card'}`}
      role="button"
      tabIndex={id}
      onClick={() => handleOnClick(id)}
      onKeyDown={() => handleOnClick(id)}
    >
      <div className={`card__image card__image--${type}`}>
        <Star
          id={id}
          isLiked={liked || false}
          onClick={(e) => handleOnClickStar(e, id)}
        />
        <img
          src={`${CONFIG_API.BASE_IMAGE_URL}/${imgSrc}`}
          alt={`img-${name}`}
        />
      </div>
      <div className="card__infos">
        <span className="card__name"> {name} </span>
        <p className="card__description">{description}</p>
      </div>
    </div>
  )
}

export default Card
