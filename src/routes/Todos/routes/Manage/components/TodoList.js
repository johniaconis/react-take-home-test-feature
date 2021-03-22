import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import { Col, Row } from 'react-flexbox-grid/lib';


export function TodoList(props) {
  const { todos, toggle, reorderTodo } = props;

  const renderTodos = todos.map((todo, index) => {
    const { name, completed, id } = todo;
    return (
      <Todo
        name={name}
        toggle={toggle}
        key={id}
        id={id}
        index={index}
        completed={completed}
        todoLength={todos.length}
        reorderTodo={reorderTodo}
      />
    );
  });

  return (
    <Row center="xs">
      <Col xs={12}>
        {renderTodos}
      </Col>
    </Row>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  toggle: PropTypes.func,
  reorderTodo: PropTypes.func,
};
