import React from 'react';
import { addDecorator } from '@storybook/react';

const paddingDecorator = (story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
);

export default paddingDecorator;
