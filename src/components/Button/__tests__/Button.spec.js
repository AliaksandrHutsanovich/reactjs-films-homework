import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../Button.stories';

describe('<Button />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
