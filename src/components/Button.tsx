import { FC } from 'react';
import "../styles/_components/_button.scss";
import "../styles/_base/_utility.scss";

interface IButton {
    animated: boolean,
    color: 'white' | 'orange',
    title: string
}

const Button: FC<IButton> = ({animated, color, title}) => {
    return (
        <a className={`btn-seemovies ${animated ? 'btn-seemovies--animated' : null} btn-seemovies--${color} u__mt--big`} 
            href="/movies">
                {title}
        </a>
    )
}


export default Button;