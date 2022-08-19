import PropTypes from 'prop-types';

import s from './filter.module.scss';

export default function Filter({ filterEl, onChange }) {
  return (
    <div className={s.container}>
      <label className={s.title}>Filter by name</label>
      <input
        type="text"
        value={filterEl}
        onChange={onChange}
        className={s.input_filter}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  filterEl: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
