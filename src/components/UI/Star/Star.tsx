import React from 'react';
import '../../../styles/_components/_star.scss';
import { IStar } from './interfaces/IStar';

function Star({ id, isLiked, onClick }: IStar) {
  return (
    <button
      type="button"
      aria-label="favoris-button"
      className={`star star--${isLiked ? 'liked' : 'disliked'}`}
      onClick={(e) => onClick(e, id)}
    />
  );
}

export default Star;
