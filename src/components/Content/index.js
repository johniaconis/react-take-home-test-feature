import React from 'react';
import { StateComponent, CurryComponent } from 'HOCS';
import PropTypes from 'prop-types';
import { Icon, ErrorComponent, Loading,
  GenericMessage } from 'components';

const ErrorComponentCard = ErrorComponent.ErrorComponentCard;

const { ROCKET_ICON, URSA_MAJOR_ICON } = Icon;

function Content(props) {
  const { children, className } = props;
  return (<div className={className}>{children}</div>);
}

const cardNoData = CurryComponent(GenericMessage, { messageLevel: 'card', iconType: ROCKET_ICON });
const cardZeroData = CurryComponent(GenericMessage,
  { messageLevel: 'card', iconType: URSA_MAJOR_ICON, iconColor: 'grey' });
const cardLoading = CurryComponent(Loading, { level: 'card' });

export const ContentComponent = StateComponent(
  Content, ErrorComponentCard, cardZeroData, cardNoData, cardLoading);

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ContentComponent;
