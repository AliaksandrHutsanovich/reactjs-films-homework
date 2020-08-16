const storyTests = (stories, renderer) => {
  Object.keys(stories).forEach((storyKey) => {
    if (typeof stories[storyKey] !== 'function') {
      return;
    }
    it(`${storyKey} should be rendered properly`, () => {
      renderer.render(stories[storyKey]());
      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
};

export default storyTests;
