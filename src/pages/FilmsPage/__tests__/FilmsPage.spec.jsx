import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilmsPage from '../FilmsPage';

describe('<FilmsPage />', () => {
  it('FilmsPage should be rendered properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FilmsPage onAction={() => {}} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
