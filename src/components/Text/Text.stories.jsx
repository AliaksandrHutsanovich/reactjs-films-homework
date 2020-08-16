import React from 'react';
import Text from './Text';
import image from '../../assets/images/story-background.png';

const backgroundDecorator = (story) => (
  <div
    style={{
      background: `url(${image}) no-repeat`,
      padding: '20px',
      width: '300px',
      height: '300px',
    }}
  >
    {story()}
  </div>
);

export default {
  component: Text,
  title: 'components/Text',
};

export const white = () => (
  <Text type="white">
    This is white text
  </Text>
);
white.story = {
  decorators: [backgroundDecorator],
};

export const withShadowBackground = () => (
  <Text type="with_shadow">
    This is text with shadow background
  </Text>
);
withShadowBackground.story = {
  decorators: [backgroundDecorator],
};

export const withBackground = () => (
  <Text type="white_with_background">
    This is text with background
  </Text>
);
withBackground.story = {
  decorators: [backgroundDecorator],
};

export const secondary = () => (
  <Text type="secondary">
    This is text with secondary color
  </Text>
);

export const normal = () => (
  <Text type="normal">
    This is normal text
  </Text>
);

export const danger = () => (
  <Text type="danger">
    This is normal text
  </Text>
);
