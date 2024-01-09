import { FC } from 'react';
import "../../styles/_components/_star.scss";
import { IStar } from './interfaces/IStar';
import PropTypes from 'prop-types';

const Star: FC<IStar> = ({id, isLiked, onClick}) => {
    return (
        <div 
            className={`star star--${isLiked ? 'liked' : 'disliked'}`}
            onClick={(e) => onClick(e, id)}
        >
        </div>
    )
}

export default Star;

Star.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
}