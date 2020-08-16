import React from 'react';
import RatingStar from './RatingStar';

export default {
  component: RatingStar,
  title: 'patterns/RatingStar',
  decorators: [
    (story) => (
      <div
        style={{
          padding: '20px',
          width: '220px',
          height: '90px',
          backgroundColor: 'red',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const ratingStarExample = () => (
  <RatingStar rating="4.6" />
);
