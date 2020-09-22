import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainInfoSection from '../MainInfoSection';

describe('<MainInfoSection />', () => {
  const renderer = new ShallowRenderer();

  it('should be rendered properly', () => {
    renderer.render(<MainInfoSection onAction={() => {}} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
