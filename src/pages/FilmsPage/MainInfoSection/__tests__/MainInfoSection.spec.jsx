import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainInfoSection from '../MainInfoSection';

describe('<MainInfoSection />', () => {
  const renderer = new ShallowRenderer();

  it('should be rendered properly', () => {
    renderer.render(
      <MainInfoSection
        title="some movie"
        genres={[{ id: 1, name: 'genre 1' }, { id: 2, name: 'genre 2' }]}
        rating={4.5}
        imgUrl="/string"
        info="This is info about movie"
        isInfoShown
        onShowInfo={() => {}}
        onWatchNow={() => {}}
        typeInfoText="with_shadow"
      />,
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
