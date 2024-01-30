import React from 'react'
import '../../../styles/_base/_utility.scss'
import '../../../styles/_base/_typography.scss'
import { ITitle } from './interfaces/ITitle'

function Title({ name, position, size, hover = true }: ITitle) {
  return (
    <h1
      className={`title title--${size} 
            title--${hover && 'hover'}
            u__mb--medium 
            u__center-text--${position}`}
    >
      {name}
    </h1>
  )
}

export default Title
