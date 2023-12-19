import React, { FC } from 'react';
import Star from '../Star/Star'; 
import "../../styles/_components/_card.scss";
import { ICard } from './interfaces/ICard';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { CONFIG_API } from '../../utils/utils';

const Card: FC<ICard> = ({type, id, name, description, imgSrc, liked}) => {
    const navigate = useNavigate();
    const handleOnClick = (id: number) => {
        navigate(`/movie-detail/${id}`);
    }

    const { updateLikeMovieList } = useActions();
    const handleOnClickStar = (id: number) => {
        updateLikeMovieList(id);
    }

    return (
    <div className={`card card--${type}`} >
        <div className="card__image">
            <Star id={id} isLiked={liked ? liked : false} onClick={handleOnClickStar} />
            <img src={`${CONFIG_API.BASE_IMAGE_URL}/${imgSrc}`} alt={`img-${name}`} />
        </div>
        <div className="card__infos" onClick={() => handleOnClick(id)} style={{cursor: 'pointer'}}>
            <span className="card__name" > {name} </span>
            <p className="card__description">{description}</p>
        </div>
    </div>
    )
}

export default Card;