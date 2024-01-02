import { FC } from 'react';
import '../../styles/_components/_about.scss';
import Title from '../Title/Title';
import Composition from '../Composition/Composition';

const About:FC = () => {
    return(
        <section className='about'>
            <div className='about__title'>
                <Title name='Our best new movies just for you' position='center' size='med' hover={true} />
            </div>
            <div className='about__content'>
                <div className='about__introduce'>
                    <h3>you are going fall in love with our movies</h3>
                    <p>Experience love at first sight with our curated collection of must-watch films and get ready to be enchanted as you explore the magic of cinema on our site.</p>

                    <h3>live adventures like you never have before</h3>
                    <p>Indulge in a world of unforgettable stories and breathtaking visuals at our movie paradise.</p>
                </div>
                <div className='about__composition'>
                    <Composition />
                </div>
            </div>
        </section>
    )
}

export default About;