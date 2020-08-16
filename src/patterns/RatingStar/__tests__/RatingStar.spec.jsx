import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../RatingStar.stories';
import { renderItem } from '../RatingStar';

describe('<RatingStar />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);

  it('star shold be rendered properly', () => {
    const Star = ({ item }) => renderItem(item);
    renderer.render(<Star item={{ id: 0, star: '&#9733;' }} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
