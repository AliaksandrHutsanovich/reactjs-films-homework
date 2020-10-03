import React, {
  memo,
  useState,
  useCallback,
} from 'react';
import { useSelectionOperation } from '../../hooks';
import { SEARCH_VALUE_SELECTOR_TITLE } from '../../constants';
import FilmsPage from '../../pages';

const FilmsPageContainer = () => {
  const [withBackground, setWithBackground] = useState(true);
  const [scrollerRef, setScrollerRef] = useState(null);
  const handleSearch = useSelectionOperation(SEARCH_VALUE_SELECTOR_TITLE);
  const handleScroll = useCallback(
    ({ target }) => {
      if (!withBackground && !target.scrollTop) {
        setWithBackground(true);
      } else if (withBackground && target.scrollTop) {
        setWithBackground(false);
      }
    },
    [withBackground], //eslint-disable-line
  );
  const setRef = useCallback(setScrollerRef, [setScrollerRef]);

  return (
    <FilmsPage
      withBackground={withBackground}
      scrollerRef={scrollerRef}
      onSearch={handleSearch}
      onScroll={handleScroll}
      setRef={setRef}
    />
  );
};

export default memo(FilmsPageContainer);
