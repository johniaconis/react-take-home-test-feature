import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid/lib';
import { Select as WrappedSelect } from 'antd';
import { TextMap, LabelText } from 'components';
import { FormComponent } from 'HOCS';
import styles from './Select.module.scss';

const Option = WrappedSelect.Option;

const labelSizes = {
  default: 'normal',
  large: 'med1',
  small: 'small1',
};

function Select(props) {
  const {
    id,
    onChange,
    width,
    options,
    useGlobalMapper,
    valueKey,
    labelKey,
    defaultValue,
    filterOption = true,
    className,
    disabled,
    value,
    label,
    labelSize,
    outerClass,
    placeholder,
    dropdownMatchSelectWidth = true,
  } = props;

  const style = { width };

  const mapOption = (option) => {
    const text = useGlobalMapper ? <TextMap>{option[valueKey]}</TextMap> : option[labelKey];

    const optionValue = option[valueKey];

    return (
      <Option key={optionValue} value={optionValue}>
        {text}
      </Option>
    );
  };

  const optionItems = options.map((option) => mapOption(option));

  let labelComponent;
  if (label) {
    labelComponent = (
      <div className={styles.label}>
        <LabelText size={labelSizes[labelSize || 'default']}>{label}</LabelText>
      </div>
    );
  }

  // temp hack until Doga/Nitin update their pages
  let valueProp = {};
  if (value !== undefined && value !== null) {
    valueProp = { value };
  }

  if (defaultValue !== undefined) {
    valueProp = { ...valueProp, defaultValue };
  }

  return (
    <div className={outerClass} id={id}>
      <Col xs={12}>
        <Row middle="xs">
          {labelComponent}
          <WrappedSelect
            dropdownMatchSelectWidth={dropdownMatchSelectWidth}
            className={className}
            style={style}
            disabled={disabled}
            placeholder={placeholder}
            showSearch
            onChange={onChange}
            filterOption={filterOption}
            {...valueProp}
          >
            {optionItems}
          </WrappedSelect>
        </Row>
      </Col>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  outerClass: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number]),
  width: PropTypes.number,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
  useGlobalMapper: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  labelSize: PropTypes.oneOf(['default', 'large', 'small']),
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  dropdownMatchSelectWidth: PropTypes.bool,
  filterOption: PropTypes.bool,
};

Select.defaultProps = {
  width: 200,
  labelKey: 'label',
  valueKey: 'value',
};

const mapInputToProps = (input) => ({
  defaultValue: input.value,
  onChange: input.onChange,
});

Select.form = FormComponent(Select, mapInputToProps);

export default Select;
