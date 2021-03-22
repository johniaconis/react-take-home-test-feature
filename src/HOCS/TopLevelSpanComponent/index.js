import React from 'react';
import { Card } from 'antd';
import { TopLevelWrapper } from 'components';
import PropTypes from 'prop-types';

function TopLevelSpanComponent(WrappedComponent, cardStyle) {
  const TopLevel = (props) => {
    if (props.loading) {
      return (
        <TopLevelWrapper>
          <Card loading style={cardStyle} />
        </TopLevelWrapper>
      );
    }

    return <WrappedComponent {...props} />;
  };

  TopLevel.propTypes = {
    loading: PropTypes.bool,
  };

  return TopLevel;
}

export default TopLevelSpanComponent;
