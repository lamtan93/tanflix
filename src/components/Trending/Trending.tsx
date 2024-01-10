import { FC } from 'react';
import Title from '../Title/Title';
import "../../styles/_layouts/_moviesContainer.scss";
import Card from '../Card/Card';
import { IMovieList } from '../MovieList/interfaces/IMovieList';
import PropTypes from 'prop-types';

const Trending: FC<IMovieList> = ({movieList}) => {
    return (
        <section className="movies-section">
            <Title name='Trending' position='right' size='big'/>
            <div className="movies-section__content">
                <div className="movies-section__moviesList movies-section__moviesList--trending">
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
            </div>
        </section>
    )
}

export default Trending;

Trending.propTypes = {
    movieList: PropTypes.array.isRequired,
}