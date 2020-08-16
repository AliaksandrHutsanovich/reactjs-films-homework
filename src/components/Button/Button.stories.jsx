import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import image from '../../assets/images/story-background.png';

export default {
  component: Button,
  title: 'components/Button',
};

export const outlined = () => (
  <Button
    title="Click me"
    onClick={action('the default button is clicked')}
    type="outlined"
  />
);
outlined.story = {
  decorators: [
    (story) => (
      <div
        style={{
          background: `url(${image}) no-repeat`,
          padding: '20px',
          width: '200px',
          height: '200px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const filled = () => (
  <Button
    title="Click me"
    onClick={action('the primary button is clicked')}
  />
);
