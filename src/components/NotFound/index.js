import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid/lib';
import styles from './NotFound.module.scss';
import { SixSenseLogo, Text, Icon } from 'components';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { actions } from 'modules/global';
import { getRandomInt, isUserLoggedIn } from 'utils/utils';
import { htmlStrings } from 'utils/constants';

const {
  URSA_MAJOR_ICON,
  COMET_ICON,
  ASTRONAUT_ICON,
  GALAXY_ICON,
  PLANET_ICON,
  ROCKET_ICON,
  SOLAR_SYSTEM_ICON,
  SOYUZ_ICON,
} = Icon;

const ICON_TYPE_LIST = [
  URSA_MAJOR_ICON,
  COMET_ICON,
  ASTRONAUT_ICON,
  GALAXY_ICON,
  PLANET_ICON,
  ROCKET_ICON,
  SOLAR_SYSTEM_ICON,
  SOYUZ_ICON,
];

export class NotFoundComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      icons: null,
    };
  }

  /* eslint react/no-did-mount-set-state: 0 */
  componentDidMount() {
    const element = document.getElementById('notFoundContainer');
    const heightIncrement = Math.max(Math.floor(element.clientHeight / 4), 250);
    const heightVariation = Math.floor(heightIncrement / 2);
    const widthIncrement = Math.max(Math.floor(element.clientHeight / 5), 450);
    const widthVariation = Math.floor(widthIncrement / 3);
    const icons = [];

    let currentHeight = heightVariation;
    let currentWidth = widthVariation;

    while (currentHeight < element.clientHeight) {
      currentWidth = widthVariation;
      while (currentWidth < element.clientWidth) {
        icons.push(
          <div
            key={currentHeight + currentWidth}
            style={{
              position: 'absolute',
              left: `${currentWidth + getRandomInt(-widthVariation / 2, widthVariation / 2)}px`,
              top: `${currentHeight + getRandomInt(-heightVariation / 2, heightVariation / 2)}px`,
            }}
          >
            <Icon
              size={'extraLarge'}
              iconType={ICON_TYPE_LIST[Math.floor(Math.random() * ICON_TYPE_LIST.length)]}
            />
          </div>
        );
        currentWidth += widthIncrement;
      }
      currentHeight += heightIncrement;
    }
    this.setState({ ...this.state, icons });
  }

  componentWillReceiveProps(nextProps) {
    const { location, stateLocation } = nextProps;
    if (location === stateLocation && !this.state.visible) {
      this.props.showGlobalNotFound(false);
    }
  }

  renderNotFoundPage() {
    const { message } = this.props;
    const redirectPath = isUserLoggedIn ? '/discover/dashboard' : '/login';
    const buttonLabel = isUserLoggedIn ? 'Home' : 'Login';
    return (
      <div className={styles.body} id={'notFoundContainer'}>
        <div className={styles.content}>
          <Row center={'xs'} middle={'xs'}>
            <Col xs={12}>
              <div>
                <SixSenseLogo className={styles.logo} light />
              </div>
              <div>
                <Text color={'white'} size={'large3'}>
                  {message}
                </Text>
              </div>
              <button
                className={styles.button}
                onClick={() =>
                  this.setState({ visible: false }, () => browserHistory.push(redirectPath))}
              >
                <Text color={'white'} size={'large4'}>
                  {buttonLabel}
                </Text>
              </button>
            </Col>
          </Row>
        </div>
        <div>
          {this.state.icons}
        </div>
      </div>
    );
  }

  render() {
    return this.renderNotFoundPage();
  }
}

NotFoundComponent.propTypes = {
  location: PropTypes.object,
  stateLocation: PropTypes.object,
  showGlobalNotFound: PropTypes.func,
  message: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

NotFoundComponent.defaultProps = {
  message: htmlStrings.NOT_FOUND,
};

const NotFound = connect(null, actions)(NotFoundComponent);
export default NotFound;
