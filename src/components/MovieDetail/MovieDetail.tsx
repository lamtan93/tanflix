import { FC } from 'react';
import Button from '../Button/Button';
import "../../styles/_components/_movieDetail.scss";
import Actor from '../Actor/Actor';
import { IMovieDetail } from './interfaces/IMovieDetail';
import { CONFIG_API } from "../../utils/utils";
import PropTypes from 'prop-types';

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
    return (
        <section id='movie-detail-section' className="detailmovie-section">
            <div className="detailmovie">
                <div className="detailmovie__content">
                    <div className="detailmovie__preview">
                        <img src={`${CONFIG_API.BASE_IMAGE_URL}/${imgSrc}`} alt={`img-${name}`} />
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
                            {companies.map(company => (
                                <Actor key={company.name} name={company.name} imgSrc={company.logo_path}/>
                            ))}
                        </div>

                        <span className="detailmovie__country">Country: {
                            countries.map(country => `${country.name} `)
                        } </span>
                        <span className="detailmovie__imdb">Popularity: {popularity} </span>
                        <span className="detailmovie__autor">Auteur: Jackie Chan</span>
                        <span className="detailmovie__imdb">Date: {date}</span>
                    </div>
                    <div className="detailmovie__play">
                        <Button title='Regarder le film' animated={true} color='orange' />
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
    popularity: PropTypes.string.isRequired,
}