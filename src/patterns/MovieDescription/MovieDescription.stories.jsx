import React from 'react';
import MovieDescription from './MovieDescription';

export default {
  component: MovieDescription,
  title: 'patterns/MovieDescription',
  decorators: [
    (story) => (
      <div
        style={{
          padding: '20px',
          width: '400px',
          height: '300px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

const genres = [
  'Action',
  'Adventure',
  'Fantasy',
];

export const cardMetaInfo = () => (
  <MovieDescription
    title="ASSASIN'S CREED"
    genres={genres}
    rating="4.7"
    ratingFontType="secondary_with_background"
  />
);
