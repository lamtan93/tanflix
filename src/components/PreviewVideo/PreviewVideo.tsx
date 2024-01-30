import React from 'react';
import { IPreviewVideo } from './interfaces/IPreviewVideo';

function PreviewVideo({
  title,
  src,
  width,
  height,
}: IPreviewVideo) {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default PreviewVideo;
