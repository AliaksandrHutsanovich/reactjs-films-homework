import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import clsx from 'clsx';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import styles from './HeadLine.scss';

const { Title } = Typography;

const HeadLine = ({
  level,
  text,
  weight,
  fontFamily,
}) => (
  <Title
    level={level}
    className={clsx(styles.header, styles[weight], styles[fontFamily])}
  >
    {text}
  </Title>
);

HeadLine.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string.isRequired,
  weight: PropTypes.oneOf([
    'bold',
    'normal',
  ]),
  fontFamily: PropTypes.oneOf([
    'helveticaNeue',
    'arial',
  ]),
};

HeadLine.defaultProps = {
  level: 1,
  weight: 'normal',
  fontFamily: 'helveticaNeue',
};

export default memo(HeadLine);
