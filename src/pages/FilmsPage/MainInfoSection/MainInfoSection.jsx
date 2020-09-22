import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import {
  Text,
  HeadLine,
  List,
  Button,
  Divider,
} from '../../../components';
import { RatingStar } from '../../../patterns';

import styles from '../FilmsPage.scss';

const types = [
  { id: 1, text: 'Adventure' },
  { id: 2, text: 'Drame' },
  { id: 3, text: 'Family' },
  { id: 4, text: 'Fantasy' },
];

const MainInfoSection = ({ onAction }) => (
  <Layout className={styles.layout}>
    <Row>
      <Col span={12} className={styles.rightCol}>
        <HeadLine text="THE JUNGLE BOOK" level={2} />
        <Row className={styles.infoWrapper}>
          <Col className={styles.listWrapper}>
            <List
              dataSource={types}
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
        <RatingStar rating="4.6" />
      </Col>
      <Col span={12} className={styles.leftCol}>
        <Layout className={styles.textWrapper}>
          <Text type="with_shadow" size={12}>
            There are growing dangers in the
            wizarding world of 1926 New York.
            Something misterious is leaving a
            path of destructions in the streets,
            threatening to expose the wizarding.
          </Text>
        </Layout>
        <Row className={styles.buttonsWrapper}>
          <Button
            title="Watch Now"
            onClick={onAction}
          />
          <Button
            title="View Info"
            onClick={onAction}
            type="outlined"
          />
        </Row>
      </Col>
    </Row>
  </Layout>
);

MainInfoSection.propTypes = {
  onAction: PropTypes.func.isRequired,
};

export default memo(MainInfoSection);
