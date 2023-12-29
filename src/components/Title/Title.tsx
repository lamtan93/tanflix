import { FC } from 'react';
import "../../styles/_base/_utility.scss";
import "../../styles/_base/_typography.scss";
import { ITitle } from './interfaces/ITitle';
import PropTypes from 'prop-types';

const Title: FC<ITitle> = ({name, position, size}) => {
    return (
        <h1 className={`title title--${size} u__mb--medium u__center-text--${position}`}>{name}</h1>
    )
}

export default Title;

Title.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.oneOf([
        "center",
        "left",
        "right"
    ]as const).isRequired
}