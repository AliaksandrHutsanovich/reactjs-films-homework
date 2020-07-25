import React from 'react';
import PropTypes from 'prop-types';

import styles from './Signature.scss';

const Signature = ({ name }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.wrapper__header}>{name}</h1>
  </div>
);

Signature.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Signature;
