import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../../utils/storyTests';
import MoviesSection, {
  renderTrending,
  renderTopRated,
  renderComingSoon,
} from '../MoviesSection';

jest.mock('../../../../hooks/useDataRequest', () => () => []);

jest.mock('../../../../hooks/useItemsSelector', () => () => {});

jest.mock('../../../../containers/MovieList/MovieList.container', () => () => <div>This is a fake container</div>);

describe('<MoviesSection />', () => {
  const renderer = new ShallowRenderer();

  it('should be rendered properly', () => {
    renderer.render(<MoviesSection />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  storyTests({
    renderTrending,
    renderTopRated,
    renderComingSoon,
  }, renderer);
});
