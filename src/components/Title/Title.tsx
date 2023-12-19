import { FC } from 'react';
import "../../styles/_base/_utility.scss";
import "../../styles/_base/_typography.scss";
import { ITitle } from './interfaces/ITitle';

const Title: FC<ITitle> = ({name, position}) => {
    return (
        <h1 className={`title u__mb--medium u__center-text--${position}`}>{name}</h1>
    )
}

export default Title;