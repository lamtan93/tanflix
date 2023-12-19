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
                    id={1}
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    imgSrc=''
                    liked={false}
                    // categorie='Fiction'
                />
              
                <Card 
                    type='trending' 
                    id={2}
                    name='Squid game the challenge'
                    description='Sometimes you feel good, sometime you feel not...'
                    imgSrc=''
                    liked={false}
                    // categorie='Action'
                />

                <Card 
                    id={3}
                    type='trending' 
                    name='My best friend'
                    description='Sometimes you feel good, sometime you feel not...'
                    imgSrc=''
                    liked={false}
                    // categorie='Fiction'
                />
            </div>
        </section>
    )
}

export default Trending;