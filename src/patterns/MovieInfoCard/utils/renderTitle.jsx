import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { SCROLL_ID } from '../../../constants';
import { Text } from '../../../components';
import scrollView from '../../../utils/scrollView';

const renderTitle = (id, title, titleFontType) => (
  <Link
    to={`/${id}#${SCROLL_ID}`}
    scroll={scrollView}
  >
    <Text size={14} type={titleFontType} textOverflow strong>{title}</Text>
  </Link>
);

export default renderTitle;
