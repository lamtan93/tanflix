import { FC } from 'react';
import "../../../styles/_components/_button.scss";
import "../../../styles/_base/_utility.scss";
import { IButton } from './interfaces/IButton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button: FC<IButton> = ({
    animated,
    color,
    name,
    size,
    loading = false,
    disabled = false,
    onClick
}) => {
    return (
        <Link className={
            `btn ${animated && 'btn--animated'}
            ${loading && 'btn--loading'}
            ${disabled && 'btn--disabled'}
            btn--${color}
            btn--${size}`
        } 
            to="/movies"
            onClick={onClick}
        >
                {name}
        </Link>
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