import React from 'react';
import styles from './ErrorComponent.module.scss';
import { ErrorPropsProxy, CurryComponent } from 'HOCS';
import PropTypes from 'prop-types';
import { htmlStrings } from 'utils/constants';
import { Text, Icon, GenericMessage } from 'components';

const { DATA_ERROR_ICON, ERROR_ICON } = Icon;

/* eslint-disable */
// Reusable ErrorComponent
function ErrorComponentOld(props) {
  const { errorMessage, errorStatus, errorIconType, className, size, onClick } = props;
  return (
    <div className={`${styles.siuiErrorComponent} ${className}`} onClick={onClick}>
      <Icon iconType={errorIconType} size={size} />
      <Text size={size}>
        {errorMessage}
      </Text>
    </div>
  );
}
export const ErrorComponent = CurryComponent(GenericMessage, {
  messageLevel: 'page',
  iconType: ERROR_ICON,
  iconColor: 'red'
});

export const ErrorComponentCard = CurryComponent(GenericMessage, {
  messageLevel: 'card',
  iconType: DATA_ERROR_ICON,
  iconColor: 'red',
  message: htmlStrings.CARD_ERROR
});
// Wrap in our app specific behaviour
export const WrappedErrorComponent = ErrorPropsProxy(ErrorComponent);

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
  errorStatus: PropTypes.number,
  errorIconType: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string
};

ErrorComponent.defaultProps = {
  size: 'med1'
};

ErrorComponent.ErrorComponentCard = ErrorComponentCard;

export default ErrorComponent;
