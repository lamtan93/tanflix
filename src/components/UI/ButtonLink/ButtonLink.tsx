import React from 'react'
import '../../../styles/_components/_button.scss'
import '../../../styles/_base/_utility.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { IButtonLink } from './interfaces/IButtonLink'
import APPLICATION_PATHS from '../../../utils/paths'

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
  const buttonLinkClassNames = classNames(
    'btn',
    `btn--${color}`,
    `btn--${size}`,
    {
      'btn--animated': animated,
      'btn--loading': loading,
      'btn--disabled': disabled,
    }
  )

  return (
    <Link
      className={buttonLinkClassNames}
      aria-label="anchor-button"
      role="button"
      to={href}
      onClick={onClick}
    >
      {name}
    </Link>
  )
}

export default ButtonLink
