import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchInput from './SearchInput';
import image from '../../assets/images/story-background.png';

export default {
  component: SearchInput,
  title: 'components/SearchInput',
  decorators: [
    (story) => (
      <div
        style={{
          background: `url(${image}) no-repeat`,
          padding: '20px',
          width: '800px',
          height: '800px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const search = () => (
  <SearchInput onSearch={action('search has started')} />
);
