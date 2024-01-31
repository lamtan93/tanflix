import React from 'react'
import '../../../styles/_base/_utility.scss'
import '../../../styles/_base/_typography.scss'
import classNames from 'classnames'
import { ITitle } from './interfaces/ITitle'

function Title({ name, position, size, hover = true }: ITitle) {
  const titleClassNames = classNames(
    'title',
    'u__mb--medium',
    `u__center-text--${position}`,
    `title--${size}`,
    `title--${size}`,
    {
      'title--hover': hover,
    }
  )
  return <h1 className={titleClassNames}>{name}</h1>
}

export default Title
