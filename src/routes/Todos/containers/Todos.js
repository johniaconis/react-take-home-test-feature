import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { StateComponent, LoadComponent } from 'HOCS';
import { stateSelector, titleSelector } from '../selectors';
import { Row, Col } from 'react-flexbox-grid/lib';
import { Text, Button, Icon } from 'components';
import { actions } from '../modules';
import { strings } from 'utils/constants';
import styles from './Todos.module.scss';
import { connect } from 'react-redux';

const { ERROR_ICON, REFRESH_ICON } = Icon;

function TodosComponent(props) {
  const { title, load } = props;

  return (
    <Col xs={12}>
      <Row className={styles.todos}>
        <Text size="large2" weight="med1">
        Todo Title: {title}
        </Text>
        <Button
          type="primary"
          className={styles.reloadButton}
          iconType={REFRESH_ICON}
          onClick={() => load()}
        >
          Reload Top Level Call
        </Button>
        <Button
          type="primary"
          className={styles.reloadButton}
          iconType={ERROR_ICON}
          onClick={() => load(true)}
        >
          Reload Top Level Call With Error
        </Button>
      </Row>
      <Row>
        {props.children}
      </Row>
    </Col>
  );
}

// Many times you do want to load something in a parent route
// before a sub-route.  In this case, we will load a count as an example.
const mapStateToProps = (state) => ({
  title: titleSelector(state),
  ...stateSelector(state),
  errorMessage: strings.GLOBAL_ERROR_MESSAGE,
});

TodosComponent.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  load: PropTypes.func,
};

export const Todos = compose(
  connect(mapStateToProps, actions),
  StateComponent,
  LoadComponent,
)(TodosComponent);
