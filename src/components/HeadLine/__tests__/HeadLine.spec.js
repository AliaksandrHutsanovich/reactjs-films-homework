import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../HeadLine.stories';

describe('<HeadLine />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
