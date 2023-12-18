import React, { FC } from 'react';
import Star from './Star';
import trending2 from "../assets/images/trending-2.jpeg"; 

interface ICard {
    type: "trending" | "others",
    name: string,
    description: string,
    categorie: string
}

const Card: FC<ICard> = ({type, name, description, categorie}) => {
    return (
    <div className={`card card--${type}`}>
        <div className="card__image">
            <Star />
            <img src={trending2} alt="trending-2" />
        </div>
        <div className="card__infos">
            <span className="card__name">{name}</span>
            <p className="card__description">{description}</p>
            <span className="card__caterogie">#{categorie}</span>
        </div>
    </div>
    )
}

export default Card;