import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../Text.stories';

describe('<Text />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
