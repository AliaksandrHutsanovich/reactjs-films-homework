import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilmsPage from '../FilmsPage';

jest.mock('../../../hooks/useSearch', () => () => () => {});

describe('<FilmsPage />', () => {
  it('should be rendered properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <FilmsPage
        withBackground
        scrollerRef={{}}
        onSearch={() => {}}
        onScroll={() => {}}
        setRef={() => {}}
        path="path"
      />,
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
