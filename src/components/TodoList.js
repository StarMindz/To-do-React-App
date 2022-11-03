import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

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
  todos: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoList;
