import { FC } from "react";
import actor1 from "../assets/images/actor-1.jpeg";
import "../styles/_components/_actor.scss";

interface IActor {
    name: string,
}

const Actor: FC<IActor> = ({name}) => {
    return (
        <div className="actor">
            <figure className="actor__shape">
                    <img className="actor__image" src={actor1} alt="actor-1"/>
                    <figcaption className="actor__caption">{name}</figcaption>
            </figure>
        </div> 
    )
}

export default Actor;