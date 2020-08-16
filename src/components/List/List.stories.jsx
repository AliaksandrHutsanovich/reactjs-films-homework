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
  { id: 1, text: 'Alex' },
  { id: 2, text: 'Valdis' },
  { id: 3, text: 'Gustav' },
  { id: 4, text: 'Vlad' },
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
