import React, { FC } from "react";
import "../../styles/_components/_actor.scss";
import { IActor } from "./interfaces/IActor";
import { CONFIG_API } from "../../utils/utils";
import PropTypes from 'prop-types';

const Actor: FC<IActor> = ({name, imgSrc}) => {
    return (
        <div className="actor">
            <figure className="actor__shape">
                    <img className="actor__image" src={`${CONFIG_API.BASE_IMAGE_URL}/${imgSrc}`} alt={`actor-${name}`}/>
                    <figcaption className="actor__caption">{name}</figcaption>
            </figure>
        </div> 
    )
}

export default Actor;

Actor.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
}