import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieCard, { renderDefaultContent } from '../MovieCard';
import { coveringCardExample } from '../MovieCard.stories';

const genres = [
  'Action',
  'Adventure',
  'Fantasy',
];

describe('<MovieCard />', () => {
  const renderer = new ShallowRenderer();

  it('card should be rendered properly', () => {
    renderer.render(
      <MovieCard
        id={3}
        title="ASSASIN'S CREED"
        genres={genres}
        rating="4.7"
        imgUrl=""
        hoverable
        renderHoverableContent={() => <p>This is hoverable content</p>}
        renderCoveringContent={renderDefaultContent}
      />,
    );

    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('card with covering content should be rendered properly', () => {
    renderer.render(coveringCardExample());
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
