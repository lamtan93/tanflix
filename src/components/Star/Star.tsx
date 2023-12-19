import { FC } from 'react';
import "../../styles/_components/_star.scss";
import { IStar } from './interfaces/IStar';

const Star: FC<IStar> = ({id, isLiked, onClick}) => {
    return (
        <div 
            className={`star star--${isLiked ? 'liked' : 'disliked'}`}
            onClick={() => onClick(id)}
        >
        </div>
    )
}

export default Star;