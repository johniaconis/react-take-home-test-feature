import React from 'react';
import PropTypes from 'prop-types';
import { searchBar } from './SearchBar.module.scss';
import { Input } from 'antd';

const Search = Input.Search;

function SearchBar(props) {
  const { onSearch, disabled, placeholder, width, onChange, id } = props;
  const style = { width };

  return (
    <Search
      id={id}
      onChange={onChange}
      className={searchBar}
      style={style}
      placeholder={placeholder}
      onSearch={onSearch}
      disabled={disabled}
    />
  );
}

SearchBar.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onSearch: PropTypes.func,
  width: PropTypes.number,
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  width: 300,
  placeholder: 'Input Search Text',
};

export default SearchBar;
