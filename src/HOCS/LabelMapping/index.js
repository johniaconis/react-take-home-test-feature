import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function LabelMapping(WrappedComponent, labelPropName) {
  const LabelMappingComponent = (props) => {
    const { displayMap, [labelPropName]: labelValue } = props;
    const mappedValue = displayMap[labelValue] ||
      displayMap[labelValue.toLowerCase()] || labelValue;
    const dynamicProps = { ...props, [labelPropName]: mappedValue };

    return <WrappedComponent {...dynamicProps} />;
  };

  LabelMappingComponent.propTypes = {
    displayMap: PropTypes.object,
  };

  const mapStateToProps = (state) => ({
    displayMap: state.labels.displayMap,
  });

  return connect(mapStateToProps)(LabelMappingComponent);
}

export default LabelMapping;
