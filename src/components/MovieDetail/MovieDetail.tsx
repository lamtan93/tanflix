import { FC } from 'react';
import Button from '../Button/Button';
import "../../styles/_components/_movieDetail.scss";
import Actor from '../Actor/Actor';
import { IMovieDetail } from './interfaces/IMovieDetail';
// import { useParams } from 'react-router-dom';

const MovieDetail: FC<IMovieDetail> = ({id}) => {
    return (
        <section className="detailmovie-section">
            <div className="detailmovie">
                <div className="detailmovie__preview">
                </div>
                <div className="detailmovie__content">
                    <div className="detailmovie__name">
                        <h1>Many lives many times</h1>
                        <span className="detailmovie__tag">#Fiction</span>
                    </div>
                    <div className="detailmovie__description">
                        <p className="detailmovie__resume">Thank god, you are my best friend forever, sometimes you feel good
                            sometimes you feel bad...
                            Thank god, you are my best friend forever, sometimes you feel good
                            sometimes you feel bad...
                        </p>

                        <div className="detailmovie__actors">
                            <Actor name='Jack Wilson'/>
                            <Actor name='Corgi Jaune'/>
                            <Actor name='Jackie Chan'/>
                        </div>

                        <span className="detailmovie__country">Country: France</span>
                        <span className="detailmovie__imdb">IMDb: 7.2</span>
                        <span className="detailmovie__autor">Auteur: Jackie Chan</span>
                        <span className="detailmovie__imdb">Date: 25/01/2023</span>
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