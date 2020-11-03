import React, { memo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { SCROLL_ID } from '../../constants';
import { Text } from '../../components';
import scrollView from '../../utils/scrollView';

import styles from './LinkTitle.container.scss';

const LinkTitle = ({
  id,
  title,
  titleFontType,
}) => {
  const { url } = useRouteMatch();

  return (
    <Link
      to={`${url}${id}#${SCROLL_ID}`}
      scroll={scrollView}
      className={styles.link}
    >
      <Text size={14} type={titleFontType} textOverflow strong>{title}</Text>
    </Link>
  );
};

LinkTitle.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  titleFontType: PropTypes.string.isRequired,
};

export default memo(LinkTitle);
