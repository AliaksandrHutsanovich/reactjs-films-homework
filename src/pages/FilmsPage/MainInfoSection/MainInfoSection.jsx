import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import { SCROLL_ID } from '../../../constants';
import {
  Text,
  HeadLine,
  List,
  Button,
  Divider,
} from '../../../components';
import { RatingStar } from '../../../patterns';

import styles from '../FilmsPage.scss';

const MainInfoSection = ({
  title,
  genres,
  rating,
  imgUrl,
  info,
  isInfoShown,
  onShowInfo,
  onWatchNow,
  typeInfoText,
}) => (
  <>
    <div id={SCROLL_ID} />
    <Layout
      className={styles.layout}
      style={{
        background: `url(${imgUrl}) no-repeat`,
      }}
    >
      <Row className={styles.row}>
        <Col span={12} className={styles.leftCol}>
          <HeadLine text={title} level={2} />
          <Row className={styles.infoWrapper}>
            <Col className={styles.listWrapper}>
              <List
                dataSource={genres}
                size="small"
                grid={{ column: 4 }}
                itemAutoWidth
                itemMarginLeft={15}
              />
            </Col>
            <Divider type="vertical" />
            <Text type="white" size={12}>
              1h 46m
            </Text>
          </Row>
          <RatingStar rating={rating} />
        </Col>
        <Col span={12} className={styles.rightCol}>
          {useMemo(() => (
            isInfoShown && (
              <Layout className={styles.textWrapper}>
                <Text type={typeInfoText} size={12}>
                  {info}
                </Text>
              </Layout>
            )
          ), [isInfoShown, info, typeInfoText])}
          <Row className={styles.buttonsWrapper}>
            <Button
              title="Watch Now"
              onClick={onWatchNow}
            />
            <Button
              title="View Info"
              onClick={onShowInfo}
              type="outlined"
            />
          </Row>
        </Col>
      </Row>
    </Layout>
  </>
);

MainInfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  imgUrl: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  isInfoShown: PropTypes.bool.isRequired,
  onShowInfo: PropTypes.func.isRequired,
  onWatchNow: PropTypes.func.isRequired,
  typeInfoText: PropTypes.oneOf([
    'white_with_background',
    'with_shadow',
  ]).isRequired,
};

export default memo(MainInfoSection);
