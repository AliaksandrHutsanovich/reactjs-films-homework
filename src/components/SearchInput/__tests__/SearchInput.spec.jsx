import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../SearchInput.stories';
import SearchInput from '../SearchInput';

// every function should be prefixed mock
const mockFun = jest.fn();

jest.mock('../../../utils/getStateSetter', () => (fun, val) => () => {
  mockFun(val);
});

describe('<SearchInput />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);

  it('onFocus and onBlur should be called', () => {
    renderer.render(<SearchInput onSearch={() => {}} />);
    const result = renderer.getRenderOutput();

    result.props.onFocus();
    expect(mockFun).toHaveBeenCalledWith('focused');

    result.props.onBlur();
    expect(mockFun).toHaveBeenCalledWith('blured');
  });
});
