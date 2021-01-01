import React from 'react';
import NoTrailer from './NoTrailer';

export default {
  component: NoTrailer,
  title: 'patterns/NoTrailer',
  decorators: [
    (story) => (
      <div
        style={{
          width: '300px',
          height: '300px',
          padding: '10px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const noTrailer = () => (
  <NoTrailer />
);
