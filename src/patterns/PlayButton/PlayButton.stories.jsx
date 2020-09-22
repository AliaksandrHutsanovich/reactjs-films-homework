import React from 'react';
import { action } from '@storybook/addon-actions';
import PlayButton from './PlayButton';

export default {
  component: PlayButton,
  title: 'patterns/PlayButton',
  decorators: [
    (story) => (
      <div
        style={{
          width: '400px',
          height: '300px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const playButton = () => (
  <PlayButton onClick={action('the play button is clicked')} />
);
