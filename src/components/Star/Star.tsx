import { FC } from 'react';
import "../../styles/_components/_star.scss";
import { IStar } from './interfaces/IStar';

const Star: FC<IStar> = ({isLiked}) => {
    return (
        <div className={`star star--${isLiked ? 'liked' : 'disliked'}`}></div>
    )
}

export default Star;