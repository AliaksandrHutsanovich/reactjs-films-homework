import React from 'react';
import List from './List';

export default {
  component: List,
  title: 'components/List',
  decorators: [
    (story) => (
      <div
        style={{
          backgroundColor: 'red',
          padding: '20px',
          width: '800px',
          height: '400px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

const names = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Valdis' },
  { id: 3, name: 'Gustav' },
  { id: 4, name: 'Vlad' },
];

export const verticalList = () => (
  <List
    dataSource={names}
    size="small"
  />
);

export const horizontalList = () => (
  <List
    dataSource={names}
    size="small"
    grid={{ gutter: 12, column: 4 }}
    itemAutoWidth
  />
);

export const emptyList = () => (
  <List
    dataSource={[]}
    size="large"
  />
);
