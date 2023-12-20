import { FC, useState } from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import "../../styles/_components/_trending.scss";
import "../../styles/_components/_button.scss";
import "../../styles/_base/_utility.scss";
import { IMovieList } from './interfaces/IMovieList';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const MovieList: FC<IMovieList> = ({movieList, onChange = () => {}}) => {
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
            <div className='trending-section__header'>
                <Title name='Others movie' position='left'/>
                <input 
                    className="trending-section__search" 
                    type='text' 
                    placeholder="search your movie"
                    onChange={(e) => onChange(e)}>
                </input>
            </div>
            
            <div id="movie-section" className="trending-section__movies">
                {initialsMovies.length === 0 ? (
                    <Title name='sorry, aucun movie à afficher :(' position='center'/>
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
                {!isCompleted && initialsMovies.length > 0 && (
                    <Button title='loadmore' color='orange' animated={true} onClick={loadMore} ></Button>
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