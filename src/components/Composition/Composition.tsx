import { FC } from 'react';
import '../../styles/_components/_composition.scss';
import { IComposition } from './interfaces/IComposition';

const Composition:FC<IComposition> = ({
    listSourceVideos,
}) => {
    return(
        <div className='composition '>
            {listSourceVideos.map((srcVideo, i) => (
                <div className={`composition__item composition__item--${i + 1}`}>
                <video  
                    autoPlay  
                    loop 
                    muted 
                    playsInline
                    >
                    <source 
                        src={srcVideo} 
                        type='video/mp4' 
                    />
                </video>
            </div>
            ))}
        </div>

    )
}

export default Composition;