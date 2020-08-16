import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import clsx from 'clsx';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line
import getStateSetter from '../../utils/getStateSetter';
import styles from './SearchInput.scss';

const { Search } = Input;

const SearchInput = ({
  size,
  onSearch,
}) => {
  const [inputState, setState] = useState('blured');

  return (
    <Search
      className={clsx(styles.input, { [styles.focused]: inputState === 'focused' })}
      allowClear
      size={size}
      onSearch={onSearch}
      onFocus={getStateSetter(setState, 'focused')}
      onBlur={getStateSetter(setState, 'blured')}
      enterButton
    />
  );
};

SearchInput.propTypes = {
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  onSearch: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  size: 'middle',
};

export default memo(SearchInput);
