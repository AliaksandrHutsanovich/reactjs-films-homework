import React from 'react';
import { action } from '@storybook/addon-actions';
import MovieInfoCard from './MovieInfoCard';

export default {
  component: MovieInfoCard,
  title: 'patterns/MovieInfoCard',
  decorators: [
    (story) => (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width: 'fit-content',
          borderRadius: '6px 6px 0 0',
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

const info = `
  There are growing dangers in the
  wizarding world of 1926 New York.
  Something misterious is leaving a
  path of destructions in the streets,
  threatening to expose the wizarding.
`;

export const cardExample = () => (
  <MovieInfoCard
    title="ASSASIN'S CREED"
    genres={genres}
    rating="4.7"
    info={info}
    onClose={action('the close icon was clicked')}
    onDialogOpen={action('the button for opening dialog was clicked')}
  />
);
