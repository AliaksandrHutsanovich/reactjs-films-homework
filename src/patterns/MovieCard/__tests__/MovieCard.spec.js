import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../MovieCard.stories';

describe('<MovieCard />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
