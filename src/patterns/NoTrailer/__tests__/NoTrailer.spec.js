import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../NoTrailer.stories';

describe('<NoTrailer />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
