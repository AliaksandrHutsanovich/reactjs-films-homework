import React from 'react';
import Divider from './Divider';

export default {
  component: Divider,
  title: 'components/Divider',
};

export const horizontalLeft = () => (
  <Divider orientation="left">Horizontal left</Divider>
);

export const horizontalCentered = () => (
  <Divider>Horizontal centered</Divider>
);

export const horizontalRight = () => (
  <Divider orientation="right">Horizontal right</Divider>
);

const Vertical = () => (
  <div>
    Text
    <Divider type="vertical" orientation="center" />
    Text
  </div>
);

export const vertical = () => (
  <Vertical />
);
