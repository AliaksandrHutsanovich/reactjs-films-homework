import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Divider as AntdDivider } from 'antd';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

const Divider = ({
  className,
  dashed,
  orientation,
  type,
  children,
}) => (
  <AntdDivider
    className={className}
    dashed={dashed}
    orientation={orientation}
    type={type}
  >
    {children}
  </AntdDivider>
);

Divider.propTypes = {
  className: PropTypes.string,
  dashed: PropTypes.bool,
  orientation: PropTypes.oneOf([
    'left',
    'right',
    'center',
  ]),
  type: PropTypes.oneOf([
    'horizontal',
    'vertical',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Divider.defaultProps = {
  className: null,
  dashed: false,
  orientation: 'center',
  type: 'horizontal',
  children: '',
};

export default memo(Divider);
