import React from 'react';
import '../../styles/_components/_composition.scss';
import { IComposition } from './interfaces/IComposition';
import { playOrPauseVideoById } from '../../utils/utils';

function Composition({
  listSourceVideos,
}: IComposition) {
  return (
    <div className="composition">
      {listSourceVideos.map((srcVideo, i) => (
        <div
          key={`compositionItem-${srcVideo.key}`}
          className={`composition__item composition__item--${i + 1}`}
        >
          <video
            id={`composition_video--${i}`}
            preload="metadata"
            muted
            playsInline
            onFocus={() => playOrPauseVideoById(`composition_video--${i}`, 'play')}
            onMouseOver={() => playOrPauseVideoById(`composition_video--${i}`, 'play')}
            onMouseLeave={() => playOrPauseVideoById(`composition_video--${i}`, 'pause')}
          >
            <source
              src={`${srcVideo.sourceVideo}#t=1`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>

  );
}

export default Composition;
