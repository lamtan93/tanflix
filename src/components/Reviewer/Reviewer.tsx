import { FC, useEffect, useRef } from 'react';
import { LIMITED_NUMBER_DATA_DEFAULT, useLoadMore } from '../../hooks/useLoadMore';
import { Title, Actor, ButtonLink, Star } from '../UI';
import { IReviewer } from './interfaces/IReviewer';
import { scrollBody, scrollVertical } from '../../utils/utils';
import videoAvisClient from '../../assets/video/avisclient.mp4';
import "../../styles/_components/_review.scss";
import { Dico } from '../../utils/dico';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Reviewer: FC<IReviewer> = ({
    title,
    withVideoBackground=false,
    reviewerList,
}) => {
    useScrollAnimation('reviewer');
    const reviewerContentRef = useRef<HTMLDivElement>(null);
    const {
        listDataFinal,
        loadMore,
        isDisabledLoadMore,
        limitedNumberData,
        isLoadMoreCompleted
    } = useLoadMore(reviewerList);

    useEffect(() => {
        const reviewContent = reviewerContentRef.current;
        let timeout: ReturnType<typeof setTimeout>;
        if(!isLoadMoreCompleted && limitedNumberData && limitedNumberData !== LIMITED_NUMBER_DATA_DEFAULT){
            reviewContent?.classList.add('review__content--newReviewAdded');
            timeout = setTimeout(() => {
                reviewContent?.classList.remove('review__content--newReviewAdded');
            }, 500) 
        }
        return () => {
            timeout && clearTimeout(timeout);
        }
    }, [limitedNumberData, isLoadMoreCompleted])

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
            <div className="scroll--hidden-reviewer">
                <Title
                        name={title}
                        size='big'
                        position='right'
                />
            </div>
            <div 
                ref={reviewerContentRef}
                id="review__content" 
                className={`review__content`} 
                onWheel={(e) => scrollVertical(e,'review__content')}
                onMouseOver={() => scrollBody(false)}
                onMouseLeave={() => scrollBody(true)}
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
            <ButtonLink 
                name={Dico.SECTION_REVIEWER.BUTTONLINK_MORE}
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