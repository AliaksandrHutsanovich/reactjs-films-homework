import React from 'react';
import HeadLine from './HeadLine';
import image from '../../assets/images/story-background.png';

export default {
  component: HeadLine,
  title: 'components/HeadLine',
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

export const headerBoldH1 = () => (
  <HeadLine text="Header h1" weight="bold" />
);

export const headerNormalH2 = () => (
  <HeadLine text="Header h2" level={2} />
);

export const headerNormalH3 = () => (
  <HeadLine text="Header h3" level={3} />
);

export const condensedHeaderNormalH3 = () => (
  <HeadLine text="Header h3" level={3} fontFamily="arial" />
);

export const blueHeaderNormalH3 = () => (
  <HeadLine text="Header h3" level={3} fontFamily="arial" type="blue" align="center" />
);
