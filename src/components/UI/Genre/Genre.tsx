import React from 'react'
import classNames from 'classnames'
import { IGenreUI } from './interfaces/IGenre'
import '../../../styles/_components/_genre.scss'

function Genre({
  genre,
  color,
  withLineThrough = false,
  withLineThroughHover = false,
  withSharp = false,
  disabled = false,
  onClickGenre = () => {},
}: IGenreUI) {
  const genreClassNames = classNames('genre__item', `genre__item--${color}`, {
    'genre__item--lineThrough': withLineThrough,
    'genre__item--lineThrough-hover': withLineThroughHover,
    'genre__item--disabled': disabled,
  })
  return (
    <button
      type="button"
      className={genreClassNames}
      onClick={() => {
        onClickGenre(genre)
      }}
    >
      {`${withSharp ? '#' : ''}${genre.name}`}
    </button>
  )
}

export default Genre
