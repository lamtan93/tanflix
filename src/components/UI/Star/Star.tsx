import React from 'react'
import '../../../styles/_components/_star.scss'
import classNames from 'classnames'
import { IStar } from './interfaces/IStar'

function Star({ id, isLiked, onClick }: IStar) {
  const starClassNames = classNames('star', {
    'star--liked': isLiked,
    'star--disliked': !isLiked,
  })
  return (
    <button
      type="button"
      className={starClassNames}
      onClick={(e) => onClick(e, id)}
      aria-label="favoris-button"
      data-testid="favoris-button"
    />
  )
}

export default Star
