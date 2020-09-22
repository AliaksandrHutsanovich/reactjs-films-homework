import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import { Text } from '../../components';

import styles from './MovieDescription.scss';

const MovieDescription = ({
  title,
  genres,
  rating,
  titleFontType,
  ratingFontType,
}) => {
  const genresList = useMemo(
    () => (genres.length ? (
      genres.reduce(
        (acc, genre) => (`${acc}, ${genre}`),
      )
    ) : ''),
    [genres], // additional memoization is possible
  );

  return (
    <Row justify="space-between">
      <Col span={20}>
        <Row className={styles.hidden}>
          <Text size={14} type={titleFontType} textOverflow strong>{title}</Text>
        </Row>
        <Row>
          <Text type="secondary" size={12}>{genresList}</Text>
        </Row>
      </Col>
      <Col>
        <Text size={12} type={ratingFontType}>{Number(rating).toFixed(1).toString()}</Text>
      </Col>
    </Row>
  );
};

MovieDescription.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  titleFontType: PropTypes.oneOf([
    'normal',
    'white',
  ]),
  ratingFontType: PropTypes.oneOf([
    'white_with_background',
    'secondary_with_background',
    'bordered',
  ]),
};

MovieDescription.defaultProps = {
  titleFontType: 'normal',
  ratingFontType: 'white_with_background',
};

export default memo(MovieDescription); // additional memoization is possible
