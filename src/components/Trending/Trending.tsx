import { FC } from 'react';
import Title from '../Title/Title';
import "../../styles/_components/_trending.scss";
import Card from '../Card/Card';
import { IMovieList } from '../MovieList/interfaces/IMovieList';
import PropTypes from 'prop-types';

const Trending: FC<IMovieList> = ({movieList}) => {
    return (
        <section className="trending-section">
            <Title name='Trending movies' position='right' size='med'/>
            <div className="trending-section__movies">
                    {movieList.map(movie => 
                        <Card
                            type='trending'
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            description={movie.description}
                            imgSrc={movie.imgSrc}
                            liked={movie.liked}
                        />
                    )}
            </div>
        </section>
    )
}

export default Trending;

Trending.propTypes = {
    movieList: PropTypes.array.isRequired,
}