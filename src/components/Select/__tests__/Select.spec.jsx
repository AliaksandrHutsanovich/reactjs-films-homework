import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Select, { defaultRenderOption } from '../Select';

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

describe('<Select />', () => {
  const renderer = new ShallowRenderer();

  it('unbordered select should render properly', () => {
    renderer.render(
      <Select
        placeholder="Genre"
        allowClear
        onSelect={() => {}}
        options={options}
        renderOption={defaultRenderOption}
      />,
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('disabled select should be rendered properly', () => {
    renderer.render(
      <Select
        placeholder="Genre"
        allowClear
        onSelect={() => {}}
        options={options}
        disabled
        renderOption={defaultRenderOption}
      />,
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
