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
  />
);
