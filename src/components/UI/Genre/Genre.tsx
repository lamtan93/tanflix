import React from 'react';
import { IGenreUI } from './interfaces/IGenre';
import '../../../styles/_components/_genre.scss';

function Genre({
  genre,
  color,
  withLineThrough = false,
  withLineThroughHover = false,
  withSharp = false,
  disabled = false,
  onClickGenre,
}: IGenreUI) {
  return (
    <button
      type="button"
      className={
        `genre__item
        genre__item--${color}
        ${withLineThrough && 'genre__item--lineThrough'}
        ${withLineThroughHover && 'genre__item--lineThrough-hover'}
        ${disabled && 'genre__item--disabled'
      }`
}
      onClick={() => { onClickGenre(genre); }}
    >
      {`${withSharp ? '#' : ''}${genre.name}`}
    </button>
  );
}

export default Genre;
