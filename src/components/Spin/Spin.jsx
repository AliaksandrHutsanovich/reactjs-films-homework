import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Spin as AntdSpin } from 'antd';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

const Spin = ({ size }) => (
  <AntdSpin size={size} />
);

Spin.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'default',
    'large',
  ]),
};

Spin.defaultProps = {
  size: 'default',
};

export default memo(Spin);
