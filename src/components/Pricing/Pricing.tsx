import { FC } from 'react';
import { Title, Button } from '../UI';
import '../../styles/_components/_pricing.scss';

const Pricing:FC = () => {
    return (
        <section className='pricing'>
            <Title name='Pricing' position='left' size='big'/>
            <div className='pricing__container'>
                <div className='pricing__box'>
                    <div className='pricing__item pricing__item--front'>
                        <div className='pricing__header pricing__header--1'>
                            <div className='pricing__title'>
                                <Title name='SOLO' position='right' size='med'/>
                            </div>
                        </div>
                        <div className='pricing__body'>
                            <span>Only 1 screen</span>
                            <span>Only mobile device</span>
                            <span>Download not allowed</span>
                            <span>Support by email</span>
                        </div>
                    </div>
                    <div className='pricing__item pricing__item--back'>
                        <div className='pricing__register'>
                            <span>Only</span>
                            <span>9.99$/month</span>
                            <Button name='Join now' color='white' size='med' animated={true} />
                        </div>
                    </div>
                </div>

                <div className='pricing__box'>
                    <div className='pricing__item pricing__item--front'>
                        <div className='pricing__header pricing__header--2'>
                            <div className='pricing__message'>
                                <p>The price displayed for this best offer is guaranteed only until 02/03/2024 &nbsp;</p>
                            </div>
                            <div className='pricing__title'>
                                <Title name='FAMILY' position='right' size='med'/>
                            </div>
                        </div>
                        <div className='pricing__body'>
                            <span>Up to 5 screens</span>
                            <span>Mobile and tablet</span>
                            <span>Download 3 movies/week</span>
                            <span>Support by mail/tel</span>
                        </div>
                    </div>
                    <div className='pricing__item pricing__item--back'>
                        <div className='pricing__register'>
                            <span>Only</span>
                            <span>19.99$/month</span>
                            <Button name='Join now' color='white' size='med' animated={true} />
                        </div>
                    </div>
                </div>

                <div className='pricing__box'>
                    <div className='pricing__item pricing__item--front'>
                        <div className='pricing__header pricing__header--3'>
                            <div className='pricing__title'>
                                <Title name='GROUP' position='right' size='med'/>
                            </div>
                        </div>
                        <div className='pricing__body'>
                            <span>20 screens</span>
                            <span>All devices</span>
                            <span>Download not limited</span>
                            <span>Support mail/sms/tel - 24/7</span>
                        </div>
                    </div>
                    <div className='pricing__item pricing__item--back'>
                        <div className='pricing__register'>
                            <span>Only</span>
                            <span>29.99$/month</span>
                            <Button name='Join now' color='white' size='med' animated={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;