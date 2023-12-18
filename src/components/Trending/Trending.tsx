import { FC } from 'react';
import Title from '../Title/Title';
import "../../styles/_components/_trending.scss";
import Card from '../Card/Card';

const Trending: FC = () => {
    return (
        <section className="trending-section">
            <Title name='Trending movies' position='right'/>
            <div className="trending-section__movies">
                <Card 
                    type='trending' 
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />
              
                <Card 
                    type='trending' 
                    name='Squid game the challenge'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Action'
                />

                <Card 
                    type='trending' 
                    name='My best friend'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />
            </div>
        </section>
    )
}

export default Trending;