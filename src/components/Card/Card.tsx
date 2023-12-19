import React, { FC } from 'react';
import Star from '../Star/Star'; 
import "../../styles/_components/_card.scss";
import { ICard } from './interfaces/ICard';
import { useNavigate } from 'react-router-dom';

const Card: FC<ICard> = ({type, id, name, description, imgSrc}) => {
    const navigate = useNavigate();

    //useNavigate - ne perd pas le state dans store
    const handleOnClick = (id: number) => {
        navigate(`/movie-detail/${id}`);
    }

    return (
    <div className={`card card--${type}`} onClick={() => handleOnClick(id)} style={{cursor: 'pointer'}}>
        <div className="card__image">
            <Star isLiked={false} />
            <img src={`https://image.tmdb.org/t/p/w500/${imgSrc}`} alt="trending-2" />
        </div>
        <div className="card__infos">
            <span className="card__name" > {name} </span>
            <p className="card__description">{description}</p>
            {/* <span className="card__caterogie">#{categorie}</span> */}
        </div>
    </div>
    )
}

export default Card;