import { FC } from 'react';
import { IPopup } from './IPopup';
import "../../styles/_components/_popup.scss";
import Button from '../Button/Button';

const Popup: FC<IPopup> = ({title, children, open, close}) => {
    return (
            <div className={`popup popup${open ? '--open' : '--close'}`}>
                <div className='popup__header'>
                    <h4 className='popup__title'>{title}</h4>
                    <Button 
                        title='close' 
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