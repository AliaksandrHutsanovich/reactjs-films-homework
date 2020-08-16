import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../Loading.stories';

describe('<Loading />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);
});
