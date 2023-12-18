import { FC } from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import "../../styles/_components/_trending.scss";
// import { IMovieList } from './interfaces/IMovieList';

const MovieList: FC = () => {
    return (
        <section className="trending-section">
            <Title name='Others movie' position='left'/>
            <div className="trending-section__movies">
                <Card 
                    type='trending'
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />

                <Card 
                    type='trending' 
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />

                <Card 
                    type='trending' 
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />


                <Card 
                    type='trending' 
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />

                <Card 
                    type='trending' 
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />

                <Card 
                    type='trending' 
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />

                <Card 
                    type='trending' 
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />

                <Card 
                    type='trending' 
                    name='Many Lives Many Times'
                    description='Sometimes you feel good, sometime you feel not...'
                    categorie='Fiction'
                />
            </div>
        </section>
    )
}

export default MovieList;