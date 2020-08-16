import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../Divider.stories';

describe('<Divider />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
