import React from 'react'
import classNames from 'classnames'
import { IPopup } from './IPopup'
import ButtonLink from '../ButtonLink/ButtonLink'
import '../../../styles/_components/_popup.scss'

function Popup({ name, children, open, close }: IPopup) {
  const popupClassNames = classNames('popup', {
    'popup--open': open,
    'popup--close': !open,
  })
  return (
    <div className={popupClassNames}>
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
