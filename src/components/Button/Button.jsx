import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button as AntdButton } from 'antd';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import styles from './Button.scss';

const ANTD_BUTTON_TYPE_CONFIG = {
  outlined: 'default',
  filled: 'primary',
};

const Button = ({
  disabled,
  size,
  type,
  onClick,
  title,
}) => {
  const className = useMemo(() => (type === 'outlined' ? styles.outlined : ''), [type]);
  const antdType = ANTD_BUTTON_TYPE_CONFIG[type];
  return (
    <AntdButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={className}
      type={antdType}
    >
      {title}
    </AntdButton>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'filled',
    'outlined',
  ]),
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf([
    'large',
    'middle',
    'small',
  ]),
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
  type: 'filled',
  size: 'middle',
};

export default memo(Button);
