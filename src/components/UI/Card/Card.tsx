import React from 'react'
import classNames from 'classnames'
import Star from '../Star/Star'
import '../../../styles/_components/_card.scss'
import { ICard } from './interfaces/ICard'
import useActions from '../../../hooks/useActions'
import { CONFIG_API } from '../../../utils/api'
import useScrollAnimation from '../../../hooks/useScrollAnimation'

function Card({
  type,
  id,
  name,
  description,
  imgSrc,
  liked,
  handleOnClick,
}: ICard) {
  const { updateLikeMovieList } = useActions()

  const handleOnClickStar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idMovie: number
  ) => {
    e.stopPropagation()
    updateLikeMovieList(idMovie)
  }
  useScrollAnimation('card')

  const cardClassNames = classNames('card', `card--${type}`, {
    'scroll--hidden-card': type === 'others',
  })

  const cardImageClassNames = classNames('card__image', `card__image--${type}`)

  return (
    <div
      className={cardClassNames}
      role="button"
      tabIndex={id}
      onClick={() => handleOnClick(id)}
      onKeyDown={() => handleOnClick(id)}
      data-testid="movie-card"
    >
      <div className={cardImageClassNames}>
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
