import { FC } from 'react';
import { IPreviewVideo } from './IPreviewVideo';

const PreviewVideo: FC<IPreviewVideo> = ({
    title ,
    src,
    width,
    height
}) => {
    return (
    <iframe 
        width={width} 
        height={height} 
        src={src}
        title={title}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
    </iframe>
    )
}

export default PreviewVideo;