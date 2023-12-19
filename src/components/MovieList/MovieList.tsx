import { FC } from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import "../../styles/_components/_trending.scss";
import { IMovieList } from './interfaces/IMovieList';

const MovieList: FC<IMovieList> = ({movieList}) => {
    return (
        <section className="trending-section">
            <Title name='Others movie' position='left'/>
            <div className="trending-section__movies">

                {movieList.map(movie => (
                    <Card
                        type='others'
                        key={movie.id}
                        id={movie.id}
                        name={movie.name}
                        description={movie.description}
                        imgSrc={movie.imgSrc}
                    />
                ))}
            </div>
        </section>
    )
}

export default MovieList;