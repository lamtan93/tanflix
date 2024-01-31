import React from 'react'
import '../../../styles/_components/_brand.scss'
import classNames from 'classnames'
import { IBrand } from './interfaces/IBrand'
import APPLICATION_PATHS from '../../../utils/paths'

function Brand({ size }: IBrand) {
  const brandClassNames = classNames('brand', `brand--${size}`)
  return (
    <a className={brandClassNames} href={APPLICATION_PATHS.HOME}>
      <span>T</span>
      <span>A</span>
      <span>N</span>
      <span>F</span>
      <span>L</span>
      <span>I</span>
      <span>X</span>
    </a>
  )
}

export default Brand
