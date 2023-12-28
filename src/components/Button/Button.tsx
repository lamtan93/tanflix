import { FC } from 'react';
import "../../styles/_components/_button.scss";
import "../../styles/_base/_utility.scss";
import { IButton } from './interfaces/IButton';
import PropTypes from 'prop-types';

const Button: FC<IButton> = ({
    animated,
    color,
    title,
    size,
    loading = false,
    onClick
}) => {
    return (
        <a className={
            `btn ${animated ? 'btn--animated' : null}
            ${loading ? 'btn--loading' : null}
            btn--${color}
            btn--${size}`
        } 
            href="/movies"
            onClick={onClick}
        >
                {title}
        </a>
    )
}


export default Button;

Button.propTypes = {
    animated: PropTypes.bool.isRequired,
    color: PropTypes.oneOf([
        "white",
        "orange"
    ]as const).isRequired
}