import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ScrollerRefContext = React.createContext();

export const BackgroundContext = React.createContext();

export const BackgroundProvider = ({ children }) => {
  const [img, setImg] = useState(null);

  const setBackground = (image) => {
    setImg(image);
  };

  return (
    <BackgroundContext.Provider value={{ img, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

BackgroundProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollerRefContext;
