import { FC } from 'react';
import "../../styles/_components/_review.scss";
import Title from '../Title/Title';
import videoAvisClient from '../../assets/video/avisclient.mp4';
import Actor from '../Actor/Actor';
import actor1 from '../../assets/images/actor-1.jpeg';
import actor2 from '../../assets/images/actor-2.jpeg';
import actor3 from '../../assets/images/actor-3.jpeg';
import Button from '../Button/Button';

const Review: FC = () => {
    return (
        <section className='review'>
            <div className="review__bgvideo">
                <video className="review__bgvideo__content" autoPlay loop muted playsInline>
                    <source src={videoAvisClient} type='video/mp4' />
                </video>
            </div>
            <Title
                    name='They talk about us'
                    size='big'
                    position='right'
            />
            <div className='review__content'>
                <div className='review__item'>
                    <Actor name='Victor' imgSrc={actor1} isImgSrcLocal/>
                    <p className='review__paragraph'>J’aime beaucoup l’application Netflix qui propose beaucoup de choix en therme de séries/films/animés..</p>
                </div>
                <div className='review__item'>
                    <Actor name='Hugo' imgSrc={actor2} isImgSrcLocal/>
                    <p className='review__paragraph'>L’application Netflix est une bonne application. On y retrouve des produits variés pour tous les goûts.</p>
                </div>
                <div className='review__item'>
                    <Actor name='David' imgSrc={actor1} isImgSrcLocal/>
                    <p className='review__paragraph'>L'application est rodée, efficace et rapide . 4 étoiles pour la technique.</p>
                </div>
                <div className='review__item'>
                    <Actor name='Corgi' imgSrc={actor3} isImgSrcLocal/>
                    <p className='review__paragraph'>Application au top, l'expérience est fluide, logique et super bien pensée.</p>
                </div>
                <div className='review__item'>
                    <Actor name='Tan' imgSrc={actor2} isImgSrcLocal/>
                    <p className='review__paragraph'>J'ai un abonnement netflix pour 4 personnes et toute la fimille en profite. Vaut vraiment le coup.</p>
                </div>
                <div className='review__item'>
                    <Actor name='Corgi' imgSrc={actor3} isImgSrcLocal/>
                    <p className='review__paragraph'>Beaucoup de choix, cette application est rapide et plusieurs langues sont accessibles. En revanche, je ne comprends pas pourquoi certaines séries ne sont pas complètes.</p>
                </div>
                
            </div>
            <Button 
                title='more' 
                size='small' 
                animated={true} 
                color='white'
            />
         </section>
    )
}

export default Review;