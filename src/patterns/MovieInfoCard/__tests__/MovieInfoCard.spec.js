import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../MovieInfoCard.stories';

describe('<MovieInfoCard />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
