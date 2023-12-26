import { FC, useState } from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import "../../styles/_components/_trending.scss";
import "../../styles/_components/_button.scss";
import "../../styles/_base/_utility.scss";
import { IMovieList } from './interfaces/IMovieList';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const MovieList: FC<IMovieList> = ({
    movieList,
    onChange = () => {},
    searchValue,
}) => {
    const [index, setIndex] = useState(4);
    const initialsMovies = movieList.slice(0 ,index);
    const [isCompleted, setIsCompleted] = useState(false);

    const loadMore = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIndex(index + 4);
        if(index >= movieList.length){
            setIsCompleted(true);
        }else {
            setIsCompleted(false);
        }
    }

    return (
        <section className="trending-section">
            <div className='trending-section__header' id="movie-section">
                <Title name='Other movies' position='left'/>
                <div className='trending-section__search'>
                    <input 
                        id='searchMovie'
                        className="trending-section__search-input" 
                        name='searchMovie'
                        type='text' 
                        placeholder="search your movie"
                        onChange={(e) => onChange(e)}>
                    </input>
                    <label htmlFor='searchMovie' className='trending-section__search-label'>search your movie</label>
                </div>
            </div>
            
            <div className="trending-section__movies">
                {initialsMovies.length === 0 ? (
                    <Title name='sorry, no movies to display :(' position='center'/>
                ): (
                    initialsMovies.map(movie => (
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
                {!isCompleted 
                && initialsMovies.length > 0 
                && !searchValue
                && (
                    <Button 
                        title='loadmore' 
                        color='orange' 
                        animated={true} onClick={loadMore} 
                        size={'med'}
                    />
                )}
            </div>
            
        </section>
    )
}

export default MovieList;

MovieList.propTypes = {
    onChange: PropTypes.func,
    movieList: PropTypes.array.isRequired,
}