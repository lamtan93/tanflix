import { FC } from "react";
import { IGenreUI } from "./interfaces/IGenre";
import "../../../styles/_components/_genre.scss";

const Genre:FC<IGenreUI> = ({
    genre,
    color,
    withLineThrough = false,
    withLineThroughHover = false,
    withSharp = false,
    disabled = false,
    onClickGenre,
}) => {
    return(
        <span 
            className={`genre__item
                genre__item--${color}
                ${withLineThrough && 'genre__item--lineThrough'}
                ${withLineThroughHover && 'genre__item--lineThrough-hover'}
                ${disabled && 'genre__item--disabled'}
            `}
            onClick={() => {onClickGenre(genre)}}
        >
            {`${withSharp ? '#' : ''}${genre.name}`}
        </span>
    )
}

export default Genre;