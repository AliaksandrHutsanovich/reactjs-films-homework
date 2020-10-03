import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { List as AntdList, Row, Col } from 'antd';
import { List, Text } from '../../components';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import styles from './RatingStar.scss';

const { Item } = AntdList;

export const renderItem = (item) => (
  <Item className={styles.item}>
    {item.star}
  </Item>
);

const RatingStar = ({
  rating,
}) => {
  const frontStarsArray = useMemo(() => Array(5).fill(
    <Text type="secondary" size={26}>&#9733;</Text>,
  ), []);

  const backStarsArray = useMemo(() => Array(5).fill(
    <Text type="white" size={26}>&#9733;</Text>,
  ), []);

  const backList = useMemo(
    () => Array.from(backStarsArray, (el, i) => ({ id: i, star: el })),
    [backStarsArray],
  );
  const frontList = useMemo(
    () => Array.from(frontStarsArray, (el, i) => ({ id: i, star: el })),
    [frontStarsArray],
  );

  return (
    <Row justify="start" gutter={10}>
      <Col className={styles.patternsWrapper}>
        <div className={styles.backPattern}>
          <List
            dataSource={backList}
            grid={{ gutter: 6, column: 5 }}
            renderItem={renderItem}
          />
        </div>
        <div
          style={{
            width: `${(rating / 5) * 100}%`,
          }}
          className={styles.frontPatternWrapper}
        >
          <div className={styles.frontPattern}>
            <List
              dataSource={frontList}
              grid={{ gutter: 6, column: 5 }}
              renderItem={renderItem}
            />
          </div>
        </div>
      </Col>
      <Col>
        <Text type="white_with_background" size={12}>
          {rating}
        </Text>
      </Col>
    </Row>
  );
};

// &#9733; this is a filled star, it as more apropriate

RatingStar.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default memo(RatingStar);
