import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PageHeader from '../PageHeader';

describe('<PageHeader />', () => {
  const renderer = new ShallowRenderer();

  it('should be rendered properly with background', () => {
    renderer.render(
      <PageHeader
        onAction={() => {}}
        withBackground
        imgUrl="/url"
      />,
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('should be rendered properly without background', () => {
    renderer.render(
      <PageHeader
        onAction={() => {}}
      />,
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
