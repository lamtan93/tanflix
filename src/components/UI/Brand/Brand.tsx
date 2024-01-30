import React from 'react'
import '../../../styles/_components/_brand.scss'
import { IBrand } from './interfaces/IBrand'
import APPLICATION_PATHS from '../../../utils/paths'

function Brand({ size }: IBrand) {
  return (
    <a className={`brand brand--${size}`} href={APPLICATION_PATHS.HOME}>
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
