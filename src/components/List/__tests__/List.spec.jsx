import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../List.stories';
import { renderListItem } from '../List';

describe('<List />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);

  it('list item should be rendered properly', () => {
    const ListItem = ({ item }) => renderListItem(item);
    renderer.render(<ListItem item={{ id: 0, text: 'retop' }} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
