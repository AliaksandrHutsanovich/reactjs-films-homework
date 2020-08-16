import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import clsx from 'clsx';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import styles from './Text.scss';

const { Text: AntdText } = Typography;

const classNameTypes = {
  white: styles.white,
  with_shadow: styles.withShadow,
  white_with_background: styles.whiteWithBackground,
  secondary_with_background: styles.secondaryWithBackground,
  secondary: styles.secondary,
};

const getSizeClass = (size) => styles[`size_${size}`];

const Text = ({
  underline,
  strong,
  type,
  children,
  size,
}) => {
  const className = classNameTypes[type];

  const antdTextType = useMemo(() => (
    type === 'warning' || type === 'danger' ? type : ''
  ), [type]);

  const fontSizeClass = useMemo(() => getSizeClass(size), [size]);

  return (
    <AntdText
      className={clsx(className, fontSizeClass, { [styles.bold]: strong })}
      underline={underline}
      strong={strong}
      type={antdTextType}
    >
      {children}
    </AntdText>
  );
};

Text.propTypes = {
  underline: PropTypes.bool,
  strong: PropTypes.bool,
  type: PropTypes.oneOf([
    ...Object.keys(classNameTypes),
    'normal',
    'warning',
    'danger',
  ]).isRequired,
  children: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Text.defaultProps = {
  underline: false,
  strong: false,
  size: 14,
};

export default memo(Text);