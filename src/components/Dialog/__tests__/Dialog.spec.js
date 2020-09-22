import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../Dialog.stories';

describe('<Dialog />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
