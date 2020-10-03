import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../MovieDescription.stories';
import MovieDescription from '../MovieDescription';
import renderTitle from '../../MovieInfoCard/utils/renderTitle';

describe('<MovieDescription />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);

  it('should render with no genres properly', () => {
    renderer.render(
      <MovieDescription
        id={1}
        title="ASSASIN'S CREED"
        genres={[]}
        rating="4.7"
        ratingFontType="secondary_with_background"
      />,
    );
  });

  it('should render with genres and renderTitle properly', () => {
    renderer.render(
      <MovieDescription
        id={2}
        title="ASSASIN'S CREED"
        genres={['genre 1', 'genre 2']}
        rating="4.7"
        ratingFontType="secondary_with_background"
        renderTitle={renderTitle}
      />,
    );
  });
});
