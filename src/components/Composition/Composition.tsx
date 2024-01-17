import { FC } from 'react';
import '../../styles/_components/_composition.scss';
import { IComposition } from './interfaces/IComposition';

const Composition:FC<IComposition> = ({
    listSourceVideos,
}) => {
    return(
        <div className='composition'>
            {listSourceVideos.map((srcVideo, i) => (
                <div
                    key={`compositionItem-${i}`} 
                    className={`composition__item composition__item--${i + 1}`}>
                <video  
                    preload='metadata'
                    muted
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                >
                    <source 
                        src={`${srcVideo}#t=1`} 
                        type='video/mp4' 
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            ))}
        </div>

    )
}

export default Composition;