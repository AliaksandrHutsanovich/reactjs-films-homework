import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../VideoPlayer.stories';

describe('<VideoPlayer />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
