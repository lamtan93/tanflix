import { FC } from 'react';
import { useLoadMore } from '../../hooks/useLoadMore';
import { Title, Actor, Button, Star } from '../UI';
import { IReviewer } from './interfaces/IReviewer';
import { scrollVertical } from '../../utils/utils';
import "../../styles/_components/_review.scss";
import videoAvisClient from '../../assets/video/avisclient.mp4';

const Reviewer: FC<IReviewer> = ({
    title,
    withVideoBackground=false,
    reviewerList,
}) => {
    const {
        listDataFinal,
        loadMore,
        isDisabledLoadMore,
    } = useLoadMore(reviewerList);

    return (
        <section className='review'>
            {withVideoBackground && (
                <div className="review__bgvideo">
                <video className="review__bgvideo__content" autoPlay loop muted playsInline>
                    <source 
                    src={videoAvisClient} 
                    type='video/mp4' />
                </video>
            </div>
            )}
            
            <Title
                    name={title}
                    size='big'
                    position='right'
            />
            <div 
                id="review__content" 
                className='review__content' 
                onWheel={(e) => scrollVertical(e,'review__content')}
            >
                {listDataFinal.map(r => 
                    <div 
                        key={r.id}
                        className='review__item'
                    >
                        <Actor name={r.name} imgSrc={r.img} />
                        <p className='review__paragraph'>
                            {r.message}
                            
                        </p>
                        
                        {[1,2,3,4,5].map((m, i) => (
                            <span 
                                key={`star-${m}`}
                                className={`review__star review__star--${m}`}>
                                <Star 
                                    id={1} 
                                    isLiked={i <= r.stars} 
                                    onClick={() => {}}/>
                            </span>
                        ))}
                        <span className='review__date' >{r.date}</span>
                    </div>    
                )}
            </div>     
            <Button 
                title='more' 
                size='small' 
                animated={true} 
                color='white'
                onClick={loadMore}
                disabled={isDisabledLoadMore}
            />
         </section>
    )
}

export default Reviewer;