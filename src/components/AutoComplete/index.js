import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { debounce } from 'lodash';
import styles from './AutoComplete.module.scss';

// This component should only be used with the autoComplete HOC.
// Direct props passed include: className, value, onChange
// the rest should be passed through by the HOC
function AutoComplete(props) {
  const { loading, loadOptions, options, column, className, value, onChange, uniqueKey } = props;

  let noResultsText = loading ? 'Loading...' : 'No results found';
  if (value === '') {
    noResultsText = null;
  }

  let selectOptions = options;
  if (options.length === 0 && value) {
    selectOptions = [{ value, label: value }];
  }

  return (
    <Select
      isLoading={loading}
      className={`${className} ${styles.select}`}
      autosize={false}
      onChange={onChange}
      filterOptions={(option) => option}
      options={selectOptions}
      backspaceRemoves
      placeholder="Type to select..."
      noResultsText={noResultsText}
      onInputChange={debounce((val) => {
        loadOptions(val, column, uniqueKey);
      }, 100)}
      value={value}
    />
  );
}

AutoComplete.propTypes = {
  loading: PropTypes.bool,
  loadOptions: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  column: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  uniqueKey: PropTypes.string,
};

export default AutoComplete;
