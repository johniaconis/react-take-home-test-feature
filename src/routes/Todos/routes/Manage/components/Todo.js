import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.scss';
import { Card, Checkbox } from 'antd';
import { Row } from 'react-flexbox-grid/lib';

import { Button, Icon } from 'components';

const { UP_ARROW_ICON, DOWN_ARROW_ICON } = Icon;

export function Todo(props) {
  const { name, completed, id, toggle, reorderTodo, index, todoLength } = props;

  const toggleTodo = () => toggle(id);
  const reorderTodoHandler = (orderType) => reorderTodo(id, orderType);

  return (
    <Card className={styles.card}>
      <Row>
        {index <= 0 ? null : (
          <Button
            type="primary"
            className={styles.icon}
            iconType={UP_ARROW_ICON}
            onClick={() => reorderTodoHandler('UP')}
          />
        )}
        {index === todoLength - 1 ? null : (
          <Button
            type="primary"
            className={styles.icon}
            iconType={DOWN_ARROW_ICON}
            onClick={() => reorderTodoHandler('DOWN')}
          />
        )}
        <Checkbox checked={completed} onChange={toggleTodo} />
        <p className={styles.text}>{name}</p>
      </Row>
    </Card>
  );
}

Todo.propTypes = {
  name: PropTypes.string,
  completed: PropTypes.bool,
  id: PropTypes.number,
  index: PropTypes.number,
  todoLength: PropTypes.number,
  toggle: PropTypes.func,
  reorderTodo: PropTypes.func,
};
