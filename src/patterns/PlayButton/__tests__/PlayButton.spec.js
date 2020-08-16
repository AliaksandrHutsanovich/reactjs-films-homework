import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../PlayButton.stories';

describe('<PlayButton />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
