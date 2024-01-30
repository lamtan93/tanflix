import React from 'react';
import '../../../styles/_components/_actor.scss';
import { IActor } from './interfaces/IActor';

function Actor({ name, imgSrc }: IActor) {
  return (
    <div className="actor">
      <figure className="actor__shape">
        <img
          className="actor__image"
          src={imgSrc}
          alt={`actor-${name}`}
        />
        <figcaption className="actor__caption">{name}</figcaption>
      </figure>
    </div>
  );
}

export default Actor;
