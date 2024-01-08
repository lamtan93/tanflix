import { FC } from 'react';
import "../../styles/_components/_review.scss";
import Title from '../Title/Title';
import videoAvisClient from '../../assets/video/avisclient.mp4';
import Actor from '../Actor/Actor';
import Button from '../Button/Button';
import Star from '../Star/Star';
import { IReviewerList } from './interfaces/IReviewer';

const Reviewer: FC<IReviewerList> = ({
    reviewerList,
}) => {
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
                {reviewerList.map(r => 
                    <div 
                        key={r.reviewerId}
                        className='review__item'
                    >
                        <Actor name={r.reviewerName} imgSrc={r.reviewerImg} />
                        <p className='review__paragraph'>{r.reviewerMessage}</p>
                        {[1,2,3,4,5].map((m, i) => (
                            <span 
                                key={`star-${m}`}
                                className={`review__star review__star--${m}`}>
                                <Star 
                                    id={1} 
                                    isLiked={i <= r.reviewerStars} 
                                    onClick={() => {}}/>
                            </span>
                        ))}
                </div>    
                )}
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

export default Reviewer;