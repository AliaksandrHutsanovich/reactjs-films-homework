import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../Signature';

describe('<Signature />', () => {
  const renderer = new ShallowRenderer();

  it('should be rendered properly', () => {
    renderer.render(<Signature name="Alex" />); //eslint-disable-line
    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual(<h1 className="wrapper__header">Alex</h1>);
  });
});
