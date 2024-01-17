import React, { FC } from 'react';
import Star from '../Star/Star'; 
import "../../../styles/_components/_card.scss";
import { ICard } from './interfaces/ICard';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { CONFIG_API } from '../../../utils/api';
import PropTypes from 'prop-types';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const Card: FC<ICard> = ({type, id, name, description, imgSrc, liked}) => {
    const navigate = useNavigate();
    const { updateLikeMovieList } = useActions();

    const handleOnClick = (id: number) => {
        navigate(`/movies/detail/${id}`);
    }

    const handleOnClickStar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
        e.stopPropagation();
        updateLikeMovieList(id);
    }
    useScrollAnimation('card');

    return (
    <div className={`card card--${type} ${type === 'others' && 'scroll--hidden-card'}`} onClick={() => handleOnClick(id)} style={{cursor: 'pointer'}}>
        <div className={`card__image card__image--${type}`}>
            <Star id={id} isLiked={liked ? liked : false} onClick={(e) => handleOnClickStar(e,id)} />
            <img src={`${CONFIG_API.BASE_IMAGE_URL}/${imgSrc}`} alt={`img-${name}`} />
        </div>
        <div className="card__infos">
            <span className="card__name" > {name} </span>
            <p className="card__description">{description}</p>
        </div>
    </div>
    )
}

export default Card;

Card.propTypes = {
    type: PropTypes.oneOf([
        "trending",
        "others"
    ]),
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
}