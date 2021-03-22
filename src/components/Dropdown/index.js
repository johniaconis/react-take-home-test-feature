import { Select } from 'antd';
import React from 'react';
import { Row, Col } from 'react-flexbox-grid/lib';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';
import { LabelText } from 'components';
import { FormComponent } from 'HOCS';

const Option = Select.Option;

function Dropdown(props) {
  const {
    label,
    items,
    itemMapping,
    onItemSelect,
    dropdownLabel,
    size,
    selectorClassName,
    className,
    id,
  } = props;
  const dropdownSize = size || 'default';

  let itemMappings;
  if (itemMapping) {
    itemMappings = itemMapping;
  } else {
    itemMappings = (item) => item;
  }

  const optionItems = items.map((item) =>
    <Option key={item} value={item}>
      {itemMappings(item)}
    </Option>
  );

  const selector = (
    <Select
      className={selectorClassName}
      defaultValue={dropdownLabel}
      value={dropdownLabel}
      dropdownMatchSelectWidth={false}
      size={dropdownSize}
      onChange={onItemSelect}
    >
      {optionItems}
    </Select>
  );

  const labelSize = (dropdownLabelSize) =>
    ({
      default: 'normal',
      large: 'med1',
      small: 'small1',
    }[dropdownLabelSize]);

  return (
    <div className={className} id={id}>
      <Row middle="xs">
        <Col>
          <div className={styles.label}>
            <LabelText size={labelSize(dropdownSize)}>
              {label}
            </LabelText>
          </div>
        </Col>
        <Col>
          {selector}
        </Col>
      </Row>
    </div>
  );
}

Dropdown.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  itemMapping: PropTypes.func,
  onItemSelect: PropTypes.func,
  dropdownLabel: PropTypes.string,
  selectorClassName: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.form = FormComponent(Dropdown);

export default Dropdown;
