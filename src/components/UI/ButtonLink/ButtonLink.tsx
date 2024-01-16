import { FC } from 'react';
import "../../../styles/_components/_button.scss";
import "../../../styles/_base/_utility.scss";
import { IButtonLink } from './interfaces/IButtonLink';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { APPLICATION_PATHS } from '../../../utils/paths';

const ButtonLink: FC<IButtonLink> = ({
    animated,
    color,
    name,
    size,
    loading = false,
    disabled = false,
    href = APPLICATION_PATHS.HOME,
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
            to={href}
            onClick={onClick}
        >
                {name}
        </Link>
    )
}


export default ButtonLink;

ButtonLink.propTypes = {
    animated: PropTypes.bool.isRequired,
    color: PropTypes.oneOf([
        "white",
        "orange"
    ]as const).isRequired
}