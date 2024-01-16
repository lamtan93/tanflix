import { FC } from 'react';
import { IPopup } from './IPopup';
import ButtonLink from '../ButtonLink/ButtonLink';
import "../../../styles/_components/_popup.scss";


const Popup: FC<IPopup> = ({name, children, open, close}) => {
    return (
            <div className={`popup popup${open ? '--open' : '--close'}`}>
                <div className='popup__header'>
                    <h4 className='popup__title'>{name}</h4>
                    <ButtonLink 
                        name='close' 
                        color='white' 
                        animated={false} 
                        size='extra-small'
                        onClick={(e) => close(e)}    
                    />
                </div>
                <div className='popup__content'>
                    {children}
                </div>
                <div className='popup__footer'></div>
            </div>
    )
}

export default Popup;