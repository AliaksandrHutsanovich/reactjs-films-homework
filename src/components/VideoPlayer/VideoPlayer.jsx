import React, { memo } from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({
  iframe,
  width,
  height,
}) => (
  <div style={{ width, height }}>
    {iframe}
  </div>
);

VideoPlayer.propTypes = {
  iframe: PropTypes.node,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

VideoPlayer.defaultProps = {
  iframe: <div />,
};

export default memo(VideoPlayer);
