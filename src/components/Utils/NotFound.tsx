import React from 'react'
import { Title } from '../UI'
import '../../styles/_base/_utility.scss'
import Dico from '../../utils/dico'

function NotFound() {
  return (
    <div className="u__mt--med">
      <Title
        name={Dico.DISCLAIMER.NOT_FOUND_MSG}
        position="center"
        size="med"
      />
    </div>
  )
}

export default NotFound
