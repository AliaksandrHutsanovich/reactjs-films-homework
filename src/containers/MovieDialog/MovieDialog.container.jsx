import React, {
  memo,
  useState,
  useMemo,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import setValue from '../../utils/setValue';
import { useVideosRequest } from '../../hooks';
import { VideoPlayer, Dialog } from '../../components';

const MovieDialog = ({
  isOpen,
  title,
  onCancel,
  movieId,
}) => {
  const [key, setKey] = useState('');
  const keyRef = useRef();

  useVideosRequest(movieId)
    .then((videoKey) => {
      setValue(videoKey, keyRef, setKey);
    });

  const src = `//www.youtube.com/embed/${key}`;
  const iframe = (
    <iframe
      title="frame"
      type="text/html"
      style={{ backgroundColor: '#000' }}
      width="100%"
      height="100%"
      src={src}
      frameBorder="0"
      allowFullScreen
    />
  );

  return (
    <Dialog
      title={title}
      visible={isOpen}
      onCancel={onCancel}
    >
      <VideoPlayer
        width="100%"
        height="300px"
        iframe={useMemo(() => (key ? iframe : <div />), [iframe, key])}
      />
    </Dialog>
  );
};

MovieDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  movieId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default memo(MovieDialog);
