import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { List as AntdList } from 'antd';
import clsx from 'clsx';
import Text from '../Text';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import styles from './List.scss';

const { Item } = AntdList;

export const renderListItem = (item) => (
  <Item className={styles.listItem}>
    <Text type="white" size={12}>
      {item.name}
    </Text>
  </Item>
);

const List = ({
  dataSource,
  grid,
  renderItem,
  bordered,
  rowKey,
  size,
  itemAutoWidth,
  itemMarginLeft,
}) => (
  <AntdList
    dataSource={dataSource}
    grid={grid}
    renderItem={renderItem}
    bordered={bordered}
    rowKey={rowKey}
    size={size}
    className={clsx({
      [styles.list]: itemAutoWidth,
      [styles[`itemMarginLeft_${itemMarginLeft}`]]: itemMarginLeft,
    })}
  />
);

List.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({}),
      PropTypes.node,
    ]),
  ).isRequired,
  grid: PropTypes.shape({
    gutter: PropTypes.number,
    column: PropTypes.number,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  renderItem: PropTypes.func,
  bordered: PropTypes.bool,
  rowKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  size: PropTypes.oneOf([
    'default',
    'large',
    'small',
  ]),
  itemAutoWidth: PropTypes.bool,
  itemMarginLeft: PropTypes.oneOf([
    5, 10, 15, 20,
  ]),
};

List.defaultProps = {
  grid: null,
  renderItem: renderListItem,
  bordered: false,
  rowKey: 'id',
  size: 'default',
  itemAutoWidth: false,
  itemMarginLeft: null,
};

export default memo(List); // writting memozator is possible
