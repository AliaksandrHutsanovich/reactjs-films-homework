import React from 'react';
import VideoPlayer from './VideoPlayer';

export default {
  component: VideoPlayer,
  title: 'components/VideoPlayer',
};

const iframe = (
  <iframe
    title="frame"
    type="text/html"
    style={{ backgroundColor: '#000' }}
    width="100%"
    height="100%"
    src="//www.youtube.com/embed/7Y6-w5Psupw?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1"
    frameBorder="0"
    allowFullScreen
  />
);
// str.match(/(<iframe).+(<\/iframe>)/g)

export const videoPlayerExample = () => (
  <VideoPlayer iframe={iframe} width="400px" height="300px" />
);
