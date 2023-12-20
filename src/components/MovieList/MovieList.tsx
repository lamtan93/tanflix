import { FC } from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import "../../styles/_components/_trending.scss";
import { IMovieList } from './interfaces/IMovieList';

const MovieList: FC<IMovieList> = ({movieList, onChange = () => {}}) => {
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

                {movieList.map(movie => (
                    <Card
                        type='others'
                        key={movie.id}
                        id={movie.id}
                        name={movie.name}
                        description={movie.description}
                        imgSrc={movie.imgSrc}
                        liked={movie.liked}
                    />
                ))}
            </div>
        </section>
    )
}

export default MovieList;