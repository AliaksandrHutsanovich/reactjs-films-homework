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
  type,
  align,
}) => (
  <Title
    level={level}
    className={
      clsx(
        {
          [styles.header]: type === 'normal',
          [styles.blueHeader]: type === 'blue',
          [styles.alignCenter]: align === 'center',
          [styles.alignRight]: align === 'right',
        },
        styles[weight],
        styles[fontFamily],
      )
    }
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
  type: PropTypes.oneOf([
    'normal',
    'blue',
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
};

HeadLine.defaultProps = {
  level: 1,
  weight: 'normal',
  fontFamily: 'helveticaNeue',
  type: 'normal',
  align: 'left',
};

export default memo(HeadLine);
