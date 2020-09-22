import React, { memo, useMemo } from 'react';
import { Select as AntSelect } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line
import styles from './Select.scss';

const { Option } = AntSelect;

const defaultArrowIcon = <DownOutlined className={styles.arrowIcon} />;

export const defaultRenderOption = (option) => (
  <Option
    key={option.id}
    className={styles.option}
    value={option.id}
  >
    {option.name}
  </Option>
);

const Select = ({
  placeholder,
  bordered,
  allowClear,
  arrowIcon,
  onSelect,
  options,
  renderOption,
  disabled,
}) => (
  <AntSelect
    placeholder={placeholder}
    bordered={bordered}
    allowClear={allowClear}
    suffixIcon={arrowIcon}
    onSelect={onSelect}
    className={styles.select}
    dropdownClassName={styles.dropDown}
    disabled={disabled}
    onChange={onSelect}
    virtual={false}
  >
    {
      useMemo(
        () => (options.map((option) => renderOption(option))),
        [options, renderOption],
      )
    }
  </AntSelect>
);

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  bordered: PropTypes.bool,
  allowClear: PropTypes.bool,
  arrowIcon: PropTypes.node,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }),
  ).isRequired,
  renderOption: PropTypes.func,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  bordered: false,
  allowClear: false,
  arrowIcon: defaultArrowIcon,
  renderOption: defaultRenderOption,
  disabled: false,
};

export default memo(Select);
