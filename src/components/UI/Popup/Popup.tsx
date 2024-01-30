import React from 'react'
import { IPopup } from './IPopup'
import ButtonLink from '../ButtonLink/ButtonLink'
import '../../../styles/_components/_popup.scss'

function Popup({ name, children, open, close }: IPopup) {
  return (
    <div className={`popup popup${open ? '--open' : '--close'}`}>
      <div className="popup__header">
        <h4 className="popup__title">{name}</h4>
        <ButtonLink
          name="close"
          color="white"
          animated={false}
          size="extra-small"
          onClick={(e) => close(e)}
        />
      </div>
      <div className="popup__content">{children}</div>
      <div className="popup__footer" />
    </div>
  )
}

export default Popup
