import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../Spin.stories';

describe('<Spin />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
