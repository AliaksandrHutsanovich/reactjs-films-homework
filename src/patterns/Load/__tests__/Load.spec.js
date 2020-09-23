import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../Load.stories';

describe('<Load />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
