import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import storyTests from '../../../utils/storyTests';
import * as stories from '../MovieDescription.stories';
import MovieDescription from '../MovieDescription';

describe('<MovieDescription />', () => {
  const renderer = new ShallowRenderer();

  storyTests(stories, renderer);

  it('should render with no genres properly', () => {
    renderer.render(
      <MovieDescription
        title="ASSASIN'S CREED"
        genres={[]}
        rating="4.7"
        ratingFontType="secondary_with_background"
      />,
    );
  });
});
