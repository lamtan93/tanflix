import { FC } from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import "../../styles/_layouts/_moviesContainer.scss";
import "../../styles/_components/_button.scss";
import "../../styles/_base/_utility.scss";
import { IMovieList } from './interfaces/IMovieList';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useLoadMore } from '../../hooks/useLoadMore';

const MovieList: FC<IMovieList> = ({
    categoryLabel,
    movieList,
    onChange = () => {},
    searchValue,
}) => {
    const {
        listDataFinal,
        loadMore,
        isLoadMoreCompleted,
    } = useLoadMore(movieList) || {};

    return (
        <section className="movies-section">
            <div className='movies-section__header'>
                <Title name={categoryLabel} position='left' size='big'/>
                <div className='movies-section__search'>
                    <input 
                        id='searchMovie'
                        className="movies-section__search-input" 
                        name='searchMovie'
                        type='text' 
                        placeholder="search your movie"
                        onChange={(e) => onChange(e)}>
                    </input>
                    <label htmlFor='searchMovie' className='movies-section__search-label'>search your movie</label>
                </div>
            </div>
            <div className="movies-section__content">
                <div className="movies-section__moviesList movies-section__moviesList--others">
                    {listDataFinal.length === 0 ? (
                        <Title name='sorry, no movies to display :(' position='center' size='small'/>
                    ): (
                        listDataFinal.map(movie => (
                            <Card
                                type='others'
                                key={movie.id}
                                id={movie.id}
                                name={movie.name}
                                description={movie.description}
                                imgSrc={movie.imgSrc}
                                liked={movie.liked}
                            />
                        ))
                    )}
                    <div className="movies-section__cta-loadmore">
                        {!isLoadMoreCompleted 
                        && listDataFinal.length > 0 
                        && !searchValue
                        && (
                            <Button 
                                title='loadmore' 
                                color='orange' 
                                animated={true} 
                                onClick={loadMore} 
                                size={'med'}
                            />
                        )}
                    </div>
                </div>
            </div>           
        </section>
    )
}

export default MovieList;

MovieList.propTypes = {
    onChange: PropTypes.func,
    movieList: PropTypes.array.isRequired,
}