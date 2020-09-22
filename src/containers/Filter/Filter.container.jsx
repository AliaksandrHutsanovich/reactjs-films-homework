import React, { memo } from 'react';
import { Layout } from 'antd';
import { Select } from '../../components';
import { useGenresSelector, useSelectionOperation } from '../../hooks';
import { FILTER_BY_GENRE_SELECTOR_TITLE } from '../../constants';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

const FilterContainer = () => {
  const genres = useGenresSelector();
  const handleSelect = useSelectionOperation(FILTER_BY_GENRE_SELECTOR_TITLE);
  return (
    <Layout>
      <Select
        placeholder="Genre"
        allowClear
        onSelect={handleSelect}
        options={genres}
      />
    </Layout>
  );
};

export default memo(FilterContainer);
