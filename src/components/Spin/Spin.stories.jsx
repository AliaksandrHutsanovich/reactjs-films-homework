import React from 'react';
import Spin from './Spin';

export default {
  component: Spin,
  title: 'components/Spin',
};

export const defaultSpin = () => (
  <Spin />
);

export const smallSpin = () => (
  <Spin size="small" />
);

export const largeSpin = () => (
  <Spin size="large" />
);
