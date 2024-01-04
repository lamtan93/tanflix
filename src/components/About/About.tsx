import { FC, useEffect } from 'react';
import '../../styles/_components/_about.scss';
import Title from '../Title/Title';
import Composition from '../Composition/Composition';
import { scrollAnimation } from '../../utils/utils';
import Button from '../Button/Button';

const About:FC = () => {
    useEffect(() => {
        scrollAnimation();
    }, [])
    return(
        <section className='about'>
            <div className='about__title'>
                <Title name='Our best new movies just for you' position='center' size='med' hover={true} />
            </div>
            <div className='about__content'>
                <div className='about__introduce'>
                    <h3 className='scroll--hidden'>you are going fall in love with our movies</h3>
                    <p className='scroll--hidden'>Experience love at first sight with our curated collection of must-watch films and get ready to be enchanted as you explore the magic of cinema on our site.</p>

                    <h3 className='scroll--hidden'>live adventures like you never have before</h3>
                    <p className='scroll--hidden'>Indulge in a world of unforgettable stories and breathtaking visuals at our movie paradise.</p>
                    <Button title='learn more' color='orange' animated={false} size='small'/>
                </div>
                <div className='about__composition'>
                    <Composition />
                </div>
                
            </div>
        </section>
    )
}

export default About;