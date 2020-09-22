import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieCardCover from '../MovieCardCover';

describe('<MovieCardCover />', () => {
  const renderer = new ShallowRenderer();
  it('should render properly', () => {
    renderer.render(
      <MovieCardCover
        title="Assasiens criesd"
        genres={['action', 'genre']}
        rating={5.5}
        info="Some info"
        onClose={() => {}}
        imgUrl="//url"
        layoutClassName="class"
        onDialogOpen={() => {}}
      />,
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
