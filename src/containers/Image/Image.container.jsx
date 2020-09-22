import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Spin } from '../../components';

import styles from './Image.container.scss';

const ImageContainer = ({
  alt,
  preload,
  imgUrl,
  className,
  spinClassName,
}) => {
  const [src, setSrc] = useState(preload);
  useEffect(() => {
    const image = new Image();

    image.onload = () => {
      setSrc(imgUrl);
    };
    image.src = imgUrl;
    return () => {
      image.onload = null;
    };
  }, [imgUrl]);

  return (
    <div className={styles.wrapper}>
      <img alt={alt} src={src} className={className} />
      {src === preload && (
        <div className={clsx(styles.spinWrapper, spinClassName)}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

ImageContainer.propTypes = {
  alt: PropTypes.string.isRequired,
  preload: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  spinClassName: PropTypes.string,
};

ImageContainer.defaultProps = {
  className: '',
  spinClassName: '',
};

export default memo(ImageContainer);
