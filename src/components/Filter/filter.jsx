import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

export default function Filter({ onChange, value }) {
  return (
    <FilterLabel>
      Find your contact
      <br />
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
