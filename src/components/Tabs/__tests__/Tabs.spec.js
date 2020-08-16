import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../Tabs.stories';

describe('<Tabs />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
