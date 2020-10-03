import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../../components';

const renderTitle = (id, title, titleFontType) => (
  <Link to={`/${id}`}>
    <Text size={14} type={titleFontType} textOverflow strong>{title}</Text>
  </Link>
);

export default renderTitle;
