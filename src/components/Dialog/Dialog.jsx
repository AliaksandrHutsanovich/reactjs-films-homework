import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import styles from './Dialog.scss';

const Dialog = ({
  title,
  visible,
  onCancel,
  children,
}) => (
  <Modal
    title={<p className={styles.title}>{title}</p>}
    visible={visible}
    onCancel={onCancel}
    footer={null}
    width="fit-content"
  >
    {children}
  </Modal>
);

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(Dialog);
