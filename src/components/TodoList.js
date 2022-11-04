import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { click, todos, deleteTodo } = props;
  return (
    <ul className="Todo-list">
      {todos.map((todo) => (
        <TodoItem click={click} item={todo} deleteTodo={deleteTodo} />))}
    </ul>
  );
};

TodoList.propTypes = {
  click: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
