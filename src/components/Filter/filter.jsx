import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';

export default function Filter({ onChange, value }) {
  return (
    <label className={css.filter__label}>
      Find your contact
      <br />
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
