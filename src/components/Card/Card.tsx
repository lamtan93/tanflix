import React, { FC } from 'react';
import Star from '../Star/Star'; 
import "../../styles/_components/_card.scss";
import trending2 from "../../assets/images/trending-2.jpeg";
import { ICard } from './interfaces/ICard';

const Card: FC<ICard> = ({type, name, description, categorie}) => {
    return (
    <div className={`card card--${type}`}>
        <a href='/movie-detail/123'>
        <div className="card__image">
            <Star isLiked={false} />
            <img src={trending2} alt="trending-2" />
        </div>
        <div className="card__infos">
            <span className="card__name" > {name} </span>
            <p className="card__description">{description}</p>
            <span className="card__caterogie">#{categorie}</span>
        </div>
        </a>
    </div>
    )
}

export default Card;