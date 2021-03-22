import React from 'react';
import { pickBy } from 'lodash';

function CurryComponent(WrappedComponent, curriedProps = {}) {
  return function Curried(props) {
    const componentProps = { ...curriedProps, ...pickBy(props, (value) => value !== undefined) };
    return <WrappedComponent {...componentProps} />;
  };
}

export default CurryComponent;
