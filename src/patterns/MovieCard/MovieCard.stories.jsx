import React from 'react';
import MovieCard from './MovieCard';
import image from '../../assets/images/story-background.png';

export default {
  component: MovieCard,
  title: 'patterns/MovieCard',
};

const genres = [
  'Action',
  'Adventure',
  'Fantasy',
];

export const cardExample = () => (
  <MovieCard
    title="ASSASIN'S CREED"
    genres={genres}
    rating="4.7"
    imgUrl={image}
    hoverable
    renderHoverableContent={() => <p>This is hoverable content</p>}
  />
);

export const coveringCardExample = () => (
  <MovieCard
    title="ASSASIN'S CREED"
    genres={genres}
    rating="4.7"
    imgUrl={image}
    hoverable
    renderHoverableContent={() => <p>This is hoverable content</p>}
    showCoveringContent
    renderCoveringContent={() => (
      <div style={{ width: '220px', height: '220px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <h2 style={{ color: 'white' }}>This is covering content</h2>
      </div>
    )}
  />
);
