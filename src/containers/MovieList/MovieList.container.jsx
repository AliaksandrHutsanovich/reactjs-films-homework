import React, {
  useMemo,
  memo,
  useState,
  useCallback,
  useRef,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { Load } from '../../patterns';
import {
  useDataRequest,
  useSearchEntitiesSelector,
  useFilterByGenreEntitiesSelector,
  useTotalPagesSelector,
  usePreviousCash,
} from '../../hooks';
import { IMG_PATH_PREFIX, REQUEST_TYPES } from '../../constants';
import image from '../../assets/images/no-movie-poster.svg';
import MovieCard from '../MovieCard';
import MovieDialog from '../MovieDialog';
import getRenderHoverableContent from './utils/getRenderHoverableContent';
import getRenderCoveringContent from './utils/getRenderCoveringContent';
import resetValue from '../../utils/resetValueByCompareValues';
import { List } from '../../components';
import ScrollerRefContext from '../../contexts';

import styles from './MovieList.container.scss';

const MovieListContainer = ({ type }) => {
  const searchValue = useSearchEntitiesSelector();
  const filterGenreValue = useFilterByGenreEntitiesSelector();
  const refToScroller = useContext(ScrollerRefContext);

  const requestType = useMemo(
    () => (searchValue && type === REQUEST_TYPES.TRENDING ? REQUEST_TYPES.SEARCH : type),
    [searchValue, type],
  );
  const totalPages = useTotalPagesSelector(requestType);
  const [dataForDialog, setDataForDialog] = useState({ isOpen: false, title: '', id: 0 });
  const [page, setPage] = useState(1);

  const { items = [] } = useDataRequest(requestType, searchValue, page);
  const movies = usePreviousCash(items, page);

  const filteredMovies = useMemo(() => {
    if (filterGenreValue) {
      return movies.filter(
        (movie) => movie.genre_ids.some((genreId) => genreId === filterGenreValue),
      );
    }
    return movies;
  }, [movies.length, requestType, filterGenreValue, searchValue]); // eslint-disable-line

  const renderCard = (item) => (
    <MovieCard
      key={item.id}
      id={item.id}
      title={item.title}
      genresIds={item.genre_ids}
      rating={item.vote_average / 2}
      info={item.overview}
      imgUrl={item.backdrop_path ? `${IMG_PATH_PREFIX}${item.backdrop_path}` : image}
      hoverable
      renderHoverableContent={getRenderHoverableContent(item.title, item.id, setDataForDialog)}
      renderCoveringContent={getRenderCoveringContent(item.id, setDataForDialog)}
    />
  );

  const cards = useMemo(() => filteredMovies
    .map(renderCard), [movies.length, requestType, filterGenreValue, searchValue]); //eslint-disable-line

  const { isOpen, title, id } = dataForDialog;
  const paramsRef = useRef();

  const renderScrolling = () => {
    resetValue(setPage, paramsRef, { searchValue, filterGenreValue, requestType }, 1);

    return (
      <InfiniteScroll
        key={`${searchValue}-${requestType}-${type}`}
        initialLoad={false}
        className={styles.wrapper}
        pageStart={1}
        loadMore={(part) => {
          setPage(part);
        }}
        hasMore={page !== totalPages}
        loader={(
          <div key={0} className={styles.loadingWrapper}>
            <Load />
          </div>
        )}
        useWindow={false}
        getScrollParent={() => refToScroller}
        threshold={-200}
      >
        {cards}
      </InfiniteScroll>
    );
  };

  const closeDialog = useCallback(() => setDataForDialog({ isOpen: false, title: '', id: 0 }), []);

  return (
    <>
      <MovieDialog
        isOpen={isOpen}
        title={title}
        movieId={id}
        onCancel={closeDialog}
      />
      <Layout>
        {useMemo(() => (filterGenreValue
          ? (
            <List
              dataSource={filteredMovies}
              size="large"
              renderItem={renderCard}
              grid={{ column: 4 }}
            />
          ) : renderScrolling()), [ // eslint-disable-line
          requestType,
          filterGenreValue,
          searchValue,
          cards.length,
        ])}
      </Layout>
    </>
  );
};

MovieListContainer.propTypes = {
  type: PropTypes.string.isRequired,
};

export default memo(MovieListContainer);
