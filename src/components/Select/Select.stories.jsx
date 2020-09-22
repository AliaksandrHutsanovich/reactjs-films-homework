import React from 'react';
import { action } from '@storybook/addon-actions';
import Select from './Select';

export default {
  component: Select,
  title: 'components/Select',
};

const options = [
  {
    id: 1,
    name: 'Action',
  }, {
    id: 2,
    name: 'Adventure',
  }, {
    id: 3,
    name: 'Fantasy',
  }, {
    id: 4,
    name: 'Sci-fi',
  }, {
    id: 5,
    name: 'Action',
  }, {
    id: 6,
    name: 'Adventure',
  }, {
    id: 7,
    name: 'Fantasy',
  }, {
    id: 8,
    name: 'Sci-fi',
  }, {
    id: 9,
    name: 'Action',
  }, {
    id: 10,
    name: 'Adventure',
  }, {
    id: 11,
    name: 'Fantasy',
  }, {
    id: 12,
    name: 'Sci-fi',
  },
];

export const unborderedSelect = () => (
  <Select
    placeholder="Genre"
    allowClear
    onSelect={action('the option in unbordered select was selected')}
    options={options}
  />
);

export const disabledSelect = () => (
  <Select
    placeholder="Genre"
    allowClear
    onSelect={action('the option in unbordered select was selected')}
    options={options}
    disabled
  />
);
