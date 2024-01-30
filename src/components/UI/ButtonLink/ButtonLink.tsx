import React from 'react';
import '../../../styles/_components/_button.scss';
import '../../../styles/_base/_utility.scss';
import { Link } from 'react-router-dom';
import { IButtonLink } from './interfaces/IButtonLink';
import APPLICATION_PATHS from '../../../utils/paths';

function ButtonLink({
  animated,
  color,
  name,
  size,
  loading = false,
  disabled = false,
  href = APPLICATION_PATHS.HOME,
  onClick,
}: IButtonLink) {
  return (
    <Link
      className={
        `btn ${animated && 'btn--animated'}
        ${loading && 'btn--loading'}
        ${disabled && 'btn--disabled'}
        btn--${color}
        btn--${size}`
      }
      aria-label="anchor-button"
      role="button"
      to={href}
      onClick={onClick}
    >
      {name}
    </Link>
  );
}

export default ButtonLink;
