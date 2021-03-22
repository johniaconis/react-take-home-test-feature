import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Menu } from 'antd';
import { TextMap } from 'components';

export function MenuOptions(props) {
  const { useGlobalMapper, labelKey, valueKey, options,
    groupByOptions, onSelect, itemClass } = props;

  const mapOptions = (option) => {
    let text = option[labelKey];
    if (useGlobalMapper) {
      text = (<TextMap>{option[valueKey]}</TextMap>);
    }

    return (
      <Menu.Item key={option[valueKey]} className={itemClass}>
        {text}
      </Menu.Item>
    );
  };

  const mapGroupOptions = (groupOptions) => map(groupOptions, (optionGroup, key) => {
    if (key === 'Base') {
      return map(optionGroup, mapOptions);
    }
    const title = (<TextMap>{key}</TextMap>);
    return (
      <Menu.ItemGroup key={key} title={title} selectable={false} className={itemClass}>
        {map(optionGroup, mapOptions)}
      </Menu.ItemGroup>
    );
  });

  let menuSelections;
  if (groupByOptions) {
    menuSelections = mapGroupOptions(groupByOptions);
  } else {
    menuSelections = mapOptions(options);
  }

  return (
    <Menu onClick={(e) => onSelect(e.key)}>
      {menuSelections}
    </Menu>
  );
}

MenuOptions.propTypes = {
  useGlobalMapper: PropTypes.bool,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  groupByOptions: PropTypes.objectOf(PropTypes.array),
  onSelect: PropTypes.func,
  itemClass: PropTypes.string,
};
