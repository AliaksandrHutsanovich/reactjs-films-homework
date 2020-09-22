import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PageFooter from '../PageFooter';

describe('<PageFooter />', () => {
  const renderer = new ShallowRenderer();

  it('should render properly', () => {
    renderer.render(<PageFooter />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
