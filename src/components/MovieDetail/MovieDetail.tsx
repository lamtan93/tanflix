import { FC, useState } from 'react';
import Button from '../Button/Button';
import "../../styles/_components/_movieDetail.scss";
import Actor from '../Actor/Actor';
import { IMovieDetail } from './interfaces/IMovieDetail';
import { CONFIG_API, scrollToViewId, stopVideo } from "../../utils/utils";
import PropTypes from 'prop-types';
import PreviewVideo from '../Video/PreviewVideo';
import Popup from '../Popup/Popup';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Title from '../Title/Title';

const MovieDetail: FC<IMovieDetail> = ({
    id,
    name,
    description,
    genres,
    popularity,
    date,
    companies,
    countries,
    imgSrc,
}) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const { fetchMovieVideo } = useActions();
    const { movieVideosLoading, movieVideosData, movieVideosError } 
    = useTypedSelector(state => state.movieVideos);
    
    const showPopup = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if(!movieVideosData){
            fetchMovieVideo(id);
        }
        setIsOpenPopup(true);
        scrollToViewId('movie-detail-section');
    }

    const closePopup = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setIsOpenPopup(false);
        stopVideo();
    }

    return (
        <section id='movie-detail-section' className="detailmovie-section">
            <div className="detailmovie">
                <div className="detailmovie__content">
                    <div className="detailmovie__preview">
                        <img src={`${CONFIG_API.BASE_IMAGE_URL}/${imgSrc}`} alt={`img-${name}`} />
                        {movieVideosLoading && <Title name='Loading video...' position='center' />}
                        {movieVideosError && <Title name='sorry, error loading video...' position='center' />}
                        {!movieVideosLoading && !movieVideosError && movieVideosData && (
                            <Popup
                                title={name}
                                close={closePopup}
                                open={isOpenPopup}>
                                <PreviewVideo 
                                    src={`https://www.youtube.com/embed/${movieVideosData?.[0].key}`} 
                                    title={name} 
                                    width='100%' 
                                    height='100%'
                                />
                            </Popup>
                        )}
                    </div>
                    <div className="detailmovie__name">
                        <h1>{name}</h1>
                        <div>
                        {genres.map(genre => (
                            <span key={genre.id} className="detailmovie__tag">#{genre.name}</span>
                        ))}
                        </div>
                    </div>
                    <div className="detailmovie__description">
                        <p className="detailmovie__resume">{description}</p>
                        <span className="detailmovie__companies">Production companies: </span>
                        <div className="detailmovie__actors">
                            {companies.map(company => {
                                if(company.logo_path)
                                    return <Actor key={company.name} name={company.name} imgSrc={company.logo_path}/>
                                return false;
                            })}
                        </div>

                        <span className="detailmovie__country">Country: {
                            countries.map(country => `${country.name} `)
                        } </span>
                        <span className="detailmovie__imdb">Popularity: {popularity} </span>
                        <span className="detailmovie__autor">Auteur: Jackie Chan</span>
                        <span className="detailmovie__imdb">Date: {date}</span>
                    </div>
                    <div className="detailmovie__play">
                        <Button 
                            title='Watch trailer' 
                            animated={true} 
                            color='orange' 
                            size={'med'}
                            onClick={(e) => showPopup(e)}
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default MovieDetail;

MovieDetail.propTypes = {
    type: PropTypes.oneOf([
        "trending",
        "others"
    ]),
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
}