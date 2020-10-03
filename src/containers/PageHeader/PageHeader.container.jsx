import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { BackgroundContext } from '../../contexts';
import PageHeader from '../../pages/FilmsPage/PageHeader';

const PageHeaderContainer = ({ onAction, withBackground }) => {
  const { img } = useContext(BackgroundContext);

  return (
    <PageHeader
      onAction={onAction}
      withBackground={withBackground}
      imgUrl={img}
    />
  );
};

PageHeaderContainer.propTypes = {
  onAction: PropTypes.func.isRequired,
  withBackground: PropTypes.bool,
};

PageHeaderContainer.defaultProps = {
  withBackground: null,
};

export default memo(PageHeaderContainer);
