import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../MovieDescription.stories';

describe('<MovieDescription />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
