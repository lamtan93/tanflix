import { FC } from 'react';
import { Title, Card } from '../UI';
import { IMovieList } from '../MovieList/interfaces/IMovieList';
import "../../styles/_layouts/_moviesContainer.scss";
import PropTypes from 'prop-types';
import { Dico } from '../../utils/dico';

const Trending: FC<IMovieList> = ({movieList}) => {
    return (
        <section className="movies-section">
            <Title name={Dico.SECTION_MOVIES_LIST.TRENDING.TITLE_TRENDING} position='right' size='big'/>
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